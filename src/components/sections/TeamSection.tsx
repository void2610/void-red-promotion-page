"use client";

import { ContentSection } from "@/components/layout/SectionLayout";
import MemberCard from "@/components/ui/MemberCard";
import { teamMembers } from "@/data/team-members";

interface TeamSectionProps {
  className?: string;
}

// チームセクションコンポーネント
export default function TeamSection({ className }: TeamSectionProps) {
  return (
    <ContentSection id="team" title="制作メンバー" className={className}>
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        {teamMembers.map((member, index) => (
          <MemberCard key={index} member={member} variant="simple" />
        ))}
      </div>
    </ContentSection>
  );
}
