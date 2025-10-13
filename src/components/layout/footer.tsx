import Link from "next/link";
import Image from "next/image";
import { companyInfo, quickLinks, socialLinks } from "@/lib/data";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const iconMap = {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
};

export default function Footer() {
  return (
    <footer className="text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/logo.png"
                alt="MaroonSol Logo"
                width={180}
                height={60}
                className="h-8 w-auto filter brightness-0 invert"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {companyInfo.sdescription}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-white transition-colors duration-200"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg text-secondary-foreground font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h3 className="text-lg text-secondary-foreground font-semibold">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs/termsandcondition"
                  className="text-muted-foreground hover:text-white transition-colors duration-200 text-sm"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/privacy"
                  className="text-muted-foreground hover:text-white transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/refund"
                  className="text-muted-foreground hover:text-white transition-colors duration-200 text-sm"
                >
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg text-secondary-foreground font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${companyInfo.contact.phone}`}
                  className="text-muted-foreground hover:text-white transition-colors duration-200 text-sm"
                >
                  {companyInfo.contact.phone}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="text-muted-foreground hover:text-white transition-colors duration-200 text-sm"
                >
                  {companyInfo.contact.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  {companyInfo.contact.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/docs/privacy"
                className="text-muted-foreground hover:text-white transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/docs/termsandcondition"
                className="text-muted-foreground hover:text-white transition-colors duration-200 text-sm"
              >
                Terms and Conditions
              </Link>
              <Link
                href="/docs/refund"
                className="text-muted-foreground hover:text-white transition-colors duration-200 text-sm"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
