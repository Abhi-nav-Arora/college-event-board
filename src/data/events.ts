export interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  description: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Annual Tech Symposium",
    date: "2026-03-15T09:00:00Z",
    venue: "Main Auditorium, Block A",
    description: "A day-long event featuring keynote speakers, workshops, and exhibitions showcasing the latest in technology and innovation.",
  },
  {
    id: 2,
    title: "Cultural Fest: Spring Beats",
    date: "2026-03-22T17:00:00Z",
    venue: "Open Air Theatre",
    description: "Celebrate diversity with music, dance, and art performances from students representing cultures around the world.",
  },
  {
    id: 3,
    title: "Career Fair 2026",
    date: "2026-04-05T10:00:00Z",
    venue: "Convention Center, Hall 1",
    description: "Connect with top employers, explore internship opportunities, and get your resume reviewed by industry professionals.",
  },
  {
    id: 4,
    title: "Hackathon: Code for Change",
    date: "2026-04-12T08:00:00Z",
    venue: "Computer Science Building, Lab 101",
    description: "A 24-hour coding marathon where teams compete to build innovative solutions for social impact challenges.",
  },
  {
    id: 5,
    title: "Research Poster Exhibition",
    date: "2026-04-20T11:00:00Z",
    venue: "Library Atrium",
    description: "Undergraduate and graduate students present their research findings across all academic disciplines.",
  },
  {
    id: 6,
    title: "Alumni Networking Night",
    date: "2026-05-02T18:30:00Z",
    venue: "Student Union Ballroom",
    description: "An evening of networking with successful alumni, featuring panel discussions and mentorship opportunities.",
  },
  {
    id: 7,
    title: "Sports Day Championship",
    date: "2026-05-10T07:00:00Z",
    venue: "University Stadium",
    description: "Inter-departmental athletic competitions featuring track and field, basketball, soccer, and more.",
  },
  {
    id: 8,
    title: "Entrepreneurship Summit",
    date: "2026-05-18T09:30:00Z",
    venue: "Business School Auditorium",
    description: "Learn from startup founders, pitch your ideas to investors, and discover resources for student entrepreneurs.",
  },
];
