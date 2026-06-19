import {
  Layers,
  Sparkles,
  Baby,
  Activity,
  Smile,
  Wrench,
  Scissors,
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  Award,
  Clock3,
  Users,
  Star,
  Lightbulb,
  CalendarCheck2,
  ClipboardList,
  Microscope,
} from "lucide-react";

import implants from "@/assets/treatment-implants.jpg";
import cosmetic from "@/assets/treatment-cosmetic.jpg";
import pediatric from "@/assets/treatment-pediatric.jpg";
import rootcanal from "@/assets/treatment-rootcanal.jpg";
import ortho from "@/assets/treatment-ortho.jpg";
import fullmouth from "@/assets/treatment-fullmouth.jpg";
import surgery from "@/assets/treatment-surgery.jpg";

import galleryRoom from "@/assets/gallery-room.jpg";
import galleryReception from "@/assets/gallery-reception.jpg";
import galleryEquipment from "@/assets/gallery-equipment.jpg";
import galleryPatient from "@/assets/gallery-patient.jpg";
import gallerySmile from "@/assets/gallery-smile.jpg";
import galleryTools from "@/assets/gallery-tools.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";

export const treatments = [
  {
    slug: "dental-implants",
    icon: Layers,
    title: "Dental Implants",
    short:
      "Permanent, natural-looking tooth replacement using advanced titanium implants for a confident, complete smile.",
    image: implants,
    benefits: [
      "Looks and feels like a natural tooth",
      "Preserves jawbone and facial structure",
      "Long-lasting — built to endure for decades",
      "Restores full chewing comfort",
    ],
    process: [
      "Comprehensive consultation and 3D imaging",
      "Precise implant placement under local anaesthesia",
      "Healing & osseointegration period",
      "Custom crown fitted for a seamless finish",
    ],
    faqs: [
      {
        q: "Is implant surgery painful?",
        a: "The procedure is done under local anaesthesia and most patients describe it as far more comfortable than they expected. Post-op discomfort is mild and short-lived.",
      },
      {
        q: "How long do implants last?",
        a: "With good oral hygiene and routine check-ups, dental implants can last 20+ years and often a lifetime.",
      },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    short:
      "Smile makeovers, veneers, whitening and aesthetic restorations crafted to enhance your natural beauty.",
    image: cosmetic,
    benefits: [
      "Brighter, whiter, perfectly aligned smile",
      "Personalised aesthetic treatment plan",
      "Minimally invasive techniques",
      "Boosts confidence in daily life",
    ],
    process: [
      "Smile design consultation",
      "Digital smile preview & shade selection",
      "Treatment in 1–3 visits",
      "Final reveal & care guidance",
    ],
    faqs: [
      {
        q: "Will my new smile look natural?",
        a: "Absolutely — we design every treatment to match your face, lips and personality so the result enhances you, not overpowers you.",
      },
      {
        q: "How long does whitening last?",
        a: "Professional whitening results typically last 1–2 years with regular care and avoiding stain-heavy habits.",
      },
    ],
  },
  {
    slug: "pediatric-dentistry",
    icon: Baby,
    title: "Pediatric Dentistry",
    short:
      "Gentle, friendly dental care for children — building healthy smiles and happy memories from the very first visit.",
    image: pediatric,
    benefits: [
      "Calm, child-friendly environment",
      "Preventive care from age 1+",
      "Painless fillings and sealants",
      "Education for parents and kids",
    ],
    process: [
      "Warm welcome and acclimatisation",
      "Gentle examination & cleaning",
      "Preventive treatment if needed",
      "Home care plan for parents",
    ],
    faqs: [
      {
        q: "When should my child see a dentist first?",
        a: "Ideally around their first birthday or within 6 months of the first tooth — early visits help prevent issues and build comfort.",
      },
      {
        q: "Do you treat anxious children?",
        a: "Yes. We specialise in helping nervous children feel safe with a slow, friendly approach.",
      },
    ],
  },
  {
    slug: "root-canal",
    icon: Activity,
    title: "Root Canal Treatment",
    short:
      "Painless, single-sitting root canal therapy using modern rotary endodontics to save your natural tooth.",
    image: rootcanal,
    benefits: [
      "Eliminates pain at the source",
      "Saves the natural tooth structure",
      "Often completed in a single visit",
      "Restores normal chewing function",
    ],
    process: [
      "Digital X-ray diagnosis",
      "Numbing & cleaning of infected canals",
      "Sealing and shaping",
      "Crown placement for protection",
    ],
    faqs: [
      {
        q: "Is a root canal painful?",
        a: "Modern root canals are virtually painless — they actually relieve the pain caused by the infection.",
      },
      {
        q: "How long does it take?",
        a: "Most cases are completed in a single 60–90 minute visit.",
      },
    ],
  },
  {
    slug: "orthodontic-treatment",
    icon: Smile,
    title: "Orthodontic Treatment",
    short:
      "Modern braces and clear aligners that gently guide your teeth into perfect alignment — without the awkward years.",
    image: ortho,
    benefits: [
      "Straighter, healthier bite",
      "Clear aligner & traditional options",
      "Improved long-term oral health",
      "Discreet, lifestyle-friendly designs",
    ],
    process: [
      "Bite & smile assessment",
      "3D scan and custom plan",
      "Regular gentle adjustments",
      "Retainers to lock in the result",
    ],
    faqs: [
      {
        q: "Am I too old for braces?",
        a: "Orthodontics works at any age. Many of our patients are adults who chose clear aligners.",
      },
      {
        q: "How long is treatment?",
        a: "Most cases take 6–24 months depending on complexity.",
      },
    ],
  },
  {
    slug: "full-mouth-rehabilitation",
    icon: Wrench,
    title: "Full Mouth Rehabilitation",
    short:
      "A complete reconstruction of bite, function and aesthetics — combining multiple disciplines into one elegant plan.",
    image: fullmouth,
    benefits: [
      "Restores function & comfort",
      "Treats wear, missing teeth & bite issues",
      "Customised step-by-step plan",
      "Transformative aesthetic outcome",
    ],
    process: [
      "Detailed assessment & records",
      "Treatment blueprint with milestones",
      "Phased restoration of teeth and bite",
      "Final aesthetic finishing",
    ],
    faqs: [
      {
        q: "How long does full mouth rehab take?",
        a: "Depending on complexity, it ranges from a few months to a year, paced for your comfort.",
      },
      {
        q: "Is it done in one visit?",
        a: "No — it's a planned series of visits, each carefully sequenced for the best outcome.",
      },
    ],
  },
  {
    slug: "oral-surgery",
    icon: Scissors,
    title: "Oral & Maxillofacial Surgery",
    short:
      "Expert surgical care — wisdom teeth, extractions, and corrective procedures — delivered with comfort and precision.",
    image: surgery,
    benefits: [
      "Specialist surgical expertise",
      "Sterile, modern operatory",
      "Gentle post-op care protocols",
      "Quick, comfortable recovery",
    ],
    process: [
      "Consultation & imaging",
      "Surgical planning",
      "Procedure under local anaesthesia",
      "Detailed recovery guidance",
    ],
    faqs: [
      {
        q: "How long is recovery?",
        a: "Most patients return to normal routines within 2–4 days, depending on the procedure.",
      },
      {
        q: "Will I be awake?",
        a: "Yes — procedures are done under local anaesthesia so you stay comfortable but conscious.",
      },
    ],
  },
];

export type Treatment = (typeof treatments)[number];

export const galleryItems = [
  { id: 1, src: clinicInterior, alt: "Modern reception", category: "clinic", aspect: "wide" },
  { id: 2, src: galleryRoom, alt: "Treatment room", category: "treatment-room", aspect: "portrait" },
  { id: 3, src: galleryReception, alt: "Reception desk", category: "clinic", aspect: "wide" },
  { id: 4, src: galleryEquipment, alt: "Digital X-ray", category: "equipment", aspect: "square" },
  { id: 5, src: galleryTools, alt: "Sterile instruments", category: "equipment", aspect: "portrait" },
  { id: 6, src: galleryPatient, alt: "Patient experience", category: "patient-experience", aspect: "wide" },
  { id: 7, src: gallerySmile, alt: "Beautiful smile", category: "patient-experience", aspect: "square" },
];

export type GalleryItem = (typeof galleryItems)[number];

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "clinic", label: "Clinic" },
  { id: "treatment-room", label: "Treatment Room" },
  { id: "equipment", label: "Equipment" },
  { id: "patient-experience", label: "Patient Experience" },
];

