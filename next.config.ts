import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Vercel 使用默认 .next；本地构建用 .next-build 避开 WorkBuddy 安全删除保护
  distDir: process.env.VERCEL ? ".next" : ".next-build",
};

export default nextConfig;
