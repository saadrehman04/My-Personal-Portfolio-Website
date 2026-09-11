export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Saad built us an AI lead qualification system that completely changed how our sales team operates. Within 30 days, our response times dropped from 2 days to under 2 hours. The ROI was immediate and measurable.",
    name: "Marcus Chen",
    role: "Head of Sales",
    company: "Growthline SaaS",
    rating: 5,
    avatar: "MC",
  },
  {
    id: "2",
    quote:
      "Working with Saad felt like having a senior tech co-founder in my corner. He didn't just build what I asked for — he challenged my assumptions and delivered something far better. Our automation suite runs flawlessly.",
    name: "Priya Anand",
    role: "Founder & CEO",
    company: "NestCommerce",
    rating: 5,
    avatar: "PA",
  },
  {
    id: "3",
    quote:
      "The custom GPT support bot Saad built deflected over 80% of our support tickets in the first month. Our team finally has breathing room, and customers are getting answers in seconds instead of days.",
    name: "James Whitfield",
    role: "VP of Customer Success",
    company: "Orbital Tools",
    rating: 5,
    avatar: "JW",
  },
  {
    id: "4",
    quote:
      "I've hired a lot of developers, but Saad stands out for his ability to understand the business problem first. The analytics dashboard he built became a core feature our enterprise clients love.",
    name: "Sana Malik",
    role: "Product Manager",
    company: "Dataflow Analytics",
    rating: 5,
    avatar: "SM",
  },
  {
    id: "5",
    quote:
      "Saad's automation consulting saved us from making a $40k mistake. He mapped out exactly what we needed, recommended the right tools, and had everything running in 3 weeks instead of the 3 months we expected.",
    name: "Tom Eriksson",
    role: "Operations Director",
    company: "Nordic Brands",
    rating: 5,
    avatar: "TE",
  },
];