export const reviews = [
  {
    name: "Mishti Shah",
    date: "Verified Google Review",
    rating: 5,
    text: "Dr Maitri is very helpful, patient and professional with her work. Would highly recommend her to everyone.",
  },
  {
    name: "Kanak",
    date: "Verified Google Review",
    rating: 5,
    text: "I had my braces treatment here and it was a great experience. Dr. Maitri Patel is highly professional and experienced. She took time to explain every step and made me feel completely at ease.",
  },
  {
    name: "Stuti Oza",
    date: "Verified Google Review",
    rating: 5,
    text: "Dr Maitri is very patient. I had an amazing experience and I would highly recommend visiting here.",
  },
  {
    name: "Jia Shah",
    date: "Verified Google Review",
    rating: 5,
    text: "Great experience — clean clinic, gentle treatment, and very kind staff. Will definitely keep coming back.",
  },
  {
    name: "Vatsal Shah",
    date: "Verified Google Review",
    rating: 5,
    text: "Very patient and very helpful. The clinic is modern and the doctor explains everything clearly before any treatment.",
  },
];

export const stats = [
  { value: "2,000+", label: "Happy Patients" },
  { value: "5.0★", label: "Google Rating" },
  { value: "7+", label: "Specialised Services" },
  { value: "100%", label: "Sterile Protocol" },
];

