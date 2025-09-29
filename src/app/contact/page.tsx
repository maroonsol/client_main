"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { companyInfo } from "@/lib/data";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  MessageSquare,
  Calendar,
  Headphones
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      description: "Call us for immediate assistance",
      value: companyInfo.contact.phone,
      action: `tel:${companyInfo.contact.phone}`,
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us an email anytime",
      value: companyInfo.contact.email,
      action: `mailto:${companyInfo.contact.email}`,
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Address",
      description: "Visit our office",
      value: companyInfo.contact.address,
      action: `https://maps.google.com/?q=${encodeURIComponent(companyInfo.contact.address)}`,
      color: "text-red-600"
    }
  ];

  const services = [
    "Website Development",
    "Custom Software",
    "Online Software",
    "Prebuilt Software",
    "Mobile App Development",
    "UI/UX Design",
    "SEO & Digital Marketing",
    "System Integration",
    "Other"
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? We&apos;d love to hear from you. 
              Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-muted rounded-full group-hover:bg-primary transition-colors duration-300">
                      <IconComponent className={`w-8 h-8 ${method.color} group-hover:text-primary-foreground transition-colors duration-300`} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {method.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={method.action}
                      className="text-foreground hover:text-primary-foreground transition-colors duration-200 font-medium"
                    >
                      {method.value}
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                    <MessageSquare className="w-6 h-6 mr-2" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">Thank you for contacting us. We&apos;ll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1 border-border focus:border-primary focus:ring-primary"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 border-border focus:border-primary focus:ring-primary"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1 border-border focus:border-primary focus:ring-primary"
                            placeholder="+91 12345 67890"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company" className="text-foreground">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="mt-1 border-border focus:border-primary focus:ring-primary"
                            placeholder="Your company name"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="service" className="text-foreground">Service Interested In</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="mt-1 w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-foreground">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="mt-1 border-border focus:border-primary focus:ring-primary"
                          placeholder="Tell us about your project requirements..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Working Hours */}
            <div className="space-y-8">
              {/* Working Hours */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Working Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                        <span className="text-foreground font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center">
                    <Headphones className="w-5 h-5 mr-2" />
                    Need Immediate Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For urgent inquiries or immediate assistance, please call us directly.
                  </p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href={`tel:${companyInfo.contact.phone}`} className="flex items-center justify-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now: {companyInfo.contact.phone}
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Schedule Meeting */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule a Meeting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Prefer to schedule a meeting? We&apos;re available for video calls and in-person meetings.
                  </p>
                  <Button asChild variant="outline" className="w-full border-border text-foreground hover:bg-primary hover:text-primary-foreground">
                    <a href={`mailto:${companyInfo.contact.email}?subject=Meeting Request`} className="flex items-center justify-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Request a Meeting
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit our office for in-person consultations and meetings.
            </p>
          </div>
          
          <Card className="border-border">
            <CardContent className="p-0">
              <div className="bg-muted h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground mb-4">{companyInfo.contact.address}</p>
                  <Button asChild variant="outline" className="border-border text-foreground hover:bg-primary hover:text-primary-foreground">
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.contact.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">
                  How long does a typical project take?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Project timelines vary based on complexity. Simple websites take 2-4 weeks, 
                  while complex applications can take 3-6 months. We provide detailed timelines 
                  during the consultation phase.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">
                  Do you provide ongoing support?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer comprehensive maintenance and support packages. This includes 
                  regular updates, security patches, performance monitoring, and technical support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">
                  What technologies do you use?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use modern technologies including React, Next.js, Node.js, Python, and various 
                  cloud platforms. We choose the best technology stack based on your specific requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">
                  Can you work with our existing systems?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely! We specialize in system integration and can work with your existing 
                  infrastructure, databases, and third-party services to create seamless solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
