import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data";
import { 
  Globe, 
  Code, 
  Cloud, 
  Package, 
  ArrowRight, 
  CheckCircle, 
  Clock,
  Users,
  Shield,
  Zap,
  Smartphone,
  Database,
  Palette,
  Search,
  BarChart3,
  Settings,
  Headphones
} from "lucide-react";
import Link from "next/link";

const iconMap = {
  Globe,
  Code,
  Cloud,
  Package,
};

const additionalServices = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization", "Push Notifications", "Offline Support"],
    duration: "8-16 weeks",
    price: "Starting from ₹2,50,000"
  },
  {
    icon: Database,
    title: "Database Design & Management",
    description: "Robust database solutions for optimal performance and scalability",
    features: ["Database Architecture", "Performance Optimization", "Data Migration", "Backup & Recovery", "Security", "Monitoring"],
    duration: "2-6 weeks",
    price: "Starting from ₹75,000"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that enhance user experience",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing", "Design Systems"],
    duration: "3-8 weeks",
    price: "Starting from ₹1,00,000"
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description: "Comprehensive digital marketing strategies to boost your online presence",
    features: ["SEO Optimization", "Content Marketing", "Social Media", "PPC Campaigns", "Analytics", "Conversion Optimization"],
    duration: "Ongoing",
    price: "Starting from ₹25,000/month"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Data-driven insights and comprehensive reporting solutions",
    features: ["Google Analytics", "Custom Dashboards", "KPI Tracking", "Data Visualization", "Automated Reports", "Business Intelligence"],
    duration: "2-4 weeks",
    price: "Starting from ₹50,000"
  },
  {
    icon: Settings,
    title: "System Integration",
    description: "Seamless integration of various systems and third-party services",
    features: ["API Development", "Third-party Integrations", "Legacy System Migration", "Data Synchronization", "Workflow Automation", "System Monitoring"],
    duration: "4-12 weeks",
    price: "Starting from ₹1,50,000"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, requirements, and target audience to create a comprehensive project plan.",
    icon: Users
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Our design team creates wireframes, mockups, and interactive prototypes to visualize your solution.",
    icon: Palette
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Our developers build your solution using best practices, with continuous testing and quality assurance.",
    icon: Code
  },
  {
    step: "04",
    title: "Deployment & Launch",
    description: "We handle the deployment process and ensure a smooth launch with proper monitoring and support.",
    icon: Zap
  },
  {
    step: "05",
    title: "Maintenance & Support",
    description: "Ongoing support, updates, and maintenance to keep your solution running smoothly and securely.",
    icon: Headphones
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital technology solutions designed to transform your business and drive growth in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our primary service offerings that form the foundation of our digital solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <Card key={service.id} id={service.id} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-gray-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gray-100 rounded-full group-hover:bg-primary transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-gray-700 group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-semibold text-foreground">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground text-base">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            4-12 weeks
                          </div>
                        </div>
                        <Button asChild className="bg-primary hover:bg-gray-800 text-primary-foreground">
                          <Link href="/contact" className="flex items-center">
                            Get Quote
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized services to complement your digital transformation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-gray-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-primary transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-gray-700 group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2 text-sm">Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <Badge key={featureIndex} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2 pt-2 border-t border-border">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">{service.duration}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Price:</span>
                          <span className="font-medium text-green-600">{service.price}</span>
                        </div>
                      </div>
                      <Button asChild variant="outline" className="w-full border-black text-black hover:bg-primary hover:text-primary-foreground">
                        <Link href="/contact">Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>
          
          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-gray-300">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-primary transition-colors duration-300">
                            <IconComponent className="w-5 h-5 text-gray-700 group-hover:text-primary-foreground transition-colors duration-300" />
                          </div>
                          <CardTitle className="text-xl font-semibold text-foreground">
                            {step.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground text-base">
                          {step.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose MaroonSol?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The advantages that set us apart in the digital technology landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                <Shield className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Security First</h3>
              <p className="text-muted-foreground text-sm">We prioritize security in all our solutions with industry best practices and regular security audits.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                <Zap className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground text-sm">Agile development methodology ensures faster time-to-market without compromising quality.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                <Users className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Expert Team</h3>
              <p className="text-muted-foreground text-sm">Experienced developers and designers with expertise in cutting-edge technologies.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                <Headphones className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Support</h3>
              <p className="text-muted-foreground text-sm">Round-the-clock support and maintenance to keep your solutions running smoothly.</p>
            </div>
          </div>
        </div>
      </section>

     {/* CTA Section */}
     <section className="py-20 text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help bring your digital vision to life with our expertise and passion for innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground hover:bg-primary-foreground text-primary">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
