// 三个演练（sampling / notifications / roots）的数据入口，以及界面文案（取自官方中文版）。
import sampling from './sampling';
import notifications from './notifications';
import roots from './roots';

export const UI = {
  "tour.aria": "第 {n} 步，共 {total} 步",
  "tour.steps.title": "教程步骤",
  "tour.steps.body": "让我们通过一个示例项目来更好地了解如何实现此功能。",
  "tour.buttons.title": "导航控件",
  "tour.buttons.body": "使用这些按钮在教程步骤之间移动。",
  "tour.editor.title": "代码编辑器",
  "tour.editor.body": "我们将查看一个示例项目。我们不会运行这段代码！我们只是看一看以了解它的工作原理。",
  "tour.btn.prev": "上一步",
  "tour.btn.skip": "跳过",
  "tour.btn.next": "下一步",
  "tour.btn.finish": "完成",
  "step.heading": "{n}. {title}",
  "btn.prev": "← 上一步",
  "btn.next": "下一步 →",
  "files.heading": "文件",
  "aria.openFiles": "打开的文件",
  "aria.closeTab": "关闭 {path}",
  "empty.title": "没有打开的文件",
  "empty.body": "从资源管理器中打开一个文件，或通过教程步骤进行导航"
};

const WALKTHROUGHS = { sampling, notifications, roots };

export default WALKTHROUGHS;
