"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { companyInfo, services, clients, categories } from "@/lib/data";
import { 
  Globe, 
  Code, 
  Cloud, 
  Package, 
  ArrowRight, 
  CheckCircle, 
  ExternalLink,
  ShoppingCart,
  Settings,
  Calculator,
  Shield,
  Users,
  Calendar,
  Clipboard,
  DollarSign,
  Activity,
  Camera,
  User,
  Share
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const iconMap = {
  Globe,
  Code,
  Cloud,
  Package,
  ShoppingCart,
  Settings,
  Calculator,
  Shield,
  Users,
  Calendar,
  Clipboard,
  DollarSign,
  Activity,
  Camera,
  User,
  Share,
};

export default function Home() {
  const getClientsByCategory = (category: string) => {
    if (category === "All") return clients;
    return clients.filter(client => client.category === category);
  };

  const getProjectIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent || Globe;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {companyInfo.tagline}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We are a leading digital technology company specializing in custom software development, 
              web applications, and comprehensive digital solutions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive digital technology solutions to help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-muted rounded-full group-hover:bg-primary transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="ghost" className="w-full mt-4 group-hover:bg-muted">
                      <Link href="/services" className="flex items-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About MaroonSol
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {companyInfo.description}
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our team of expert developers and designers work tirelessly to deliver innovative, 
                scalable, and user-friendly solutions that drive business growth and success. 
                We believe in building long-term partnerships with our clients.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/about" className="flex items-center">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">25+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
                  <div className="text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Clients
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We&apos;ve had the privilege of working with amazing companies across various industries.
            </p>
          </div>

          <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-sm">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {getClientsByCategory(category).slice(0, 4).map((client) => (
                    <Dialog key={client.id}>
                      <DialogTrigger asChild>
                        <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50">
                          <CardContent className="p-6 text-center">
                            <div className="mb-4">
                              <Image
                                src={client.logo}
                                alt={`${client.name} logo`}
                                width={120}
                                height={80}
                                className="mx-auto h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                              />
                            </div>
                            <h3 className="font-semibold text-foreground mb-2 text-sm">
                              {client.name}
                            </h3>
                            <p className="text-xs text-muted-foreground mb-3">
                              {client.category}
                            </p>
                            <div className="flex items-center justify-center text-xs text-muted-foreground group-hover:text-primary transition-colors">
                              View Details
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <div className="flex items-center space-x-4 mb-4">
                            <Image
                              src={client.logo}
                              alt={`${client.name} logo`}
                              width={60}
                              height={40}
                              className="h-10 w-auto object-contain"
                            />
                            <div>
                              <DialogTitle className="text-xl font-bold text-foreground">
                                {client.name}
                              </DialogTitle>
                              <p className="text-sm text-muted-foreground">{client.category}</p>
                            </div>
                          </div>
                        </DialogHeader>
                        <div className="space-y-6">
                          <p className="text-muted-foreground">{client.description}</p>
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-4">Projects We&apos;ve Built</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {client.projects.map((project) => {
                                const ProjectIcon = getProjectIcon(project.icon);
                                return (
                                  <Card key={project.id} className="border-border">
                                    <CardHeader>
                                      <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-muted rounded-lg">
                                          <ProjectIcon className="w-5 h-5 text-muted-foreground" />
                                        </div>
                                        <CardTitle className="text-lg">{project.title}</CardTitle>
                                      </div>
                                      <CardDescription>{project.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                      <div className="space-y-3">
                                        <div>
                                          <h5 className="font-medium text-foreground mb-2">Key Features:</h5>
                                          <ul className="space-y-1">
                                            {project.features.slice(0, 3).map((feature, index) => (
                                              <li key={index} className="flex items-center text-sm text-muted-foreground">
                                                <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                                                {feature}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        <div>
                                          <h5 className="font-medium text-foreground mb-2">Technologies:</h5>
                                          <div className="flex flex-wrap gap-1">
                                            {project.technologies.map((tech, index) => (
                                              <span key={index} className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded">
                                                {tech}
                                              </span>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                );
                              })}
                            </div>
                          </div>
                          <div className="pt-4 border-t border-border">
                            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                              <a href={client.website} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                Visit Website
                                <ExternalLink className="w-4 h-4 ml-2" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
                {getClientsByCategory(category).length > 4 && (
                  <div className="text-center mt-8">
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link href="/clients">View All {category} Clients</Link>
                    </Button>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
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
