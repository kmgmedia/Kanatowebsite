import { optimizeCloudinaryImage } from "../../../lib/cloudinary";

export const projectsHeroImage =
  optimizeCloudinaryImage(
    "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779049606/Kanato_Website/Home%20Page/Seven_Flat_Complex___Anthony_Village_202605172126_diiceq.jpg",
  );

const imageLibrary = {
  construction:
    "https://images.unsplash.com/photo-1734184451009-e21cacf54f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlbmdpbmVlcmluZyUyMGluZnJhc3RydWN0dXJlJTIwTmlnZXJpYXxlbnwxfHx8fDE3NzUyMTEzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  electrical:
    "https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwaW5zdGFsbGF0aW9uJTIwcG93ZXIlMjBwYW5lbCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc1MjExMzgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  civil: projectsHeroImage,
  telecom:
    "https://images.unsplash.com/photo-1760013767150-da8e4ded6286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tJTIwdG93ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMG1hc3R8ZW58MXx8fHwxNzc1MjExMzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  power:
    "https://images.unsplash.com/photo-1758866572399-7ff95ba69562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHN1YnN0YXRpb24lMjB0cmFuc2Zvcm1lciUyMGVsZWN0cmljaXR5fGVufDF8fHx8MTc3NTIxMTM5NHww&ixlib=rb-4.1.0&q=80&w=1080",
  housing:
    "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779049871/Kanato_Website/Home%20Page/2_Wing_Duplex___Maitama_Hill__202605172130_uaea1h.jpg",
  office:
    "https://images.unsplash.com/photo-1770927423634-14778e8a0fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzc1MTEwNDE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  maintenance:
    "https://images.unsplash.com/photo-1709804250377-27ce2d57209e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWludGVuYW5jZSUyMHNlcnZpY2luZyUyMGZhY2lsaXR5JTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNzc1MjExMzk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
} as const;

export const projectCategories = [
  "All",
  "Civil",
  "Civil & Electrical",
  "Electrical",
  "Telecom",
  "Power",
] as const;

