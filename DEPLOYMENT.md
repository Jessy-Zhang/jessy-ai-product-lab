# Jessy AI Product Lab — 部署上线指南

## 架构概览

```
GitHub 仓库  ──push──▶  Vercel 自动构建  ──▶  全球 CDN
     ↑                                           ↓
  本地开发                               访客访问（免备案）
```

---

## Step 1: 初始化 Git 仓库并推送到 GitHub

```bash
cd jessy-ai-product-lab

# 初始化 Git
git init
git add .
git commit -m "Initial commit: Jessy AI Product Lab"

# 在 GitHub 上创建新仓库（不要勾选 README/gitignore）
# 然后关联并推送
git remote add origin https://github.com/<你的用户名>/jessy-ai-product-lab.git
git branch -M main
git push -u origin main
```

---

## Step 2: 连接 Vercel

1. 访问 [vercel.com/new](https://vercel.com/new)
2. 用 GitHub 账号登录
3. 点击 **Import Project**
4. 选择你的 `jessy-ai-product-lab` 仓库
5. Framework Preset 会自动识别为 **Next.js**
6. **Build Command** 保持默认（`next build --webpack`，已在 package.json 中配置）
7. 点击 **Deploy**

部署完成后，你会获得一个 `xxx.vercel.app` 的免费域名，立即可访问。

---

## Step 3: 绑定自定义域名（可选但推荐）

1. 在 Vercel 项目页面 → **Settings** → **Domains**
2. 输入你的域名（如 `jessy.dev`）
3. 按提示到域名注册商处添加 DNS 记录：
   - **A 记录**：指向 `76.76.21.21`
   - **CNAME 记录**：`www` 指向 `cname.vercel-dns.com`
4. 等待 DNS 生效（通常几分钟到几小时）
5. Vercel 自动签发 SSL 证书

### 域名推荐（均无需 ICP 备案）

| 域名 | 年费 | 说明 |
|------|------|------|
| `jessy.dev` | ~¥120 | 开发者气质，HTTPS 强制 |
| `jessy.ai` | ~¥600 | AI Product Lab 绝配 |
| `jessylab.dev` | ~¥120 | 直接呼应 Lab 定位 |
| `jessy.me` | ~¥100 | 个人品牌感 |

---

## Step 4: 日常更新流程

以后每次更新网站，只需：

```bash
# 1. 本地修改代码或内容
# 2. 提交并推送
git add .
git commit -m "Update: <描述改动>"
git push

# 3. Vercel 自动检测推送 → 自动构建 → 自动上线
```

**无需手动部署，推送即上线。**

---

## 添加博客文章

编辑 `src/lib/posts.ts`，在 `blogPosts` 数组中添加新对象：

```typescript
{
  slug: "my-new-post",           // URL 路径，用英文短横线
  title: "文章标题",
  date: "2026-08-10",            // YYYY-MM-DD
  excerpt: "摘要描述",
  tags: ["标签1", "标签2"],
  content: `
    <h2>标题</h2>
    <p>正文内容，支持 HTML 标签。</p>
    <ul>
      <li>列表项</li>
    </ul>
  `,
}
```

---

## 添加产品

编辑 `src/app/products/page.tsx`，在 `products` 数组中添加新对象：

```typescript
{
  name: "产品名称",
  description: "产品描述",
  tags: ["AI", "工具"],
  status: "Live",    // Live | Beta | Open Source | Experiment
  link: "https://...",  // 产品链接
}
```

---

## 常见问题

**Q: 为什么构建命令有 `--webpack`？**
A: 当前环境 SWC 原生模块不兼容，使用 webpack 替代。Vercel 部署时会自动处理，无需额外配置。

**Q: 国内访问速度怎么样？**
A: Vercel 有全球 CDN 节点（包括香港、日本），国内访问延迟通常在 200-500ms，日常使用没问题。如果对速度有更高要求，可以考虑 Cloudflare Pages。

**Q: 需要备案吗？**
A: 不需要。Vercel 使用海外服务器，不在中国大陆境内，无需 ICP 备案。使用 `.dev`/`.ai`/`.me` 等国际域名也不需要备案。

**Q: 免费额度够用吗？**
A: Vercel 免费版：每月 100GB 流量、无限部署。个人站点完全够用。
