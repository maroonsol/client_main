import React from 'react';

interface ContactInfoProps {
  className?: string;
}

export default function ContactInfo({ className = "" }: ContactInfoProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <h3 className="font-semibold text-lg">Contact Information</h3>
      <div className="space-y-1 text-sm">
        <p><strong>Maroonsol Private Limited</strong></p>
        <p>Email: <a href="mailto:info@maroonsol.com" className="text-primary hover:underline">info@maroonsol.com</a></p>
        <p>Address: Khairatali, Mittan Chak, Patna, Patna Sadar, Bihar, India, 804453</p>
      </div>
    </div>
  );
}
