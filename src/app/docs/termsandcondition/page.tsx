import React from 'react';
import ContactInfo from '@/components/contact-info';

export default function TermsAndConditionsPage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms and Conditions</h1>
          <div className="text-sm text-muted-foreground space-y-1">
            <p><strong>Effective Date:</strong> [Insert Date]</p>
            <p><strong>Last Updated:</strong> [Insert Date]</p>
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-lg mb-6">
            Welcome to Maroonsol Private Limited (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;).
            These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of our website located at 
            <a href="https://www.maroonsol.com" className="text-primary hover:underline"> www.maroonsol.com</a> 
            (&ldquo;Website&rdquo;) and any related services provided by us, including but not limited to software development, 
            GST registration and filing, business registration, document drafting (BR drafts), and other professional 
            and technical services (collectively referred to as &ldquo;Services&rdquo;).
          </p>

          <p className="mb-6">
            By accessing or using our Website or Services, you (&ldquo;User&rdquo;, &ldquo;you&rdquo;, &ldquo;your&rdquo;) agree to comply with and be 
            bound by these Terms. If you do not agree, you must not access or use our Website or Services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing, browsing, or using the Website, you confirm that:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You have read, understood, and agreed to these Terms and our Privacy Policy.</li>
              <li>You are at least 18 years of age and legally capable of entering into a binding agreement.</li>
              <li>You will comply with all applicable laws, rules, and regulations in India.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Modifications to Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We reserve the right to update or modify these Terms at any time without prior notice.</li>
              <li>Any changes will be posted on this page with a revised &ldquo;Effective Date.&rdquo;</li>
              <li>Your continued use of the Website after such modifications constitutes acceptance of the revised Terms.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Services Provided</h2>
            <p className="mb-4">Maroonsol Private Limited provides professional and digital services including, but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Software design, development, and deployment</li>
              <li>GST registration and filing assistance</li>
              <li>Business and company registration</li>
              <li>Business registration (&ldquo;BR&rdquo;) drafts and documentation services</li>
              <li>Digital consultation and compliance services</li>
            </ul>
            <p>All Services are provided subject to availability, applicable fees, and separate agreements where necessary.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. User Accounts</h2>
            <p className="mb-4">When creating an account on our Website:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You must provide accurate, complete, and current information.</li>
              <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
              <li>You agree not to share your password with any third party.</li>
              <li>You are fully responsible for all activities that occur under your account.</li>
            </ul>
            <p>We reserve the right to suspend or terminate your account if we believe you have violated these Terms or provided false information.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Intellectual Property Rights</h2>
            <p className="mb-4">All content, logos, graphics, text, designs, source code, software, and materials available on the Website are the exclusive property of Maroonsol Private Limited or its licensors.</p>
            <p className="mb-4">You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Copy, reproduce, modify, distribute, or publicly display any Website content without prior written consent.</li>
              <li>Use our trademarks or branding in any manner that may cause confusion or misrepresentation.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Cookies and Tracking</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Our Website uses cookies and similar tracking technologies to enhance user experience, analyze website traffic, and provide personalized content.</li>
              <li>By using our Website, you consent to our use of cookies as described in our Cookie Policy and Privacy Policy.</li>
              <li>You can manage cookie preferences through your browser settings, but some parts of the Website may not function properly if cookies are disabled.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Third-Party Links and Services</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Our Website may contain links to third-party websites, tools, or services that are not owned or controlled by us.</li>
              <li>We do not endorse, guarantee, or assume responsibility for the content, accuracy, or policies of any third-party website.</li>
              <li>Your interactions with third-party services are governed solely by their terms and policies.</li>
              <li>We are not liable for third-party content or actions.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Payment and Billing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All fees for our Services are displayed in Indian Rupees (INR) unless stated otherwise.</li>
              <li>Payments must be made through approved payment gateways or as per invoice instructions.</li>
              <li>You agree to provide accurate billing information and authorize us to charge applicable fees.</li>
              <li>All payments are non-refundable unless explicitly stated in a separate agreement.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. User Obligations</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Use the Website for any unlawful, fraudulent, or harmful purpose.</li>
              <li>Interfere with the security or integrity of our systems.</li>
              <li>Upload or transmit any malicious code, viruses, or harmful data.</li>
              <li>Engage in unauthorized data collection, scraping, or reverse engineering.</li>
            </ul>
            <p>Violation of these obligations may result in immediate suspension or termination of your access.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Disclaimer of Warranties</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>The Website and all Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without any warranties of any kind, either express or implied.</li>
              <li>We make no guarantees regarding the availability, accuracy, or reliability of the Website.</li>
              <li>We make no guarantees regarding the suitability or results of any Service for your specific purpose.</li>
            </ul>
            <p>You acknowledge that any use of our Website or Services is at your own risk.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Limitation of Liability</h2>
            <p className="mb-4">To the fullest extent permitted by law:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maroonsol Private Limited and its directors, employees, agents, or affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use or inability to use our Website or Services.</li>
              <li>Our total liability for any claim shall not exceed the total fees paid by you to us in the preceding 3 months.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Indemnification</h2>
            <p className="mb-4">You agree to indemnify, defend, and hold harmless Maroonsol Private Limited, its directors, employees, and affiliates from any claims, losses, damages, liabilities, and expenses arising from:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use of our Website or Services.</li>
              <li>Your breach of these Terms.</li>
              <li>Your violation of any applicable laws or third-party rights.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">13. Termination</h2>
            <p className="mb-4">We may suspend or terminate your account and restrict access to the Website at our discretion if:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You violate these Terms;</li>
              <li>Your actions harm our reputation, operations, or users;</li>
              <li>Required by law or regulatory authorities.</li>
            </ul>
            <p>Upon termination, all provisions which by their nature should survive termination (e.g., intellectual property, indemnification, limitation of liability) shall continue in effect.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">14. Governing Law and Jurisdiction</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.</li>
              <li>Any disputes shall be subject to the exclusive jurisdiction of the courts located in Patna, Bihar, India.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">15. Dispute Resolution</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>In the event of a dispute, both parties agree to first attempt an amicable resolution through written communication.</li>
              <li>If not resolved, the dispute shall be referred to binding arbitration under the Arbitration and Conciliation Act, 1996, conducted in English at Patna, Bihar, India.</li>
              <li>The arbitrator&apos;s decision shall be final and binding.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">16. Severability</h2>
            <p>If any provision of these Terms is found invalid or unenforceable, the remaining provisions will remain in full force and effect.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">17. Contact Information</h2>
            <p className="mb-4">For any questions or concerns regarding these Terms, please contact us at:</p>
            <ContactInfo />
          </section>
        </div>
      </div>
    </div>
  );
}
