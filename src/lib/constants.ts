// ============================================================
// SITE CONSTANTS — Update these for your project
// ============================================================

// WhatsApp CTA — replace with your real number
export const WHATSAPP_NUMBER = "60XXXXXXXXXX";
export const WHATSAPP_MESSAGE = "Hi! I'd like to learn more about your services.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// ============================================================
// HERO SECTION
// ============================================================

export const ROTATING_USPS = [
  {
    text: "Save Time",
    color: "#10B981",
    iconPath: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  },
  {
    text: "Grow Revenue",
    color: "#F59E0B",
    iconPath: "M13 2L3 14h9l-1 10 10-12h-9l1-10z",
  },
  {
    text: "Stay Ahead",
    color: "#06B6D4",
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
];

// ============================================================
// TESTIMONIALS
// ============================================================

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah Chen", role: "CEO", company: "TechVenture Co", quote: "This product completely transformed our workflow. We saved over 20 hours per week and the ROI was visible within the first month.", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
  { name: "Ahmad Razif", role: "Finance Director", company: "Meridian Corp", quote: "The accuracy and speed improvements were immediate. Our team can now focus on strategic work instead of manual tasks.", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
  { name: "Jessica Tan", role: "Operations Manager", company: "FastTrack Logistics", quote: "Implementation was seamless. The team guided us every step of the way and we were up and running within days.", avatar: "https://randomuser.me/api/portraits/women/3.jpg" },
  { name: "David Lim", role: "Managing Director", company: "Apex Solutions", quote: "We evaluated several options and this was the clear winner. The results speak for themselves — 3x improvement in efficiency.", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
  { name: "Nurul Aina", role: "Business Owner", company: "Bloom & Co", quote: "As a small business owner, I was skeptical about the investment. But it paid for itself in the first two weeks.", avatar: "https://randomuser.me/api/portraits/women/5.jpg" },
  { name: "Marcus Wong", role: "CTO", company: "DataStream Asia", quote: "The technical implementation was solid and the support team is incredibly responsive. Highly recommended.", avatar: "https://randomuser.me/api/portraits/men/6.jpg" },
  { name: "Farah Ibrahim", role: "HR Manager", company: "BuildRight Group", quote: "Our processes went from taking days to taking minutes. The team was patient and thorough during onboarding.", avatar: "https://randomuser.me/api/portraits/women/7.jpg" },
  { name: "Kelvin Yap", role: "CFO", company: "Pinnacle Holdings", quote: "The reporting and analytics alone justified the cost. We now have visibility into metrics we never tracked before.", avatar: "https://randomuser.me/api/portraits/men/8.jpg" },
  { name: "Priya Shankar", role: "COO", company: "Lotus Healthcare", quote: "They understood our industry-specific requirements perfectly. The solution feels custom-built for our needs.", avatar: "https://randomuser.me/api/portraits/women/9.jpg" },
  { name: "Jason Lee", role: "Founder", company: "CloudBridge Tech", quote: "Finally, a solution that actually delivers on its promises. Our team productivity increased by 40% in the first quarter.", avatar: "https://randomuser.me/api/portraits/men/10.jpg" },
  { name: "Aminah Rashid", role: "Director", company: "Cahaya Education", quote: "The onboarding was smooth and the learning curve was minimal. Even our less tech-savvy staff picked it up quickly.", avatar: "https://randomuser.me/api/portraits/women/11.jpg" },
  { name: "Tommy Lim", role: "Sales Director", company: "GreenField Properties", quote: "Our conversion rates improved significantly after implementation. The data-driven insights are invaluable.", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
  { name: "Christine Lee", role: "Partner", company: "Lee & Associates", quote: "Professional service, reliable product, and measurable results. Everything a business owner looks for.", avatar: "https://randomuser.me/api/portraits/women/13.jpg" },
  { name: "Rizal Karim", role: "General Manager", company: "Heritage Hotels", quote: "Customer satisfaction scores went up dramatically. The automation handles routine tasks flawlessly.", avatar: "https://randomuser.me/api/portraits/men/14.jpg" },
  { name: "Mei Ling Tan", role: "Marketing Head", company: "FreshMart", quote: "Content creation that used to take our team a full day now happens in minutes. And the quality is consistently high.", avatar: "https://randomuser.me/api/portraits/women/15.jpg" },
  { name: "Hafiz Abdullah", role: "IT Manager", company: "Sigma Manufacturing", quote: "Deployment across our three locations was handled in under a month. The implementation team truly knows what they're doing.", avatar: "https://randomuser.me/api/portraits/men/16.jpg" },
  { name: "Zainab Omar", role: "Accounts Manager", company: "Al-Hijrah Trading", quote: "What used to take our team a full week is now done before lunch on Monday. The time savings are extraordinary.", avatar: "https://randomuser.me/api/portraits/women/17.jpg" },
  { name: "Raj Kumar", role: "Entrepreneur", company: "Mutiara Ventures", quote: "ROI was visible in the first week. Not the first month — the first week. That's how quickly things improved.", avatar: "https://randomuser.me/api/portraits/men/18.jpg" },
  { name: "Siti Nurhaliza", role: "Admin Head", company: "Prima Group", quote: "We reduced our operational costs by 30% in two months. The efficiency gains compound over time.", avatar: "https://randomuser.me/api/portraits/women/19.jpg" },
  { name: "Azman Ismail", role: "CEO", company: "YapTech Solutions", quote: "What impressed me most is the hands-on approach. They didn't just sell us software — they implemented everything.", avatar: "https://randomuser.me/api/portraits/men/20.jpg" },
];

// ============================================================
// FAQ
// ============================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How quickly can I get started?",
    answer: "Most clients are up and running within 7 days. We handle the entire setup and onboarding process so you can focus on your business while we get everything configured.",
  },
  {
    question: "Do I need any technical skills?",
    answer: "Not at all. We handle the entire implementation for you. Our solutions are designed for business owners and teams, not developers. If you can use a smartphone, you can use our product.",
  },
  {
    question: "What kind of results can I expect?",
    answer: "Most clients see measurable improvements within the first 2 weeks. On average, our customers report 30-50% time savings on routine tasks and significant cost reductions within the first quarter.",
  },
  {
    question: "Is there a free trial or money-back guarantee?",
    answer: "Yes! We offer a free tier so you can try before you commit. For paid plans, we offer a 30-day money-back guarantee — if you don't see measurable results, you get a full refund.",
  },
  {
    question: "Is my data safe and secure?",
    answer: "Absolutely. We follow industry-standard security practices and are fully compliant with local data protection regulations. Your data is encrypted in transit and at rest.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, there are no long-term contracts or lock-in periods. You can cancel your subscription at any time with no penalties. We believe our product should earn your business every month.",
  },
];

// ============================================================
// NAVIGATION
// ============================================================

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// ============================================================
// FOOTER
// ============================================================

export const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
