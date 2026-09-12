# 阿源的小站

纯静态个人主页：个人主页（杂志式名片）+ 博客 + 可编辑网址导航页。
无需后端、无需构建工具，双击 `index.html` 就能打开。

内容定位：**AI 与开源社区**——导航页只收录 AI、开源、开发部署相关网站。

视觉风格：**极简黑白 · 杂志排版**，内置亮 / 暗双主题（跟随系统，可手动切换，选择会记住）。

## 目录结构

```
my-website/
├── index.html          个人主页
├── nav.html            网址导航页（可直接在页面上增删分类/网址）
├── blog/
│   ├── index.html      博客文章列表（自动读取数据生成）
│   └── posts/          所有文章页面放这里
└── assets/
    ├── style.css       全站样式（设计变量在文件开头，改主题色就改这里）
    ├── theme.js        亮 / 暗主题切换
    ├── site-data.js    站点信息：名字、简介、技能、邮箱 ← 改内容只改这一个文件
    ├── nav-data.js     网址导航的种子数据（仅首次访问导入）
    └── posts-data.js   博客文章数据   ← 发布新文章改这里
```

## 本地使用

双击 `index.html` 即可在浏览器打开，或者起个本地服务器（推荐，路径更规范）：

```bash
cd my-website
python -m http.server 8000
# 浏览器访问 http://localhost:8000
```

建议把浏览器主页 / 启动页设为 `nav.html`，网址导航就能当浏览器起始页用。

## 日常维护

### 修改个人信息（名字 / 简介 / 邮箱）
打开 `assets/site-data.js`，把标了 `[TODO]` 的位置换成自己的内容，
主页会自动更新——不用再翻 HTML 找占位文字。

### 网址导航
导航数据保存在**浏览器 localStorage** 里，直接在页面上操作：
- 添加 / 编辑 / 删除分类和网址（悬停在分类标题或网址行上会出现操作按钮）；
- 拖拽分类标题或网址行可排序、可跨分类移动；
- 搜索框支持关键词高亮，按 `Enter` 直接打开第一个结果，按 `/` 聚焦搜索框；
- **数据备份**：「设置」里可导出 / 导入 JSON，换浏览器或清缓存前记得先导出。

`assets/nav-data.js` 只是**首次访问的种子数据**；想重置到种子状态，用「设置 → 恢复默认」。

### 发布新文章
1. 复制 `blog/posts/hello-world.html`，改名为新文章文件（英文文件名），写好内容；
2. 在 `assets/posts-data.js` 的 `POSTS` 数组**最前面**加一条记录（标题、文件路径、日期、标签、摘要）；
3. 首页「近期写作」和博客列表会自动更新。

## 部署到 GitHub Pages（个人主页）

全站都是相对路径，放在仓库根目录或子目录都能正常工作。

**方式一（推荐）：用户主域名仓库**
1. 新建仓库，名为 `yuan-source-666.github.io`（与用户名一致）；
2. 把本目录内容推上去：

```bash
cd my-website
git init -b main && git add -A
git commit -m "阿源的个人主页"
git remote add origin https://github.com/yuan-source-666/yuan-source-666.github.io.git
git push -u origin main
```

3. 访问 **https://yuan-source-666.github.io** 即可（首次部署等 1-2 分钟）。

**方式二：普通仓库名**（如 `my-website`）
推上去后到仓库 Settings → Pages → Source 选 `main` 分支 `/ (root)`，
访问 `https://yuan-source-666.github.io/my-website/`。

## 关于修改权限

- 站点内容（页面、文章、导航种子数据）**只有你本人能改**：改动仓库即改动网站，访客无法写入；
- 导航页支持访客在自己浏览器里增删网址，但那只存在**其自己的 localStorage** 里，不影响你和任何其他访客；
- 你自己日常维护导航：在页面上直接编辑 + 定期「设置 → 导出 JSON」备份即可。
