import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoPartner from "@/components/LogoPartner";
import DiscoverSection from "@/components/DiscoverSection";
import CourseSection from "@/components/CourseSection";
import LearningPathsSection from "@/components/LearningPathsSection";

const partnerLogos = [
  {
    src: "/assets/logos/logoipsum-1.svg",
    alt: "Logoipsum",
  },
  {
    src: "/assets/logos/logoipsum-2.svg",
    alt: "Logoipsum",
  },
  {
    src: "/assets/logos/logoipsum-3.svg",
    alt: "Logoipsum",
  },
  {
    src: "/assets/logos/logoipsum-4.svg",
    alt: "Logoipsum",
  },
  {
    src: "/assets/logos/logoipsum-5.svg",
    alt: "Logoipsum",
  },
];

const categories = [
  {
    label: "Featured",
    active: true,
  },
  {
    label: "Music",
  },
  {
    label: "Drawing & Painting",
  },
  {
    label: "Marketing",
  },
  {
    label: "Animation",
  },
  {
    label: "Social Media",
  },
  {
    label: "UI/UX Design",
  },
  {
    label: "Creative Marketing",
  },
  {
    label: "Digital Illustration",
  },
  {
    label: "Film & Video",
  },
  {
    label: "Crafts",
  },
  {
    label: "Freelance & Entrepreneurship",
  },
  {
    label: "Graphic Design",
  },
  {
    label: "Photography",
  },
  {
    label: "Productivity",
  },
  {
    label: "Web Development",
  },
  {
    label: "Data Science",
  },
  {
    label: "Cooking",
  },
  {
    label: "+ More",
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      <LogoPartner logos={partnerLogos} />

      <DiscoverSection categories={categories} />

      <CourseSection />

      <LearningPathsSection />
    </main>
  );
}