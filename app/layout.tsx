import type { Metadata } from "next";
import "./globals.css";

const siteDescription =
  "AgentForge by Reachmark maps fragmented Web3 operations into controlled AI workflows with human approval, scoped permissions, guardrails and traceable runs.";

export const metadata: Metadata = {
  title: {
    default: "AgentForge by Reachmark — AI Operations for Web3",
    template: "%s | AgentForge by Reachmark",
  },
  description: siteDescription,
  applicationName: "AgentForge",
  keywords: [
    "AgentForge",
    "Reachmark",
    "AI agents",
    "Web3 operations",
    "AI automation",
    "agent orchestration",
    "workflow automation",
  ],
  authors: [{ name: "Reachmark" }],
  creator: "Reachmark",
  publisher: "Reachmark",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "AgentForge by Reachmark — AI Operations for Web3",
    description: siteDescription,
    siteName: "Reachmark",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AgentForge by Reachmark",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
