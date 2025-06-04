"use client";

import Link from "next/link";
import { Bitcoin, Brain, Blocks, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Mission", href: "/mission" },
        { name: "Team", href: "/team" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "AI Services", href: "/ai-services" },
        { name: "Blockchain R&D", href: "/blockchain" },
        { name: "Investment", href: "/investment" },
        { name: "Consulting", href: "/consulting" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "BTC Strategy", href: "/btc-strategy" },
        { name: "Research", href: "/research" },
        { name: "Blog", href: "/blog" },
        { name: "Documentation", href: "/docs" },
      ],
    },
  ];

  return (
    <footer className="bg-abundra-dark text-white">
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl font-bold text-abundra-blue">
                Abundra
              </div>
              <div className="text-sm text-gray-400">Capital Inc.</div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Building a technology platform that integrates AI, blockchain, and
              digital capital for a more abundant, intelligent, and peaceful
              future.
            </p>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-abundra-blue" />
                <span className="text-sm">AI</span>
              </div>
              <div className="flex items-center gap-2">
                <Blocks className="w-5 h-5 text-purple-400" />
                <span className="text-sm">Blockchain</span>
              </div>
              <div className="flex items-center gap-2">
                <Bitcoin className="w-5 h-5 text-orange-400" />
                <span className="text-sm">Digital Capital</span>
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Canada 🇨🇦</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@abundra.capital</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Abundra Capital Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <div className="italic">
              "Wealth is not just about capital, but calmness, clarity, and
              code."
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
