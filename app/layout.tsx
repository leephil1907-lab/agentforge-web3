import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"AgentForge — Controlled AI agents for Web3 operations",description:"Map fragmented Web3 operations into controlled AI workflows with human approval, guardrails and audit trails.",openGraph:{title:"AgentForge — Controlled AI agents for Web3 operations",description:"Signal → Reason → Act → Report.",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}