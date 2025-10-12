"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Truck, 
  Server, 
  Globe, 
  Check, 
  Zap, 
  Shield, 
  Clock,
  DollarSign,
  Code,
  Database,
  Smartphone
} from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              API Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pay only for what you use with our flexible API pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Email API */}
            <Card className="border-2 border-primary hover:shadow-2xl transition-all duration-300 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-card-foreground">Email API</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Reliable email delivery service
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-card-foreground">₹0.15</span>
                  <span className="text-muted-foreground ml-2">per request</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-card-foreground">High deliverability rate</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-card-foreground">Real-time analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-card-foreground">Template management</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-card-foreground">24/7 support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Delivery API */}
            <Card className="border-2 border-primary hover:shadow-2xl transition-all duration-300 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-card-foreground">Delivery API</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Track and manage deliveries
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-card-foreground">₹0.20</span>
                  <span className="text-muted-foreground ml-2">per request</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-card-foreground">Real-time tracking</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-card-foreground">Multi-carrier support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-card-foreground">Delivery notifications</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-card-foreground">Route optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Self-Hosted Applications */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Self-Hosted Applications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete software solutions for your business operations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary hover:shadow-2xl transition-all duration-300 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Server className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-3xl font-bold text-card-foreground">Business Applications</CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                  Complete software suite for business management
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-8">
                  <span className="text-5xl font-bold text-card-foreground">₹150</span>
                  <span className="text-muted-foreground ml-2 text-xl">per month</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-card-foreground text-lg mb-4">Included Applications:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <DollarSign className="w-5 h-5 text-primary mr-3" />
                        <span className="text-card-foreground">Billing Application</span>
                      </div>
                      <div className="flex items-center">
                        <Database className="w-5 h-5 text-primary mr-3" />
                        <span className="text-card-foreground">Account Keeping Software</span>
                      </div>
                      <div className="flex items-center">
                        <Code className="w-5 h-5 text-primary mr-3" />
                        <span className="text-card-foreground">Inventory Management</span>
                      </div>
                      <div className="flex items-center">
                        <Smartphone className="w-5 h-5 text-primary mr-3" />
                        <span className="text-card-foreground">Customer Management</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-card-foreground text-lg mb-4">Features:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-card-foreground">Full source code access</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-card-foreground">Custom modifications</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-card-foreground">Data ownership</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-card-foreground">24/7 technical support</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg mb-8">
                  <h4 className="font-semibold text-card-foreground mb-3">What&apos;s Included:</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 text-primary mr-2" />
                      <span className="text-card-foreground">Unlimited Users</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-primary mr-2" />
                      <span className="text-card-foreground">Data Security</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-primary mr-2" />
                      <span className="text-card-foreground">Regular Updates</span>
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Website Development */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Website Development
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Custom websites tailored to your specific requirements
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary hover:shadow-2xl transition-all duration-300 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-3xl font-bold text-card-foreground">Custom Website Development</CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                  Pricing based on your specific requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-8">
                  <span className="text-4xl font-bold text-card-foreground">Custom Pricing</span>
                  <p className="text-muted-foreground mt-2">Contact us for a personalized quote</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-card-foreground text-lg mb-4">What We Build:</h4>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-card-foreground">Responsive Web Design</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-card-foreground">E-commerce Platforms</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-card-foreground">Content Management Systems</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-card-foreground">Custom Web Applications</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-card-foreground text-lg mb-4">Our Process:</h4>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-card-foreground">Requirement Analysis</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-card-foreground">Design & Prototyping</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-card-foreground">Development & Testing</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-card-foreground">Deployment & Support</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg mb-8">
                  <h4 className="font-semibold text-card-foreground mb-3">Factors That Affect Pricing:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="text-card-foreground">• Number of pages</div>
                    <div className="text-card-foreground">• Custom functionality</div>
                    <div className="text-card-foreground">• Design complexity</div>
                    <div className="text-card-foreground">• Integration requirements</div>
                    <div className="text-card-foreground">• Timeline</div>
                    <div className="text-card-foreground">• Maintenance needs</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today to discuss your requirements and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 py-3 px-8">
              <a href="/contact">Contact Us</a>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary py-3 px-8">
              <a href="tel:+919305166411">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
