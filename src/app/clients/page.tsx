"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { clients, categories } from "@/lib/data";
import { 
  Globe, 
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
  Share,
  ArrowRight,
  Star,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const iconMap = {
  Globe,
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

export default function Clients() {
  const getClientsByCategory = (category: string) => {
    if (category === "All") return clients;
    return clients.filter(client => client.category === category);
  };

  const getProjectIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent || Globe;
  };

  const getCategoryStats = () => {
    const stats = categories.map(category => {
      const categoryClients = getClientsByCategory(category);
      return {
        category,
        count: categoryClients.length,
        projects: categoryClients.reduce((total, client) => total + client.projects.length, 0)
      };
    });
    return stats;
  };

  const categoryStats = getCategoryStats();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Clients
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We&apos;ve had the privilege of working with amazing companies across various industries, 
              helping them transform their digital presence and achieve their business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">{clients.length}</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">
                {clients.reduce((total, client) => total + client.projects.length, 0)}
              </div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">{categories.length - 1}</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Stats */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our expertise spans across multiple industries, delivering tailored solutions for each sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryStats.filter(stat => stat.category !== "All").map((stat) => (
              <Card key={stat.category} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-gray-300 text-center">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {stat.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-foreground">{stat.count}</div>
                    <div className="text-sm text-muted-foreground">Clients</div>
                    <div className="text-2xl font-bold text-foreground">{stat.projects}</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients by Category */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Client Showcase
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our client portfolio organized by industry categories.
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getClientsByCategory(category).map((client) => (
                    <Dialog key={client.id}>
                      <DialogTrigger asChild>
                        <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-border hover:border-gray-300">
                          <CardHeader>
                            <div className="flex items-center space-x-4 mb-4">
                              <Image
                                src={client.logo}
                                alt={`${client.name} logo`}
                                width={80}
                                height={60}
                                className="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                              />
                              <div className="flex-1">
                                <CardTitle className="text-lg font-semibold text-foreground mb-1">
                                  {client.name}
                                </CardTitle>
                                <Badge variant="secondary" className="text-xs">
                                  {client.category}
                                </Badge>
                              </div>
                            </div>
                            <CardDescription className="text-muted-foreground text-sm">
                              {client.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Projects:</span>
                                <span className="font-medium">{client.projects.length}</span>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Website:</span>
                                <a 
                                  href={client.website} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-primary hover:text-primary-foreground flex items-center"
                                >
                                  Visit
                                  <ExternalLink className="w-3 h-3 ml-1" />
                                </a>
                              </div>
                              <div className="flex items-center justify-center text-xs text-muted-foreground group-hover:text-foreground transition-colors pt-2 border-t border-border">
                                View Project Details
                                <ArrowRight className="w-3 h-3 ml-1" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <div className="flex items-center space-x-4 mb-4">
                            <Image
                              src={client.logo}
                              alt={`${client.name} logo`}
                              width={80}
                              height={60}
                              className="h-12 w-auto object-contain"
                            />
                            <div>
                              <DialogTitle className="text-2xl font-bold text-foreground">
                                {client.name}
                              </DialogTitle>
                              <div className="flex items-center space-x-2 mt-1">
                                <Badge variant="secondary">{client.category}</Badge>
                                <a 
                                  href={client.website} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-primary hover:text-primary-foreground flex items-center text-sm"
                                >
                                  Visit Website
                                  <ExternalLink className="w-3 h-3 ml-1" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="bg-muted/20 p-4 rounded-lg">
                            <p className="text-foreground">{client.description}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                              <Award className="w-5 h-5 mr-2" />
                              Projects We&apos;ve Built
                            </h4>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                              {client.projects.map((project) => {
                                const ProjectIcon = getProjectIcon(project.icon);
                                return (
                                  <Card key={project.id} className="border-border">
                                    <CardHeader>
                                      <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-muted rounded-lg">
                                          <ProjectIcon className="w-6 h-6 text-foreground" />
                                        </div>  
                                        <div>
                                          <CardTitle className="text-lg">{project.title}</CardTitle>
                                          <CardDescription>{project.description}</CardDescription>
                                        </div>
                                      </div>
                                    </CardHeader>
                                    <CardContent>
                                      <div className="space-y-4">
                                        <div>
                                          <h5 className="font-medium text-foreground mb-2">Key Features:</h5>
                                          <ul className="space-y-1">
                                            {project.features.map((feature, index) => (
                                              <li key={index} className="flex items-center text-sm text-muted-foreground">
                                                <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                                                {feature}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        <div>
                                          <h5 className="font-medium text-foreground mb-2">Technologies Used:</h5>
                                          <div className="flex flex-wrap gap-1">
                                            {project.technologies.map((tech, index) => (
                                              <Badge key={index} variant="outline" className="text-xs">
                                                {tech}
                                              </Badge>
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

                          <div className="bg-primary/10 p-4 rounded-lg">
                            <div className="flex items-center space-x-2 mb-2">
                              <Star className="w-5 h-5 text-primary" />
                              <h5 className="font-semibold text-primary">Project Success</h5>
                            </div>
                            <p className="text-primary text-sm">
                              All projects were delivered on time and within budget, resulting in improved business operations 
                              and increased client satisfaction. The solutions continue to support the client&apos;s growth and success.
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-lg">Exceptional Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                &ldquo;MaroonSol delivered an outstanding e-commerce platform that exceeded our expectations. 
                  Their attention to detail and commitment to quality is unmatched.&rdquo;
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/client/logo/aoac.png"
                    alt="AOAC Logo"
                    width={40}
                    height={30}
                    className="h-8 w-auto object-contain"
                  />
                  <div>
                    <div className="font-medium text-foreground">AOAC Team</div>
                    <div className="text-sm text-muted-foreground">Agriculture</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-lg">Professional & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  &ldquo;The team at MaroonSol is professional, reliable, and truly understands our business needs. 
                  They delivered a solution that transformed our operations.&rdquo;
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/client/logo/rewalk.png"
                    alt="Rewalk Clinic Logo"
                    width={40}
                    height={30}
                    className="h-8 w-auto object-contain"
                  />
                  <div>
                    <div className="font-medium text-foreground">Rewalk Clinic</div>
                    <div className="text-sm text-muted-foreground">Healthcare</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-lg">Innovative Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  &ldquo;MaroonSol&apos;s innovative approach and cutting-edge technology helped us achieve our digital 
                  transformation goals. Highly recommended for any digital project.&rdquo;
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/client/logo/tarummitra.png"
                    alt="Tarumitra Logo"
                    width={40}
                    height={30}
                    className="h-8 w-auto object-contain"
                  />
                  <div>
                    <div className="font-medium text-foreground">Tarumitra</div>
                    <div className="text-sm text-muted-foreground">Environment</div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
