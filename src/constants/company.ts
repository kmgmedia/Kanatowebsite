export const COMPANY = {
  name: "Kanato Engineering Resources Nig. Ltd.",
  shortName: "Kanato Engineering",
  rc: "RC 666713",
  founded: "23rd July 1991",
  foundingYear: "1991",
  description:
    "Kanato Engineering Resources Nigeria Limited is a wholly indigenous engineering company incorporated in 1991, specialising in Electrical, Mechanical, and Civil engineering services across Nigeria.",
  phone: {
    primary: "08096691601",
    secondary: "08033201366",
    intl: {
      primary: "+234-809-669-1601",
      secondary: "+234-803-320-1366",
    },
    whatsapp: "2348096691601",
  },
  email: "kanato4reel@yahoo.com",
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

export const SITE_URL =
  import.meta.env.VITE_SITE_URL || "https://www.kanato-engineering.com";
