"use client";

import Link from "next/link";
import { Linkedin, Github, Twitter, Youtube, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/saadrehman", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/saadrehman", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/saadrehman", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/@saadrehman", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-display font-bold text-sm">
                SR
              </div>
              <span className="font-display font-semibold text-lg text-foreground">
                Saad Rehman
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI & ML Engineer · Full Stack Developer · Automation Specialist.
              Building intelligent systems that create real business impact.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-blue-500/40 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-foreground text-sm mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display font-semibold text-foreground text-sm mb-4">
              Ready to Build?
            </h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Have a project in mind? Let&apos;s connect and turn your idea into a
              working system.
            </p>
            <a
              href="https://calendly.com/saadrehman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              Book a Free Call
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © 2025 Saad Rehman. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with{" "}
            <span className="text-foreground/70">Next.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