export const projectCards = [
  {
    title: "2 Wing Duplex - Maitama Hill",
    client: "Clockwise Dev. Ltd.",
    category: "Civil",
    year: "2011",
    location: "Abuja",
    image: imageLibrary.housing,
  },
  {
    title: "Street Light Electrification - G.R.A.",
    client: "Ikeja Local Government",
    category: "Electrical",
    year: "2012",
    location: "Ikeja, Lagos",
    image: imageLibrary.electrical,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779058508/Kanato_Website/Home%20Page/Photorealistic__recommended___Photorealistic_engineering_photo_202605172352_zhouhr.jpg",
  },
  {
    title: "Seven Flat Complex - Anthony Village",
    client: "Clockwise Dev. Ltd.",
    category: "Civil",
    year: "2012",
    location: "Anthony, Lagos",
    image: imageLibrary.civil,
  },
  {
    title: "Niger Insurance Building",
    client: "Solem Nig. Ltd.",
    category: "Civil",
    year: "2013",
    location: "Anthony B/Stop, Lagos",
    image: imageLibrary.office,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779052321/Kanato_Website/Home%20Page/Niger_Insurance_Building___Anthony_202605172211_ib4jat.jpg",
  },
  {
    title: "2 Wing Duplex - Opebi",
    client: "Tuag Nig. Ltd.",
    category: "Civil",
    year: "2013",
    location: "Opebi, Lagos",
    image: imageLibrary.housing,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779052499/Kanato_Website/Home%20Page/2_Wing_Duplex___Opebi_Prompt__202605172214_aklr3k.jpg",
  },
  {
    title: "12 Flat Complex - Allen",
    client: "Engineer Agbakwu",
    category: "Civil",
    year: "2014",
    location: "Allen, Lagos",
    image: imageLibrary.construction,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779052721/Kanato_Website/Home%20Page/12_Flat_Complex___Allen_Prompt__202605172218_xidrud.jpg",
  },
  {
    title: "2 Wing Duplex with Penthouse",
    client: "Lawyer Tunde Seriki",
    category: "Civil",
    year: "2015",
    location: "Victoria Island, Lagos",
    image: imageLibrary.housing,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779051030/Kanato_Website/Home%20Page/Wing_Duplex_with_Penthouse___202605172150_v94b48.jpg",
  },
  {
    title: "4 Flat Complex - Ifako",
    client: "Clockwise Dev. Ltd.",
    category: "Civil",
    year: "2016",
    location: "Ifako, Lagos",
    image: imageLibrary.civil,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779051212/Kanato_Website/Home%20Page/Flat_Complex___Ifako_Prompt__202605172153_rzugfy.jpg",
  },
  {
    title: "Duplex Mansion - Agenebode",
    client: "Francis Alimekhena",
    category: "Civil",
    year: "2016",
    location: "Ijiode, Edo State",
    image: imageLibrary.housing,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779051631/Kanato_Website/Home%20Page/Duplex_Mansion___Agenebode_Prompt__202605172159_gsc6gi.jpg",
  },
  {
    title: "Union Bank Head Office Renovation",
    client: "Tuag Nig. Ltd.",
    category: "Civil & Electrical",
    year: "2017",
    location: "40 Marina, Lagos",
    image: imageLibrary.office,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779053145/Kanato_Website/Home%20Page/Union_Bank_Head_Office_Renovation_202605172225_tjithx.jpg",
  },
  {
    title: "Office Complex - Agbaani",
    client: "Union Bank (Tuag Nig. Ltd.)",
    category: "Civil & Electrical",
    year: "2018",
    location: "Agbaani, Enugu",
    image: imageLibrary.office,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779058744/Kanato_Website/Home%20Page/Prompt_for_Google_FX___202605172358_djbtyu.jpg",
  },
  {
    title: "Union Bank Sub Station",
    client: "Tuag Nig. Ltd.",
    category: "Power",
    year: "2018",
    location: "Agbaani, Enugu",
    image: imageLibrary.power,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779053627/Kanato_Website/Home%20Page/Union_Bank_Sub_Station___202605172233_qweox9.jpg",
  },
  {
    title: "Rural Electrification - Ijedodo",
    client: "A.E.E. Nig. Ltd.",
    category: "Electrical",
    year: "2019",
    location: "Ijedodo, Lagos",
    image: imageLibrary.electrical,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779057503/Kanato_Website/Home%20Page/Rural_Electrification___Ijedodo_Prompt__202605172338_vdpoqq.jpg",
  },
  {
    title: "MTN Sub Station - Seme Border",
    client: "Afolabi Nig. Ltd.",
    category: "Telecom",
    year: "2019",
    location: "Seme Border, Lagos",
    image: imageLibrary.telecom,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779056393/Kanato_Website/Home%20Page/MTN_Sub_Station___Seme_202605172319_yzxppt.jpg",
  },
  {
    title: "Duplex with Pent House",
    client: "Primal Concept Ltd.",
    category: "Civil",
    year: "2019",
    location: "Abeokuta, Ogun State",
    image: imageLibrary.housing,
    imageUrl: imageLibrary.housing,
  },
  {
    title: "2 Office Complex - Alfa Beach",
    client: "Sister Galardis",
    category: "Civil",
    year: "2020",
    location: "Ajah, Lagos",
    image: imageLibrary.office,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779057754/Kanato_Website/Home%20Page/2_Office_Complex___Alfa_202605172340_vh7jfq.jpg",
  },
  {
    title: "Rural Electrification - Golden Park",
    client: "A.E.E Nig. Ltd.",
    category: "Electrical",
    year: "2020",
    location: "Ajah, Lagos",
    image: imageLibrary.electrical,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779057942/Kanato_Website/Home%20Page/Rural_Electrification___Golden_Park_202605172345_pohweu.jpg",
  },
  {
    title: "Nestle Foods Office Complex Renovation",
    client: "Nestle Foods, Ilupeju",
    category: "Civil & Electrical",
    year: "2021",
    location: "Ilupeju, Lagos",
    image: imageLibrary.maintenance,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779058085/Kanato_Website/Home%20Page/Nestle_Foods_Office_Complex_Renovation_202605172347_a3w7rm.jpg",
  },
  {
    title: "MTN & V.Mobile Telecom Site",
    client: "Wauline & Clockwise Ltd.",
    category: "Telecom",
    year: "2021",
    location: "Tilka, Lucasasa",
    image: imageLibrary.telecom,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779055270/Kanato_Website/Home%20Page/MTN___V.Mobile_Telecom_Site_202605172300_ibsjeq.jpg",
  },
  {
    title: "Transformer Installation - Power to Site",
    client: "Mass Telecom Innovation Ltd.",
    category: "Power",
    year: "2022",
    location: "Lagos State",
    image: imageLibrary.power,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779055434/Kanato_Website/Home%20Page/Transformer_Installation___Power_to_202605172303_bvd3lh.jpg",
  },
  {
    title: "Transformer Installation - Power to Site",
    client: "Trusnet Limited",
    category: "Power",
    year: "2022",
    location: "Lagos State",
    image: imageLibrary.electrical,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779059000/Kanato_Website/Home%20Page/Prompt___Transformer_installation_for_power_202605180003_cxqqij.jpg",
  },
  {
    title: "Ecobank Office Complex",
    client: "Pentorise Ltd.",
    category: "Civil & Electrical",
    year: "2024",
    location: "Oyinjolayemi, Lagos",
    image: imageLibrary.office,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779056531/Kanato_Website/Home%20Page/Ecobank_Office_Complex_Prompt___Modern_202605172321_od1ta0.jpg",
  },
  {
    title: "8 Wing Duplex - Arepo",
    client: "Pentorise Ltd.",
    category: "Civil",
    year: "2024",
    location: "Arepo, Ogun State",
    image: imageLibrary.housing,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779056817/Kanato_Website/Home%20Page/8_Wing_Duplex___Arepo_Prompt__202605172326_zykmlk.jpg",
  },
  {
    title: "MTN/Etisalat Telecom Site Build",
    client: "Servtek",
    category: "Telecom",
    year: "2023",
    location: "Lagos State",
    image: imageLibrary.telecom,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779055794/Kanato_Website/Home%20Page/MTN_Etisalat_Telecom_Site_Build_Prompt__202605172309_wswwty.jpg",
  },
  {
    title: "Sub Station Renovation - Maryland",
    client: "M.T.I. Ltd.",
    category: "Power",
    year: "2024",
    location: "Maryland, Lagos",
    image: imageLibrary.power,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779053889/Kanato_Website/Home%20Page/Sub_Station_Renovation___Maryland__202605172237_pkuunz.jpg",
  },
  {
    title: "Govt. Office - Xentorage Office",
    client: "Siktob Ltd.",
    category: "Civil & Electrical",
    year: "2025",
    location: "Ogun State",
    image: imageLibrary.office,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779054697/Kanato_Website/Home%20Page/Govt._Office___Xentorage_Office_202605172250_zysekf.jpg",
  },
  {
    title: "Street Light Electrification - Jimoh Ajao",
    client: "Siktob Nig. Ltd./LASG",
    category: "Electrical",
    year: "2026",
    location: "Jimoh Ajao, Lagos",
    image: imageLibrary.electrical,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779054914/Kanato_Website/Home%20Page/Street_Light_Electrification___Jimoh_202605172254_tsnuoi.jpg",
  },
  {
    title: "Transformer Relocation - Jimoh Ajao",
    client: "Siktob Nig. Ltd./LASG",
    category: "Power",
    year: "2026",
    location: "Jimoh Ajao, Lagos",
    image: imageLibrary.power,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779055117/Kanato_Website/Home%20Page/Transformer_Relocation___Jimoh_Ajao_202605172258_i1oqk7.jpg",
  },
] as const;
