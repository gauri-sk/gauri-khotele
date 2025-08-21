import { motion } from "framer-motion";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <Mail />,
      label: "Email",
      value: "gauri.khotele.iitkgp@gmail.com",
      href: "mailto:gauri.khotele.iitkgp@gmail.com",
      testId: "link-email"
    },
    {
      icon: <Phone />,
      label: "Phone", 
      value: "+91-8600549099",
      href: "tel:+918600549099",
      testId: "link-phone"
    },
    {
      icon: <Linkedin />,
      label: "LinkedIn",
      value: "gauri_khotele",
      href: "https://linkedin.com/in/gauri_khotele",
      testId: "link-linkedin"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient" data-testid="text-contact-title">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-gray max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Ready to collaborate on your next product challenge? Let's discuss how we can drive growth together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <div className="glass-morphism rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-accent-cyan" data-testid="text-get-in-touch">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-cyan/20 rounded-xl flex items-center justify-center">
                      <div className="text-accent-cyan">
                        {contact.icon}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-gray">{contact.label}</p>
                      <a 
                        href={contact.href} 
                        className="text-off-white hover:text-accent-cyan transition-colors"
                        target={contact.label === "LinkedIn" ? "_blank" : undefined}
                        rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                        data-testid={contact.testId}
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-morphism rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-accent-cyan" data-testid="text-collaborate">
                Let's Collaborate
              </h3>
              <p className="text-muted-gray leading-relaxed" data-testid="text-collaborate-description">
                I'm always open to discussing product opportunities, consulting projects, or just having a chat about the latest in product management and technology. Feel free to reach out!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-morphism rounded-2xl p-8"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-muted-gray">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          className="w-full bg-dark-gray/50 border border-medium-gray/30 rounded-xl px-4 py-3 text-off-white placeholder-muted-gray focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors"
                          data-testid="input-name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-muted-gray">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="w-full bg-dark-gray/50 border border-medium-gray/30 rounded-xl px-4 py-3 text-off-white placeholder-muted-gray focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors"
                          data-testid="input-email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-muted-gray">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What would you like to discuss?"
                          className="w-full bg-dark-gray/50 border border-medium-gray/30 rounded-xl px-4 py-3 text-off-white placeholder-muted-gray focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors"
                          data-testid="input-subject"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-muted-gray">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Tell me about your project or what you'd like to collaborate on..."
                          className="w-full bg-dark-gray/50 border border-medium-gray/30 rounded-xl px-4 py-3 text-off-white placeholder-muted-gray focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors resize-none"
                          data-testid="input-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-accent-cyan hover:bg-accent-cyan/80 text-deep-black font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-cyan/25"
                  data-testid="button-submit"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}