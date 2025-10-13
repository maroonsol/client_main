'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, Shield, ChevronRight } from 'lucide-react';

interface DocsLayoutProps {
  children: React.ReactNode;
}

const docsPages = [
  {
    title: 'Terms and Conditions',
    href: '/docs/termsandcondition',
    icon: FileText,
  },
  {
    title: 'Privacy Policy',
    href: '/docs/privacy',
    icon: Shield,
  },
  {
    title: 'Refund Policy',
    href: '/docs/refund',
    icon: Shield,
  },
];

export default function DocsLayout({ children }: DocsLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-6 text-foreground">Documentation</h2>
                <nav className="space-y-2">
                  {docsPages.map((page) => {
                    const Icon = page.icon;
                    const isActive = pathname === page.href;
                    return (
                      <Link
                        key={page.href}
                        href={page.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors group ${
                          isActive 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-accent hover:text-accent-foreground'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="flex-1">{page.title}</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-card border border-border rounded-lg shadow-sm">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
