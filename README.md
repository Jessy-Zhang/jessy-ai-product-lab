# Jessy AI Product Lab

AI product experiments, insights, and building in public.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Content**: TypeScript-based blog system (no external CMS)
- **Deployment**: Vercel (GitHub auto-deploy)

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Global layout (Header + Footer)
│   ├── page.tsx            # Home page
│   ├── products/page.tsx   # Product showcase
│   ├── blog/
│   │   ├── page.tsx        # Blog list
│   │   └── [slug]/page.tsx # Blog post detail
│   └── about/page.tsx      # About page
├── components/
│   ├── Header.tsx          # Navigation bar
│   └── Footer.tsx          # Footer
└── lib/
    └── posts.ts            # Blog content (edit to add posts)
```

## Adding Blog Posts

Edit `src/lib/posts.ts` and add a new object to the `blogPosts` array:

```typescript
{
  slug: "my-new-post",
  title: "My New Post",
  date: "2026-08-10",
  excerpt: "A short description.",
  tags: ["Tag1", "Tag2"],
  content: `<h2>Heading</h2><p>Your content here.</p>`,
}
```

## Deployment (Vercel + GitHub)

1. **Push to GitHub**: Create a repo and push this code.
2. **Connect Vercel**: Go to [vercel.com/new](https://vercel.com/new), import your GitHub repo.
3. **Auto-deploy**: Vercel will auto-deploy on every push to `main`.
4. **Custom domain**: Add your domain in Vercel project settings > Domains.

No ICP filing needed - Vercel uses overseas edge servers.

## License

MIT
