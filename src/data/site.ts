import { profile } from "./profile";

export type SiteData = {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  website: string;
  availability: string;
  cv: string;
};

export const siteData: SiteData = {
  name: profile.name,
  role: "MERN Stack Developer",
  email: "abdulrafay0608@gmail.com",
  phone: "03160025477",
  location: "Karachi, Pakistan",
  github: "https://github.com/abdulrafay0608",
  linkedin: "https://linkedin.com/in/abdulrafay0608",
  website: "https://abdulrafay-developer.vercel.app",
  availability: "Available for opportunities",
  cv: "/cv-abdulrafay.pdf",
};
