import { Mail, Phone, MapPin, Github, Linkedin, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "singhalokkumar459@gmail.com",
    href: "mailto:singhalokkumar459@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6299162927",
    href: "tel:+916299162927"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ahmedabad, Gujarat, India",
    href: null
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/alokkumar9019",
    color: "hover:text-white"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/singhalokkumar459",
    color: "hover:text-[#0077B5]"
  },
  {
    icon: Code2,
    label: "LeetCode",
    href: "https://leetcode.com/u/alokkumar9019/",
    color: "hover:text-[#FFA116]"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 card-hover">
            <CardContent className="p-8 md:p-12">
              <p className="text-center text-lg text-muted-foreground mb-8">
                I'm currently looking for new opportunities and my inbox is always open. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              {/* Contact Info */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-3">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-medium">{item.value}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    size="lg"
                    variant="outline"
                    className={`border-primary/30 hover:border-primary hover:bg-primary/10 ${social.color} transition-all duration-300`}
                    asChild
                  >
                    <a 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <social.icon className="w-5 h-5" />
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-[0_0_30px_hsla(189,94%,55%,0.4)] hover:shadow-[0_0_40px_hsla(189,94%,55%,0.6)]"
                  asChild
                >
                  <a href="mailto:singhalokkumar459@gmail.com">
                    <Mail className="mr-2 w-5 h-5" />
                    Say Hello
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
