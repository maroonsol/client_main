import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { companyInfo } from "@/lib/data";
import { 
  Target, 
  Users, 
  Lightbulb, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Code,
  Globe,
  Smartphone,
  Database,
  Shield,
  Zap
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Target,
    title: "Client-Focused",
    description: "We prioritize our clients' needs and work closely with them to deliver solutions that exceed expectations."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay at the forefront of technology trends and continuously innovate to provide cutting-edge solutions."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and work collaboratively with our clients throughout the development process."
  },
  {
    icon: Award,
    title: "Quality",
    description: "We maintain the highest standards of quality in all our deliverables, ensuring robust and reliable solutions."
  }
];

const technologies = [
  { name: "Frontend Development", icon: Globe, items: ["React", "Next.js", "Vue.js", "Angular", "TypeScript"] },
  { name: "Backend Development", icon: Code, items: ["Node.js", "Python", "Java", "PHP", "C#"] },
  { name: "Mobile Development", icon: Smartphone, items: ["React Native", "Flutter", "iOS", "Android"] },
  { name: "Database", icon: Database, items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"] },
  { name: "Cloud & DevOps", icon: Shield, items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"] },
  { name: "Performance", icon: Zap, items: ["Optimization", "Scalability", "Security", "Monitoring", "Analytics"] }
];

const milestones = [
  {
    year: "2019",
    title: "Freelancer Journey Begins",
    description: "Started working as freelancers under the MaroonSol name, delivering innovative digital solutions to clients."
  },
  {
    year: "2020",
    title: "First Major Project",
    description: "Successfully delivered our first large-scale e-commerce platform for AOAC."
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew our team and expanded our service offerings to include mobile development."
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description: "Received recognition for excellence in digital transformation solutions."
  },
  {
    year: "2023",
    title: "Global Reach",
    description: "Expanded our client base internationally and launched advanced AI-powered solutions."
  },
  {
    year: "2025",
    title: "Company Registration",
    description: "Officially registered as MaroonSol Private Limited Company, marking a new chapter in our growth."
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About {companyInfo.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We are passionate about creating digital solutions that transform businesses and drive growth in the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {companyInfo.description}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our journey began in 2019 when we started working as freelancers under the MaroonSol name, 
                driven by a vision to bridge the gap between technology and business needs. What started 
                as a small freelance operation has grown into a trusted partner for companies across 
                various industries. Our journey has been marked by continuous learning, innovation, 
                and an unwavering commitment to delivering exceptional results.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                In 2025, we took a significant step forward by officially registering as MaroonSol 
                Private Limited Company, marking a new chapter in our growth and commitment to 
                excellence. Today, we stand as a leading digital technology company, helping 
                businesses navigate the complexities of the digital landscape with confidence 
                and clarity. Our team of expert developers, designers, and strategists work 
                together to create solutions that not only meet current needs but also prepare 
                businesses for future challenges.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact" className="flex items-center">
                  Work With Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground mb-2">50+</div>
                  <div className="text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground mb-2">25+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground mb-2">6+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground mb-2">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our approach to client partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-muted rounded-full group-hover:bg-primary transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We work with cutting-edge technologies to deliver modern, scalable, and efficient solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-muted rounded-lg group-hover:bg-primary transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {tech.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item, itemIndex) => (
                        <span key={itemIndex} className="px-3 py-1 bg-muted text-sm text-muted-foreground rounded-full group-hover:bg-muted/80 transition-colors">
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped our growth and success over the years.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary rounded-full">
                            <CheckCircle className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-semibold text-foreground">
                              {milestone.year}
                            </CardTitle>
                            <CardDescription className="font-medium text-muted-foreground">
                              {milestone.title}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
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
