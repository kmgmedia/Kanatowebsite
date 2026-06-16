export const COMPANY = {
  name: "Kanato Engineering Resources Nig. Ltd.",
  shortName: "Kanato Engineering",
  rc: "RC 666713",
  founded: "23rd July 1991",
  foundingYear: "1991",
  description:
    "Kanato Engineering Resources Nigeria Limited is a wholly indigenous engineering company incorporated in 1991, specialising in Electrical, Mechanical, and Civil engineering services across Nigeria.",
  phone: {
    primary: "08033201366",
    secondary: "08023945686",
    tertiary: "08055799998",
    numbers: ["08033201366", "08023945686", "08055799998"],
    display: "08033201366 / 08023945686 / 08055799998",
    intl: {
      primary: "+234-803-320-1366",
      secondary: "+234-802-394-5686",
      tertiary: "+234-805-579-9998",
      numbers: ["+234-803-320-1366", "+234-802-394-5686", "+234-805-579-9998"],
    },
    whatsapp: "2348033201366",
  },
  email: "kanato4reel@yahoo.com",
  secondaryEmail: "kanato4reel@gmail.com",
  emails: ["kanato4reel@yahoo.com", "kanato4reel@gmail.com"],
  emailDisplay: "kanato4reel@yahoo.com / kanato4reel@gmail.com",
  emailMailto: "kanato4reel@yahoo.com,kanato4reel@gmail.com",
  addresses: {
    headOffice: {
      street: "10, Oyewole Close, Baruwa B/Stop",
      city: "Ipaja",
      state: "Lagos",
      full: "10, Oyewole Close, Baruwa B/Stop, Ipaja, Lagos.",
      lines: ["10, Oyewole Close,", "Baruwa B/Stop,", "Ipaja, Lagos."],
    },
    branch: {
      street: "Suite 7, Carol Plaza, 29-39 Alimosho Road, Alimosho",
      city: "Iyana Ipaja",
      state: "Lagos",
      full: "Suite 7, Carol Plaza, 29-39 Alimosho Road, Alimosho, Iyana Ipaja, Lagos.",
      lines: [
        "Suite 7, Carol Plaza,",
        "29-39 Alimosho Road,",
        "Alimosho, Iyana Ipaja, Lagos.",
      ],
    },
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
  },
  hours: {
    weekdays: { opens: "08:00", closes: "17:00", label: "8:00 AM - 5:00 PM" },
    saturday: { opens: "09:00", closes: "14:00", label: "9:00 AM - 2:00 PM" },
  },
  geo: { lat: "6.6012", lng: "3.2890" },
  whatsappMessage:
    "Hello Kanato Engineering, I would like to inquire about your engineering services.",
} as const;

const envSiteUrl =
  typeof import.meta !== "undefined" ? import.meta.env?.VITE_SITE_URL : undefined;

export const SITE_URL = envSiteUrl || "http://kanatoengineering.com.ng";
