import React from 'react';
import ContactInfo from '@/components/contact-info';

export default function PrivacyPolicyPage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <div className="text-sm text-muted-foreground space-y-1">
            <p><strong>Effective Date:</strong> [Insert Date]</p>
            <p><strong>Last Updated:</strong> [Insert Date]</p>
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-lg mb-6">
            At Maroonsol Private Limited (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;), we are committed to protecting your privacy 
            and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, 
            disclose, and safeguard your information when you visit our website 
            <a href="https://www.maroonsol.com" className="text-primary hover:underline"> www.maroonsol.com</a> 
            or use our services.
          </p>

          <p className="mb-6">
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
            please do not access the site or use our services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">1.1 Personal Information</h3>
            <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Register for an account on our website</li>
              <li>Request our services (software development, GST registration, business registration, etc.)</li>
              <li>Contact us through our website or email</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Participate in surveys or feedback forms</li>
            </ul>
            <p className="mb-4">This information may include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Business information (company name, business type, registration details)</li>
              <li>Payment information (billing address, payment method details)</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-foreground">1.2 Automatically Collected Information</h3>
            <p className="mb-4">When you visit our website, we may automatically collect certain information, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website information</li>
              <li>Device information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing and maintaining our services</li>
              <li>Processing transactions and managing your account</li>
              <li>Communicating with you about our services, updates, and promotions</li>
              <li>Improving our website and services</li>
              <li>Analyzing website usage and trends</li>
              <li>Complying with legal obligations</li>
              <li>Protecting against fraud and unauthorized access</li>
              <li>Responding to your inquiries and support requests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Information Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">3.1 Service Providers</h3>
            <p className="mb-4">We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our users. These parties are bound by confidentiality agreements and are prohibited from using your information for any other purpose.</p>

            <h3 className="text-xl font-medium mb-3 text-foreground">3.2 Legal Requirements</h3>
            <p className="mb-4">We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</p>

            <h3 className="text-xl font-medium mb-3 text-foreground">3.3 Business Transfers</h3>
            <p className="mb-4">In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</p>

            <h3 className="text-xl font-medium mb-3 text-foreground">3.4 Consent</h3>
            <p>We may share your information with your explicit consent for specific purposes.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Cookies and Tracking Technologies</h2>
            <p className="mb-4">Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files that are stored on your device when you visit our website.</p>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">4.1 Types of Cookies We Use</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-foreground">4.2 Managing Cookies</h3>
            <p>You can control and manage cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Data Security</h2>
            <p className="mb-4">We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of sensitive data</li>
              <li>Secure data transmission protocols</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication procedures</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="mt-4">However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Data Retention</h2>
            <p className="mb-4">We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Your Rights and Choices</h2>
            <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Objection:</strong> Object to the processing of your personal information</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing where applicable</li>
            </ul>
            <p className="mt-4">To exercise these rights, please contact us using the information provided in the Contact Information section.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Children&apos;s Privacy</h2>
            <p>Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. International Data Transfers</h2>
            <p>Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Changes to This Privacy Policy</h2>
            <p className="mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Posting the updated Privacy Policy on our website</li>
              <li>Sending you an email notification (if you have provided your email address)</li>
              <li>Displaying a prominent notice on our website</li>
            </ul>
            <p className="mt-4">Your continued use of our website and services after any changes to this Privacy Policy constitutes acceptance of the updated policy.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Governing Law</h2>
            <p>This Privacy Policy is governed by the laws of India. Any disputes arising from this Privacy Policy will be subject to the exclusive jurisdiction of the courts in Patna, Bihar, India.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">13. Contact Information</h2>
            <p className="mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
            <ContactInfo />
          </section>
        </div>
      </div>
    </div>
  );
}
