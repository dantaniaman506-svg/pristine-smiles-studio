export const clinicName = "Dr. Maitri's Dental Care";
export const clinicShort = "Dr. Maitri's";
export const tagline = "Creating Healthy & Beautiful Smiles";
export const doctorName = "Dr. Maitri Patel Kova";
export const doctorCredentials = "BDS, Certified Aesthetic Dentist, Certified Implantologist";

export const phonePrimary = "+918788490331";
export const phoneSecondary = "+919619858585";
export const phoneDisplay = "+91 87884 90331";
export const phoneDisplayAlt = "+91 96198 58585";
export const whatsapp = "918788490331";
export const email = "drmaitrisdentalcare@gmail.com";
export const instagram = "https://instagram.com/drmaitrisdentalcare";

export const address =
  "3A, Ariha Signature, 1st Floor, Near Jain Sweets, Road No. 2, Jawahar Nagar, Goregaon West, Mumbai, Maharashtra 400104";
export const addressShort = "Goregaon West, Mumbai";
export const mapEmbedUrl =
  "https://www.google.com/maps?q=Ariha+Signature+Jawahar+Nagar+Goregaon+West+Mumbai&output=embed";

export const domain = "https://drmaitrisdentalcare.com";

export const hours = [
  { day: "Monday – Saturday", time: "10:00 AM – 1:00 PM & 5:00 PM – 8:30 PM" },
  { day: "Sunday", time: "By appointment only" },
  { day: "Afternoons (1–5 PM)", time: "By appointment only" },
];

// Sunday = 0 — Sunday is by appointment only; warn user
export const closedDays = [0];

export const whatsappLink = (msg: string) =>
  `https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${phonePrimary}`;
