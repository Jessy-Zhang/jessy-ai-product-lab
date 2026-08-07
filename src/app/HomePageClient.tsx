"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import AiAgentCard from "@/components/AiAgentCard";
import type { Agent } from "@/lib/agents";

export default function HomePageClient({ agents }: { agents: Agent[] }) {
  const { t, lang } = useLanguage();

  return (
    <>
      <section className="relative grid-bg overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
              </span>
              {t.home.badge}
            </div>

            <h1
              className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl"
              dangerouslySetInnerHTML={{
                __html: t.home.heroTitle,
              }}
            />

            <p className="max-w-xl text-lg leading-8 text-zinc-600">
              {t.home.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/products"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 text-sm font-medium text-white shadow-lg shadow-indigo-200 transition-all hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5"
              >
                {t.home.exploreBtn}
              </Link>
              <Link
                href="/blog"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-50"
              >
                {t.home.readBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: AI Playground */}
      <Section id="playground">
        <SectionHeader
          dotColor="bg-violet-500"
          title={t.home.sectionPlayground.title}
          subtitle={t.home.sectionPlayground.subtitle}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {agents.map((agent) => (
            <AiAgentCard key={agent.id} agent={agent} lang={lang} />
          ))}
        </div>
      </Section>

      {/* Section 2: Toolkit */}
      <Section id="toolkit" className="bg-zinc-50/50">
        <SectionHeader
          dotColor="bg-emerald-500"
          title={t.home.sectionToolkit.title}
          subtitle={t.home.sectionToolkit.subtitle}
        />
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-200 bg-white py-16 px-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-100 mb-4">
            <svg
              className="h-8 w-8 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-zinc-700 mb-2">
            {t.home.sectionToolkit.comingSoon}
          </h3>
          <p className="text-sm text-zinc-400 max-w-sm">
            {t.home.sectionToolkit.description}
          </p>
        </div>
      </Section>

      {/* Section 3: Insights */}
      <Section id="insights">
        <SectionHeader
          dotColor="bg-amber-500"
          title={t.home.sectionInsights.title}
          subtitle={t.home.sectionInsights.subtitle}
        />
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-200 bg-white py-16 px-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 mb-4">
            <svg
              className="h-8 w-8 text-amber-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-zinc-700 mb-2">
            {t.home.sectionInsights.building}
          </h3>
          <p className="text-sm text-zinc-400 max-w-sm mb-6">
            {t.home.sectionInsights.description}
          </p>
          <Link
            href="/blog"
            className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-200 px-5 text-sm font-medium text-zinc-600 transition-all hover:bg-zinc-50 hover:border-zinc-300"
          >
            {t.home.sectionInsights.viewAll} &rarr;
          </Link>
        </div>
      </Section>
    </>
  );
}

function Section({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) {
  return (
    <section id={id} className={`border-t border-zinc-100 ${className}`}>
      <div className="mx-auto max-w-5xl px-6 py-20">{children}</div>
    </section>
  );
}

function SectionHeader({
  dotColor,
  title,
  subtitle,
}: {
  dotColor: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-2">
        <span className={`inline-block h-2.5 w-2.5 rounded-full ${dotColor}`}></span>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
          {title}
        </h2>
      </div>
      <p className="text-zinc-500 leading-7">{subtitle}</p>
    </div>
  );
}
