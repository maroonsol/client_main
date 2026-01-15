import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { serviceCategories } from "@/lib/data";
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
  Headphones,
  Cpu,
  Layout,
  Sparkles,
  Monitor,
  LayoutGrid,
  PenTool,
  Layers,
  Briefcase,
  Building2,
  Receipt,
  BadgeCheck,
  FileText,
  ShieldCheck,
  LineChart
} from "lucide-react";
import Link from "next/link";

const iconMap = {
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
  Headphones,
  Cpu,
  Layout,
  Sparkles,
  Monitor,
  LayoutGrid,
  PenTool,
  Layers,
  Briefcase,
  Building2,
  Receipt,
  BadgeCheck,
  FileText,
  ShieldCheck,
  LineChart
};

const getIcon = (iconName: string) => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  return IconComponent || Globe;
};

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
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our three core categories: Tech, Design, and Business. Everything you need to build, grow, and scale.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {serviceCategories.map((category) => {
                const IconComponent = getIcon(category.icon);
                return (
                  <span key={category.id} className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60">
                    <IconComponent className="h-4 w-4 text-primary" />
                    {category.title}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose a category to explore tailored offerings with clear deliverables.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((category) => {
              const IconComponent = getIcon(category.icon);
              return (
                <Card key={category.id} className="group relative overflow-hidden border-border bg-gradient-to-br from-background to-muted/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/40">
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-muted rounded-full group-hover:bg-primary transition-colors duration-300">
                          <IconComponent className="w-8 h-8 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-semibold text-foreground">
                            {category.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground text-base">
                            {category.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.services.length} services
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {category.services.slice(0, 4).map((service) => (
                          <Badge key={service.id} variant="outline" className="text-xs">
                            {service.title}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link href={`#${category.id}`} className="flex items-center justify-center">
                          Explore {category.title}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Details */}
      {serviceCategories.map((category, index) => {
        const IconComponent = getIcon(category.icon);
        const sectionBackground = index % 2 === 0 ? "bg-muted/10" : "bg-background";
        return (
          <section key={category.id} id={category.id} className={`py-20 ${sectionBackground}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                <div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground shadow-sm">
                    <IconComponent className="h-4 w-4 text-primary" />
                    {category.title}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-3">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    {category.description}
                  </p>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact" className="flex items-center">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {category.services.map((service) => {
                  const ServiceIcon = getIcon(service.icon);
                  return (
                    <Card key={service.id} className="group border-border bg-background/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/40">
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="p-2 bg-muted rounded-lg group-hover:bg-primary transition-colors duration-300">
                            <ServiceIcon className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
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
                            <h4 className="font-medium text-foreground mb-2 text-sm">Key Features:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {service.features.slice(0, 6).map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                          {(service.duration || service.price) && (
                            <div className="space-y-2 pt-2 border-t border-border text-sm">
                              {service.duration && (
                                <div className="flex items-center justify-between">
                                  <span className="text-muted-foreground flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    Duration
                                  </span>
                                  <span className="font-medium">{service.duration}</span>
                                </div>
                              )}
                              {service.price && (
                                <div className="flex items-center justify-between">
                                  <span className="text-muted-foreground">Price</span>
                                  <span className="font-medium text-green-600">{service.price}</span>
                                </div>
                              )}
                            </div>
                          )}
                          <Button asChild variant="outline" className="w-full border-border hover:bg-primary hover:text-primary-foreground">
                            <Link href="/contact" className="flex items-center justify-center">
                              Request Quote
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

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
