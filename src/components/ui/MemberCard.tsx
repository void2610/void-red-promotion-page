"use client";

import { ExternalLink } from "lucide-react";
import { cn } from "@/utils/cn";
import type { TeamMember } from "@/data/team-members";

interface MemberCardProps {
  member: TeamMember;
  className?: string;
  variant?: "simple" | "card" | "badge";
}

// シンプルなメンバー表示
function SimpleMember({ member }: { member: TeamMember }) {
  const content = (
    <p className="text-lg text-foreground">
      <strong className="text-foreground">{member.name}</strong>
      {" - "}
      <span className="text-foreground-muted">{member.role}</span>
    </p>
  );

  if (member.link) {
    return (
      <a
        href={member.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group hover:text-accent-red transition-colors inline-flex items-center gap-2"
      >
        {content}
        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    );
  }

  return content;
}

// カード形式のメンバー表示
function CardMember({
  member,
  className,
}: {
  member: TeamMember;
  className?: string;
}) {
  const CardContent = () => (
    <div className={cn("card-base p-6 text-center", className)}>
      <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
      <p className="text-foreground-muted">{member.role}</p>
    </div>
  );

  if (member.link) {
    return (
      <a
        href={member.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block card-hover group"
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
}

// バッジ形式のメンバー表示
function BadgeMember({
  member,
  className,
}: {
  member: TeamMember;
  className?: string;
}) {
  const BadgeContent = () => (
    <div
      className={cn(
        "inline-flex items-center gap-3 px-4 py-2 rounded-full",
        "bg-card border border-custom",
        "hover:bg-background-alt transition-colors",
        className,
      )}
    >
      <span className="font-medium text-foreground">{member.name}</span>
      <span className="text-sm text-foreground-muted">{member.role}</span>
      {member.link && <ExternalLink className="w-4 h-4 text-accent-red" />}
    </div>
  );

  if (member.link) {
    return (
      <a
        href={member.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <BadgeContent />
      </a>
    );
  }

  return <BadgeContent />;
}

// メインMemberCardコンポーネント
export default function MemberCard({
  member,
  className,
  variant = "simple",
}: MemberCardProps) {
  switch (variant) {
    case "card":
      return <CardMember member={member} className={className} />;
    case "badge":
      return <BadgeMember member={member} className={className} />;
    case "simple":
    default:
      return <SimpleMember member={member} />;
  }
}
