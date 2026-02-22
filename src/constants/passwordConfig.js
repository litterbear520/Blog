/**
 * 博客密码保护配置
 * 修改这里的密码来设置访问密码
 */
export const PASSWORD_CONFIG = {
  // 访问密码（请修改为你自己的密码）
  password: '123456',

  // 是否启用密码保护
  enabled: true,

  // 登录状态在 localStorage 中保存的 key
  storageKey: 'blog_auth_token',

  // 登录页面标题
  title: '小熊的博客',

  // 登录页面提示文字
  hint: '请输入访问密码',

  // 错误提示文字
  errorText: '密码错误，请重试',

  // 占位符文字
  placeholder: '请输入密码',

  // 提交按钮文字
  submitText: '进入博客',
};
