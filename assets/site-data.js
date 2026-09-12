/* ===== 站点信息（全站共用的内容槽） =====
   改名字、简介、联系方式等，只需要改这一个文件，
   主页 / 页脚 / 导航页会自动更新。标 [TODO] 的位置填上你自己的内容。 */

const SITE = {
  // 站名（<title> 与页脚用；页头 logo 显示为「阿源小站」）
  siteName: "阿源的小站",
  siteNameAccent: "小站", // logo 里带下划线强调的那部分

  // 你的名字 / 昵称
  owner: "阿源",

  // 一句话简介
  tagline: "折腾 AI 与开源 · 这里是我的线上小窝",

  // [TODO] 关于我：两三句话，职业 / 兴趣 / 正在做的事
  about:
    "关注 AI 与开源社区，喜欢折腾新工具和新模型。这里记录我的笔记、想法，以及每天用得上的网址。",

  // [TODO] 技能 / 工具，逗号分隔
  skills: "AI 工具, Python, 开源项目",

  // 联系方式（已填写）
  email: "farhorizon123@proton.me",

  // GitHub 主页（会显示在首页「联系我」）
  github: "yuan-source-666",

  // 个人成果（会显示在首页「个人成果」板块，按重要性排序）
  projects: [
    {
      name: "v8",
      desc: "CPU 可训练的小语言模型：Hybrid Mamba–Transformer 混合架构 + 自衡驱动信号（验证损失 2.463）",
      url: "https://github.com/yuan-source-666/v8",
      extra: { label: "论文 PDF", url: "assets/v8-paper.pdf" },
      image: "assets/loss_curve.png",
      imageAlt: "v8 训练损失曲线",
    },
    {
      name: "dsh-task-notifier",
      desc: "DeepSeek Harness 社区插件：回合/子代理/后台任务完成时发系统通知，已发布 npm",
      url: "https://github.com/yuan-source-666/dsh-task-notifier",
    },
    {
      name: "trisoul-plugin-scoring",
      desc: "AI 记忆 / 技能插件 10 维评分基准（1000 分制）与 GitHub 同类项目对照研究",
      url: "https://github.com/yuan-source-666/trisoul-plugin-scoring",
      image:
        "https://raw.githubusercontent.com/yuan-source-666/trisoul-plugin-scoring/main/assets/scores-overview.png",
      imageAlt: "10 维评分总表",
    },
    {
      name: "agi-research-evolution-os",
      desc: "在国产 DCU 上用程序侧架构（工具调用/反思循环/进化提案器）探索小模型自进化",
      url: "https://github.com/yuan-source-666/agi-research-evolution-os",
    },
  ],
};
