import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saadrehman.dev"),
  title: {
    default: "Saad Rehman — AI & ML Engineer, Full Stack Developer",
    template: "%s | Saad Rehman",
  },
  description:
    "AI & ML Engineer and Full Stack Developer helping businesses scale with intelligent automation, AI-powered systems, and full-stack digital products. 150k+ community, 50+ projects delivered.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "Full Stack Developer",
    "Automation",
    "LangChain",
    "OpenAI",
    "n8n",
    "Next.js",
    "Python",
    "SaaS",
    "AI Agents",
  ],
  authors: [{ name: "Saad Rehman", url: "https://saadrehman.dev" }],
  creator: "Saad Rehman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saadrehman.dev",
    siteName: "Saad Rehman",
    title: "Saad Rehman — AI & ML Engineer, Full Stack Developer",
    description:
      "Helping businesses scale with intelligent automation, AI-powered systems, and full-stack digital products.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saad Rehman Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Rehman — AI & ML Engineer",
    description:
      "Helping businesses scale with intelligent automation & AI-powered systems.",
    creator: "@saadrehman",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data for Person schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Saad Rehman",
  url: "https://saadrehman.dev",
  jobTitle: "AI & ML Engineer, Full Stack Developer",
  description:
    "AI & ML Engineer and Full Stack Developer helping businesses scale with intelligent automation and AI-powered systems.",
  sameAs: [
    "https://linkedin.com/in/saadrehman",
    "https://github.com/saadrehman",
    "https://twitter.com/saadrehman",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Full Stack Development",
    "Workflow Automation",
    "LangChain",
    "Next.js",
    "Python",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} font-sans antialiased min-h-screen bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
