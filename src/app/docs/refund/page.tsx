import React from 'react';
import ContactInfo from '@/components/contact-info';

export default function RefundPolicyPage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Refund & Cancellation Policy</h1>
          <div className="text-sm text-muted-foreground space-y-1">
            <p><strong>Last Updated:</strong> January 15, 2025</p>
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-lg mb-6">
            At Maroonsol Private Limited, we value the satisfaction of our clients and aim to maintain transparency in all financial transactions. This Refund & Cancellation Policy outlines the conditions under which refunds and cancellations may be considered for payments made towards our services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. General Policy</h2>
            <p className="mb-4">
              All payments made to Maroonsol Private Limited for any of our services — including but not limited to software development, GST registration and filing, company registration, business registration (BR) drafts, and other professional or technical services — are considered final once the payment is successfully processed.
            </p>
            <p>
              However, we understand that exceptional circumstances may arise, and therefore, refund requests will be reviewed solely at the discretion of Maroonsol Private Limited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Eligibility for Refund</h2>
            <p className="mb-4">Refunds may be considered under the following general conditions:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>If a payment was made in error or duplicate.</li>
              <li>If services were not initiated within a reasonable time due to factors under our control.</li>
              <li>If a written refund request is submitted by the customer within 7 (seven) days from the date of payment.</li>
            </ul>
            <p>Beyond this period, no refund request shall be entertained.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Approval and Discretion</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All refund decisions are made solely by Maroonsol Private Limited after a careful internal review of the case.</li>
              <li>Approval of a refund request is not automatic and depends on the facts and circumstances of each individual transaction.</li>
              <li>We reserve the right to approve or reject any refund request without the obligation to provide specific reasons.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Refund Process</h2>
            <p className="mb-4">If a refund is approved:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>It will be processed within 7 (seven) business days from the date of approval.</li>
              <li>The amount refunded may be partial or full, depending on the service stage, effort expended, and administrative costs incurred.</li>
              <li>Refunds will be issued using the original method of payment unless otherwise agreed in writing.</li>
              <li>You will receive an email confirmation once your refund has been processed.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Non-Refundable Services</h2>
            <p className="mb-4">Refunds are not applicable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Services already initiated or completed, even partially.</li>
              <li>Any government fees, statutory payments, or third-party costs paid on your behalf.</li>
              <li>Consultancy or advisory sessions once delivered.</li>
              <li>Delays or interruptions caused by client-side issues such as missing documentation, incorrect information, or non-cooperation.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Service orders once confirmed cannot be cancelled unless a written cancellation request is submitted before the commencement of work.</li>
              <li>If cancellation is approved, deductions may apply for administrative or resource allocation costs.</li>
              <li>Cancellation requests must be emailed to our support team with full payment and service details.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Force Majeure</h2>
            <p>
              Maroonsol Private Limited shall not be held responsible for any delay, interruption, or cancellation of services caused by circumstances beyond our reasonable control, including but not limited to natural disasters, governmental actions, network failures, or system outages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Contact Information</h2>
            <p className="mb-4">If you have any questions, concerns, or requests regarding this Refund & Cancellation Policy, please contact us:</p>
            <ContactInfo />
          </section>
        </div>
      </div>
    </div>
  );
}
