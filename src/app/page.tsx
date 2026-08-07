import { getAgents } from "@/lib/agents";
import HomePageClient from "./HomePageClient";

export default function Home() {
  const agents = getAgents();
  return <HomePageClient agents={agents} />;
}
