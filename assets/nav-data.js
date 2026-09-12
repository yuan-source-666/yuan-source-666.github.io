// ===== 网址导航种子数据 =====
// 仅在访客**首次打开**导航页时导入浏览器 localStorage；
// 之后以页面上的增删改为准（设置里可导出 JSON 备份 / 恢复默认重新读这份种子）。
// 定位：只收录与 AI、开源社区、开发部署相关的网站。

const NAV_DATA = [
  {
    category: "🤖 AI 助手",
    sites: [
      { name: "ChatGPT", url: "https://chatgpt.com", desc: "OpenAI 对话助手" },
      { name: "Claude", url: "https://claude.ai", desc: "Anthropic 对话助手" },
      { name: "Gemini", url: "https://gemini.google.com", desc: "Google 对话助手" },
      { name: "DeepSeek", url: "https://chat.deepseek.com", desc: "深度求索" },
      { name: "Kimi", url: "https://kimi.moonshot.cn", desc: "月之暗面" },
      { name: "通义千问", url: "https://tongyi.aliyun.com", desc: "阿里通义" },
    ],
  },
  {
    category: "🧠 AI 平台",
    sites: [
      { name: "Hugging Face", url: "https://huggingface.co", desc: "模型与数据集社区" },
      { name: "魔搭 ModelScope", url: "https://modelscope.cn", desc: "阿里模型社区" },
      { name: "Papers with Code", url: "https://paperswithcode.com", desc: "论文 + 代码" },
      { name: "arXiv", url: "https://arxiv.org", desc: "预印本论文库" },
      { name: "OpenRouter", url: "https://openrouter.ai", desc: "多模型 API 聚合" },
      { name: "LMArena", url: "https://lmarena.ai", desc: "大模型竞技场排名" },
    ],
  },
  {
    category: "💻 开源社区",
    sites: [
      { name: "GitHub", url: "https://github.com", desc: "全球最大代码托管平台" },
      { name: "Gitee", url: "https://gitee.com", desc: "码云，国内代码托管" },
      { name: "GitLab", url: "https://gitlab.com", desc: "开源代码托管" },
      { name: "Stack Overflow", url: "https://stackoverflow.com", desc: "程序员问答社区" },
      { name: "V2EX", url: "https://www.v2ex.com", desc: "创意工作者社区" },
      { name: "HelloGitHub", url: "https://hellogithub.com", desc: "开源项目月刊" },
    ],
  },
  {
    category: "📰 资讯周刊",
    sites: [
      { name: "Hacker News", url: "https://news.ycombinator.com", desc: "科技公司新闻" },
      { name: "机器之心", url: "https://www.jiqizhixin.com", desc: "AI 技术媒体" },
      { name: "量子位", url: "https://www.qbitai.com", desc: "AI 资讯" },
      { name: "科技爱好者周刊", url: "https://www.ruanyifeng.com/blog/", desc: "阮一峰 · 每周更新" },
      { name: "AIbase", url: "https://www.aibase.com", desc: "AI 工具与资讯" },
      { name: "InfoQ", url: "https://www.infoq.cn", desc: "技术开发社区" },
    ],
  },
  {
    category: "🛠 开发工具",
    sites: [
      { name: "Can I Use", url: "https://caniuse.com", desc: "浏览器兼容性查询" },
      { name: "TinyPNG", url: "https://tinypng.com", desc: "图片无损压缩" },
      { name: "Shields.io", url: "https://shields.io", desc: "README 徽章生成" },
      { name: "jsDelivr", url: "https://www.jsdelivr.com", desc: "开源 CDN" },
      { name: "Regex101", url: "https://regex101.com", desc: "正则调试" },
      { name: "CodePen", url: "https://codepen.io", desc: "前端代码 playground" },
    ],
  },
  {
    category: "📄 部署与文档",
    sites: [
      { name: "MDN 文档", url: "https://developer.mozilla.org/zh-CN/", desc: "Web 开发权威文档" },
      { name: "GitHub Pages", url: "https://pages.github.com", desc: "GitHub 静态托管" },
      { name: "GitHub Actions", url: "https://docs.github.com/actions", desc: "CI/CD 文档" },
      { name: "Cloudflare", url: "https://www.cloudflare.com", desc: "CDN 与域名" },
      { name: "Vercel", url: "https://vercel.com", desc: "前端部署平台" },
      { name: "Nginx 文档", url: "https://nginx.org/en/docs/", desc: "Web 服务器文档" },
    ],
  },
];
