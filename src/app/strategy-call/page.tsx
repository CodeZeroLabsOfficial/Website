import type { Metadata } from "next";
import { StrategyCallWizard } from "@/components/strategy/StrategyCallWizard";
import { strategyCallMeta } from "@/content/strategyCall";

export const metadata: Metadata = {
  title: strategyCallMeta.title,
  description: strategyCallMeta.description,
};

export default function StrategyCallPage() {
  return <StrategyCallWizard />;
}
