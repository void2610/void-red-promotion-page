"use client";

import Link from "next/link";
import { ContentSection } from "@/components/layout/SectionLayout";
import { getLatestNews } from "@/data/news";
import type { NewsItem } from "@/data/news";
import { cn } from "@/utils/cn";

interface NewsSectionProps {
  className?: string;
  // 表示件数 (省略時は全件)
  limit?: number;
  // MORE リンクのリンク先 (指定時のみリンクを表示)
  moreLinkHref?: string;
}

// ニュース 1 件分の表示
function NewsRow({ item }: { item: NewsItem }) {
  // タイトル本体 (リンクが無ければそのまま)
  const titleNode = item.link ? (
    <Link
      href={item.link}
      target={"_blank"}
      rel={"noopener noreferrer"}
      className="hover:text-accent-red transition-colors duration-200"
    >
      {item.title}
    </Link>
  ) : (
    item.title
  );

  return (
    <li className="py-4">
      <article className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6">
        {/* 日付 */}
        <time
          dateTime={item.date}
          className="text-foreground/60 text-sm tabular-nums shrink-0 md:w-28"
        >
          {item.date}
        </time>

        {/* カテゴリバッジ */}
        {item.category && (
          <span
            className={cn(
              "shrink-0 self-start md:self-auto",
              "text-xs text-accent-red border border-accent-red",
              "px-2 py-0.5 rounded",
            )}
          >
            {item.category}
          </span>
        )}

        {/* タイトル + 本文 */}
        <div className="flex-1 min-w-0">
          <h3 className="text-foreground text-base md:text-lg leading-snug">
            {titleNode}
          </h3>
          {item.body && (
            <p className="text-foreground/80 text-sm mt-1 leading-relaxed">
              {item.body}
            </p>
          )}
        </div>
      </article>
    </li>
  );
}

// ニュースセクションコンポーネント
export default function NewsSection({
  className,
  limit,
  moreLinkHref,
}: NewsSectionProps) {
  const items = getLatestNews(limit);

  return (
    <ContentSection id="news" title="ニュース" className={className}>
      <div className="max-w-3xl mx-auto">
        {items.length === 0 ? (
          <p className="text-foreground/60 text-center">
            最新のお知らせはまだありません。
          </p>
        ) : (
          <ul className="divide-y divide-white/10">
            {items.map((item) => (
              <NewsRow key={item.id} item={item} />
            ))}
          </ul>
        )}

        {/* MORE リンク (指定時のみ右下に表示) */}
        {moreLinkHref && items.length > 0 && (
          <div className="mt-6 flex justify-end">
            <Link
              href={moreLinkHref}
              className={cn(
                "inline-flex items-center gap-1 text-foreground/80 hover:text-accent-red",
                "text-base md:text-lg font-medium tracking-widest",
                "transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black rounded",
              )}
            >
              MORE
              <span aria-hidden="true">≫</span>
            </Link>
          </div>
        )}
      </div>
    </ContentSection>
  );
}
