"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    CMS: {
      init: (options: { config: Record<string, unknown> }) => void;
      registerPreviewTemplate: (name: string, component: unknown) => void;
    };
    CMS_MANUAL_INIT: boolean;
  }
}

const config = {
  backend: {
    name: "github",
    repo: "Jessy-Zhang/jessy-ai-product-lab",
    branch: "main",
    base_url: "https://www.jessylab.com",
    auth_endpoint: "/api/auth",
  },
  media_folder: "public/images",
  public_folder: "/images",
  site_url: "https://www.jessylab.com",
  display_url: "https://www.jessylab.com",
  locale: "zh_Hans",
  collections: [
    {
      name: "blog",
      label: "博客文章",
      label_singular: "博客文章",
      folder: "content/blog",
      create: true,
      slug: "{{slug}}",
      identifier_field: "title",
      format: "yaml-frontmatter",
      extension: "md",
      fields: [
        { label: "标题", name: "title", widget: "string" },
        { label: "日期", name: "date", widget: "date", format: "YYYY-MM-DD" },
        { label: "摘要", name: "excerpt", widget: "text" },
        { label: "标签", name: "tags", widget: "list", default: [] },
        { label: "正文", name: "body", widget: "markdown" },
      ],
    },
    {
      name: "products",
      label: "产品列表",
      editor: { preview: false },
      files: [
        {
          label: "产品数据",
          name: "products",
          file: "content/products.json",
          fields: [
            {
              label: "产品列表",
              name: "products",
              widget: "list",
              fields: [
                { label: "产品名", name: "name", widget: "string" },
                { label: "描述", name: "description", widget: "text" },
                { label: "标签", name: "tags", widget: "list", default: [] },
                {
                  label: "状态",
                  name: "status",
                  widget: "select",
                  options: ["已上线", "Beta", "开源", "实验阶段"],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "agents",
      label: "AI 智能体",
      editor: { preview: false },
      files: [
        {
          label: "智能体数据",
          name: "agents",
          file: "content/agents.json",
          fields: [
            {
              label: "智能体列表",
              name: "agents",
              widget: "list",
              fields: [
                { label: "ID", name: "id", widget: "string" },
                { label: "名称(中文)", name: "name", widget: "string" },
                { label: "名称(英文)", name: "nameEn", widget: "string" },
                { label: "描述(中文)", name: "desc", widget: "text" },
                { label: "描述(英文)", name: "descEn", widget: "text" },
                { label: "Emoji", name: "emoji", widget: "string" },
                {
                  label: "颜色",
                  name: "color",
                  widget: "select",
                  options: [
                    "from-violet-500 to-indigo-500",
                    "from-emerald-500 to-teal-500",
                    "from-amber-500 to-orange-500",
                    "from-rose-500 to-pink-500",
                    "from-blue-500 to-cyan-500",
                    "from-purple-500 to-pink-500",
                  ],
                },
                { label: "标签", name: "label", widget: "string", default: "AI" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default function AdminPage() {
  useEffect(() => {
    window.CMS_MANUAL_INIT = true;

    const link = document.createElement("link");
    link.href = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const existingScript = document.querySelector(
      'script[src*="decap-cms"]'
    );
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js";
    script.onload = () => {
      window.CMS.init({ config });
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return <div />;
}