export const features = [
  {
    icon: ShieldCheck,
    title: "Sterile, Modern Operatory",
    desc: "Hospital-grade sterilisation and CCTV-monitored environment built around your safety.",
  },
  {
    icon: Award,
    title: "Certified Implantologist",
    desc: "Treatment led by an aesthetic dentist and certified implantologist — precision in every step.",
  },
  {
    icon: HeartHandshake,
    title: "Gentle, Patient-First Care",
    desc: "We listen first, then plan. Every smile gets a personalised, unhurried approach.",
  },
  {
    icon: Microscope,
    title: "Advanced Diagnostics",
    desc: "Digital X-ray, intraoral imaging and modern endodontics for accurate, painless treatment.",
  },
  {
    icon: Stethoscope,
    title: "All-in-One Dental Care",
    desc: "From routine cleaning to full mouth rehabilitation — every service under one warm roof.",
  },
  {
    icon: Star,
    title: "5-Star Patient Reviews",
    desc: "Rated 5.0 on Google by patients who keep coming back — and bringing their families with them.",
  },
];

export const processSteps = [
  {
    icon: CalendarCheck2,
    title: "Book a Consultation",
    desc: "Call, WhatsApp or use our form. Pick a slot that suits you.",
  },
  {
    icon: ClipboardList,
    title: "Personalised Plan",
    desc: "We assess, scan and design a treatment plan tailored to your goals and budget.",
  },
  {
    icon: Stethoscope,
    title: "Gentle Treatment",
    desc: "Modern, comfortable, painless procedures in our calm and welcoming clinic.",
  },
  {
    icon: Lightbulb,
    title: "Confident Smile",
    desc: "Walk out with results you love and the aftercare to keep them that way.",
  },
];

export const aboutAchievements = [
  { icon: Award, title: "BDS", desc: "Bachelor of Dental Surgery" },
  { icon: Layers, title: "Certified Implantologist", desc: "Specialist in surgical & restorative implantology" },
  { icon: Sparkles, title: "Aesthetic Dentist", desc: "Certified in cosmetic and smile design" },
  { icon: Users, title: "2,000+ Smiles", desc: "Trusted by families across Mumbai" },
];

export const specialisations = [
  "Dental Implants",
  "Smile Design",
  "Clear Aligners",
  "Root Canal",
  "Pediatric Care",
  "Full Mouth Rehab",
  "Oral Surgery",
  "Cosmetic Dentistry",
];
