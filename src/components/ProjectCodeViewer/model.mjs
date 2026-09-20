// Pure viewer state: both guided tours and snapshot lessons use these rules.
export const hasFile = (files, path) => path != null && Object.hasOwn(files, path);

export function buildTree(paths) {
  const root = { children: [] };
  for (const path of paths) {
    let node = root;
    const parts = path.split('/');
    parts.forEach((name, i) => {
      const itemPath = parts.slice(0, i + 1).join('/');
      if (i === parts.length - 1) {
        node.children.push({ type: 'file', name, path });
      } else {
        let folder = node.children.find((child) => child.type === 'folder' && child.path === itemPath);
        if (!folder) {
          folder = { type: 'folder', name, path: itemPath, children: [] };
          node.children.push(folder);
        }
        node = folder;
      }
    });
  }
  const sort = (nodes) => [...nodes]
    .sort((a, b) => a.type === b.type ? a.name.localeCompare(b.name) : a.type === 'folder' ? -1 : 1)
    .map((node) => node.type === 'folder' ? { ...node, children: sort(node.children) } : node);
  return sort(root.children);
}

// A new step reveals its preferred files, retaining other still-existing tabs.
// A refreshed files object in the SAME step must not undo a user's selection.
export function syncSelection(previous, files, preferredFiles, stepKey) {
  const navigating = !previous || !Object.is(previous.stepKey, stepKey);
  const preferred = [...new Set(preferredFiles)].filter((path) => hasFile(files, path));
  const kept = (previous?.tabs || []).filter((path) => hasFile(files, path));
  const tabs = navigating ? [...preferred, ...kept.filter((path) => !preferred.includes(path))] : kept;
  const activeFile = (navigating && preferred[0]) ||
    (tabs.includes(previous?.activeFile) ? previous.activeFile : tabs[0]) || null;
  return { files, stepKey, tabs, activeFile };
}

export function openFile(selection, path) {
  if (!hasFile(selection.files, path)) return selection;
  return { ...selection, activeFile: path, tabs: selection.tabs.includes(path) ? selection.tabs : [...selection.tabs, path] };
}

export function closeFile(selection, path) {
  const tabs = selection.tabs.filter((tab) => tab !== path);
  return { ...selection, tabs, activeFile: selection.activeFile === path ? tabs.at(-1) ?? null : selection.activeFile };
}

export function fileStatus(files, previousFiles, path) {
  if (!previousFiles || !hasFile(files, path)) return 'same';
  if (!hasFile(previousFiles, path)) return 'new';
  return previousFiles[path] === files[path] ? 'same' : 'changed';
}

export function isFocused(line, ranges) {
  return line != null && ranges.some(([start, end = start]) => line >= start && line <= end);
}

export function languageOf(path) {
  const languages = { py: 'python', md: 'markdown', json: 'json', toml: 'toml', txt: 'text' };
  return languages[path.split('.').pop()?.toLowerCase()] || 'text';
}
