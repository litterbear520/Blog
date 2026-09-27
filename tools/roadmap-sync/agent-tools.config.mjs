// “工程化 Agent 工具”专题的代码快照配方：dev 仓库里的工具代码 → 演练里展示的包内路径。
// 专题各课共用一个快照 tools，每课的演练只挑自己要看的文件；加课时在这里补文件，重新生成。
export default {
  dev: '../commerce-agents-dev',
  out: 'src/data/codeWalkthroughs/agentTools.files.js',
  snapshots: [
    {
      key: 'tools',
      files: {
        'shopping_agent/tools/registry.py': 'shopping-agent/core/shopping_agent/tools/registry.py',
        'commerce_common/execution.py': 'commerce-common/commerce_common/execution.py',
        'shopping_agent/executor.py': 'shopping-agent/core/shopping_agent/executor.py',
        'shopping_agent/backend.py': 'shopping-agent/core/shopping_agent/backend.py',
        'commerce_common/streaming.py': 'commerce-common/commerce_common/streaming.py',
        'shopping_agent/serialization.py': 'shopping-agent/core/shopping_agent/serialization.py',
      },
    },
  ],
};
