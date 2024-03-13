"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface HoverDropdownProps {
  children?: React.ReactNode;
  trigger: React.ReactNode;
}

export function HoverDropdown({ children, trigger }: HoverDropdownProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
      <HoverCardContent className="w-80">{children}</HoverCardContent>
    </HoverCard>
  );
}
