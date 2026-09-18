// commerce-agents 路线的代码快照配方：dev 仓库里每一步的文件 → 演练里展示的路径。
// Stage A 每步在 dev 里是一个独立文件（s00_llm_request.py、s01_search_tool.py …），
// 演练里统一显示成 agent.py，这样相邻两步能按行做 diff，看出“在上一步基础上加了什么”。
export default {
  dev: '../commerce-agents-dev',
  out: 'src/data/codeWalkthroughs/commerce.files.js',
  snapshots: [
    { key: 's00', files: { 'agent.py': 'cookbooks/stage_a/s00_llm_request.py' } },
    { key: 's01', files: { 'agent.py': 'cookbooks/stage_a/s01_search_tool.py' } },
  ],
};
