"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Sparkles, User, Briefcase, Code, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSizeMediumTitles"
      background="aurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Portfolio"
          navItems={[
            { name: "About", id: "about" },
            { name: "Projects", id: "projects" },
            { name: "Videos", id: "videos" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "View My Projects",            href: "projects"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Creative Designer & Developer"
          description="Crafting beautiful, functional digital experiences. Specializing in modern web design, interactive projects, and innovative digital solutions."
          tag="Welcome"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "View My Work", href: "projects" },
            { text: "Get In Touch", href: "contact" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg"
          imageAlt="Professional profile picture"
          mediaAnimation="blur-reveal"
          imagePosition="right"
          background={{ variant: "glowing-orb" }}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="About Me"
          tagIcon={User}
          tagAnimation="slide-up"
          title="Passionate about creating meaningful digital experiences through design and technology. With expertise in web development, UI/UX design, and digital strategy."
          useInvertedBackground={true}
          buttons={[
            { text: "Download Resume", href: "#" },
            { text: "View Skills", href: "#" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="projects" data-section="projects">
        <FeatureCardSix
          title="Featured Projects"
          description="A collection of my recent work showcasing design, development, and creative problem-solving."
          tag="Portfolio"
          tagIcon={Briefcase}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              title: "E-Commerce Platform",              description: "Modern online shopping experience with responsive design, product filtering, and seamless checkout process. Built with React and Next.js for optimal performance.",              imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-man-working-computer_53876-31625.jpg",              imageAlt: "E-commerce platform showcase",              buttons: [
                { text: "View Project", href: "#" },
                { text: "GitHub", href: "https://github.com" }
              ]
            },
            {
              id: 2,
              title: "AI-Powered Dashboard",              description: "Real-time analytics dashboard with interactive data visualizations. Features machine learning integrations for predictive insights and automated reporting.",              imageSrc: "http://img.b2bpic.net/free-photo/african-american-skilled-analyst-reviewing-monthly-revenue-balance_482257-122687.jpg",              imageAlt: "Analytics dashboard interface",              buttons: [
                { text: "Live Demo", href: "#" },
                { text: "Case Study", href: "#" }
              ]
            },
            {
              id: 3,
              title: "Design System Library",              description: "Comprehensive component library with 50+ customizable UI components. Built with Tailwind CSS and Storybook for documentation and testing.",              imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-colleagues-standing-table-looking-design-projects_1098-20475.jpg",              imageAlt: "Design system components",              buttons: [
                { text: "Explore", href: "#" },
                { text: "Documentation", href: "#" }
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Skills & Expertise"
          description="Technical proficiencies and areas of specialization"
          tag="Capabilities"
          tagIcon={Code}
          tagAnimation="slide-up"
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          metrics={[
            { id: "1", value: "7+", description: "Years of Experience" },
            { id: "2", value: "50+", description: "Projects Completed" },
            { id: "3", value: "30+", description: "Happy Clients" },
            { id: "4", value: "15+", description: "Technologies Mastered" }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          tagIcon={Mail}
          tagAnimation="slide-up"
          title="Let's create something amazing together"
          description="Whether you have a project in mind or just want to chat about design and development, I'd love to hear from you. Reach out and let's start a conversation."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/business-executives-discussing-digital-tablet_107420-65750.jpg"
          imageAlt="Contact section illustration"
          mediaAnimation="blur-reveal"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="I'll get back to you as soon as possible. Your privacy is important to me."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Navigation",              items: [
                { label: "Home", href: "/" },
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Social",              items: [
                { label: "GitHub", href: "https://github.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "Instagram", href: "https://instagram.com" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Email", href: "mailto:hello@example.com" },
                { label: "WhatsApp", href: "https://wa.me/1234567890" },
                { label: "Calendly", href: "https://calendly.com" },
                { label: "Resume", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Your Name. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
