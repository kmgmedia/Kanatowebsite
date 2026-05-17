import { useState } from "react";
import { Link } from "react-router";
import { MapPin, Calendar, ArrowRight, Filter } from "lucide-react";
import { SEO } from "../components/SEO";

const HERO_IMG =
  "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779049606/Kanato_Website/Home%20Page/Seven_Flat_Complex___Anthony_Village_202605172126_diiceq.jpg";

const IMGS = {
  construction:
    "https://images.unsplash.com/photo-1734184451009-e21cacf54f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlbmdpbmVlcmluZyUyMGluZnJhc3RydWN0dXJlJTIwTmlnZXJpYXxlbnwxfHx8fDE3NzUyMTEzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  electrical:
    "https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwaW5zdGFsbGF0aW9uJTIwcG93ZXIlMjBwYW5lbCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc1MjExMzgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  civil:
    "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779049606/Kanato_Website/Home%20Page/Seven_Flat_Complex___Anthony_Village_202605172126_diiceq.jpg",
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
};

const projects = [
  {
    title: "2 Wing Duplex — Maitama Hill",
    client: "Clockwise Dev. Ltd.",
    category: "Civil",
    year: "1991",
    location: "Abuja",
    image: IMGS.housing,
  },
  {
    title: "Street Light Electrification — G.R.A.",
    client: "Ikeja Local Government",
    category: "Electrical",
    year: "1992",
    location: "Ikeja, Lagos",
    image: IMGS.electrical,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779058508/Kanato_Website/Home%20Page/Photorealistic__recommended___Photorealistic_engineering_photo_202605172352_zhouhr.jpg",
  },
  {
    title: "Seven Flat Complex — Anthony Village",
    client: "Clockwise Dev. Ltd.",
    category: "Civil",
    year: "1992",
    location: "Anthony, Lagos",
    image: IMGS.civil,
  },
  {
    title: "Niger Insurance Building",
    client: "Solem Nig. Ltd.",
    category: "Civil",
    year: "1993",
    location: "Anthony B/Stop, Lagos",
    image: IMGS.office,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779052321/Kanato_Website/Home%20Page/Niger_Insurance_Building___Anthony_202605172211_ib4jat.jpg",
  },
  {
    title: "2 Wing Duplex — Opebi",
    client: "Tuag Nig. Ltd.",
    category: "Civil",
    year: "1993",
    location: "Opebi, Lagos",
    image: IMGS.housing,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779052499/Kanato_Website/Home%20Page/2_Wing_Duplex___Opebi_Prompt__202605172214_aklr3k.jpg",
  },
  {
    title: "12 Flat Complex — Allen",
    client: "Engineer Agbakwu",
    category: "Civil",
    year: "1994",
    location: "Allen, Lagos",
    image: IMGS.construction,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779052721/Kanato_Website/Home%20Page/12_Flat_Complex___Allen_Prompt__202605172218_xidrud.jpg",
  },
  {
    title: "2 Wing Duplex with Penthouse",
    client: "Lawyer Tunde Seriki",
    category: "Civil",
    year: "1997",
    location: "Victoria Island, Lagos",
    image: IMGS.housing,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779051030/Kanato_Website/Home%20Page/Wing_Duplex_with_Penthouse___202605172150_v94b48.jpg",
  },
  {
    title: "4 Flat Complex — Ifako",
    client: "Clockwise Dev. Ltd.",
    category: "Civil",
    year: "1999",
    location: "Ifako, Lagos",
    image: IMGS.civil,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779051212/Kanato_Website/Home%20Page/Flat_Complex___Ifako_Prompt__202605172153_rzugfy.jpg",
  },
  {
    title: "Duplex Mansion — Agenebode",
    client: "Francis Alimekhena",
    category: "Civil",
    year: "1999",
    location: "Ijiode, Edo State",
    image: IMGS.housing,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779051631/Kanato_Website/Home%20Page/Duplex_Mansion___Agenebode_Prompt__202605172159_gsc6gi.jpg",
  },
  {
    title: "Union Bank Head Office Renovation",
    client: "Tuag Nig. Ltd.",
    category: "Civil & Electrical",
    year: "2001",
    location: "40 Marina, Lagos",
    image: IMGS.office,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779053145/Kanato_Website/Home%20Page/Union_Bank_Head_Office_Renovation_202605172225_tjithx.jpg",
  },
  {
    title: "Office Complex — Agbaani",
    client: "Union Bank (Tuag Nig. Ltd.)",
    category: "Civil & Electrical",
    year: "2002",
    location: "Agbaani, Enugu",
    image: IMGS.office,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779058744/Kanato_Website/Home%20Page/Prompt_for_Google_FX___202605172358_djbtyu.jpg",
  },
  {
    title: "Union Bank Sub Station",
    client: "Tuag Nig. Ltd.",
    category: "Power",
    year: "2002",
    location: "Agbaani, Enugu",
    image: IMGS.power,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779053627/Kanato_Website/Home%20Page/Union_Bank_Sub_Station___202605172233_qweox9.jpg",
  },
  {
    title: "Rural Electrification — Ijedodo",
    client: "A.E.E. Nig. Ltd.",
    category: "Electrical",
    year: "2003",
    location: "Ijedodo, Lagos",
    image: IMGS.electrical,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779057503/Kanato_Website/Home%20Page/Rural_Electrification___Ijedodo_Prompt__202605172338_vdpoqq.jpg",
  },
  {
    title: "MTN Sub Station — Seme Border",
    client: "Afolabi Nig. Ltd.",
    category: "Telecom",
    year: "2003",
    location: "Seme Border, Lagos",
    image: IMGS.telecom,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779056393/Kanato_Website/Home%20Page/MTN_Sub_Station___Seme_202605172319_yzxppt.jpg",
  },
  {
    title: "Duplex with Pent House",
    client: "Primal Concept Ltd.",
    category: "Civil",
    year: "2003",
    location: "Abeokuta, Ogun State",
    image: IMGS.housing,
    imageUrl: IMGS.housing,
  },
  {
    title: "2 Office Complex — Alfa Beach",
    client: "Sister Galardis",
    category: "Civil",
    year: "2004",
    location: "Ajah, Lagos",
    image: IMGS.office,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779057754/Kanato_Website/Home%20Page/2_Office_Complex___Alfa_202605172340_vh7jfq.jpg",
  },
  {
    title: "Rural Electrification — Golden Park",
    client: "A.E.E Nig. Ltd.",
    category: "Electrical",
    year: "2004",
    location: "Ajah, Lagos",
    image: IMGS.electrical,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779057942/Kanato_Website/Home%20Page/Rural_Electrification___Golden_Park_202605172345_pohweu.jpg",
  },
  {
    title: "Nestle Foods Office Complex Renovation",
    client: "Nestle Foods, Ilupeju",
    category: "Civil & Electrical",
    year: "2005",
    location: "Ilupeju, Lagos",
    image: IMGS.maintenance,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779058085/Kanato_Website/Home%20Page/Nestle_Foods_Office_Complex_Renovation_202605172347_a3w7rm.jpg",
  },
  {
    title: "MTN & V.Mobile Telecom Site",
    client: "Wauline & Clockwise Ltd.",
    category: "Telecom",
    year: "2005",
    location: "Tilka, Lucasasa",
    image: IMGS.telecom,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779055270/Kanato_Website/Home%20Page/MTN___V.Mobile_Telecom_Site_202605172300_ibsjeq.jpg",
  },
  {
    title: "Transformer Installation — Power to Site",
    client: "Mass Telecom Innovation Ltd.",
    category: "Power",
    year: "2006",
    location: "Lagos State",
    image: IMGS.power,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779055434/Kanato_Website/Home%20Page/Transformer_Installation___Power_to_202605172303_bvd3lh.jpg",
  },
  {
    title: "Transformer Installation — Power to Site",
    client: "Trusnet Limited",
    category: "Power",
    year: "2006",
    location: "Lagos State",
    image: IMGS.electrical,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779059000/Kanato_Website/Home%20Page/Prompt___Transformer_installation_for_power_202605180003_cxqqij.jpg",
  },
  {
    title: "Ecobank Office Complex",
    client: "Pentorise Ltd.",
    category: "Civil & Electrical",
    year: "2011",
    location: "Oyinjolayemi, Lagos",
    image: IMGS.office,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779056531/Kanato_Website/Home%20Page/Ecobank_Office_Complex_Prompt___Modern_202605172321_od1ta0.jpg",
  },
  {
    title: "8 Wing Duplex — Arepo",
    client: "Pentorise Ltd.",
    category: "Civil",
    year: "2011",
    location: "Arepo, Ogun State",
    image: IMGS.housing,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779056817/Kanato_Website/Home%20Page/8_Wing_Duplex___Arepo_Prompt__202605172326_zykmlk.jpg",
  },
  {
    title: "MTN/Etisalat Telecom Site Build",
    client: "Servtek",
    category: "Telecom",
    year: "2010",
    location: "Lagos State",
    image: IMGS.telecom,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779055794/Kanato_Website/Home%20Page/MTN_Etisalat_Telecom_Site_Build_Prompt__202605172309_wswwty.jpg",
  },
  {
    title: "Sub Station Renovation — Maryland",
    client: "M.T.I. Ltd.",
    category: "Power",
    year: "2011",
    location: "Maryland, Lagos",
    image: IMGS.power,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779053889/Kanato_Website/Home%20Page/Sub_Station_Renovation___Maryland__202605172237_pkuunz.jpg",
  },
  {
    title: "Govt. Office — Xentorage Office",
    client: "Siktob Ltd.",
    category: "Civil & Electrical",
    year: "2012",
    location: "Ogun State",
    image: IMGS.office,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779054697/Kanato_Website/Home%20Page/Govt._Office___Xentorage_Office_202605172250_zysekf.jpg",
  },
  {
    title: "Street Light Electrification — Jimoh Ajao",
    client: "Siktob Nig. Ltd./LASG",
    category: "Electrical",
    year: "2013",
    location: "Jimoh Ajao, Lagos",
    image: IMGS.electrical,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779054914/Kanato_Website/Home%20Page/Street_Light_Electrification___Jimoh_202605172254_tsnuoi.jpg",
  },
  {
    title: "Transformer Relocation — Jimoh Ajao",
    client: "Siktob Nig. Ltd./LASG",
    category: "Power",
    year: "2013",
    location: "Jimoh Ajao, Lagos",
    image: IMGS.power,
    imageUrl:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779055117/Kanato_Website/Home%20Page/Transformer_Relocation___Jimoh_Ajao_202605172258_i1oqk7.jpg",
  },
];

const categories = [
  "All",
  "Civil",
  "Electrical",
  "Telecom",
  "Power",
  "Civil & Electrical",
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <div>
      <SEO
        title="Projects — Engineering Work Delivered Across Nigeria Since 1991"
        description="Browse 27+ completed engineering projects by Kanato Engineering — civil construction, electrical installations, telecom infrastructure, power solutions and more for top Nigerian corporations and government bodies."
        path="/projects"
      />
      {/* HERO */}
      <section
        className="relative flex items-center"
        style={{ paddingTop: "110px", paddingBottom: "80px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,45,97,0.95) 0%, rgba(59,82,165,0.85) 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 pt-10">
          <nav
            className="flex items-center gap-2 text-xs mb-6"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Projects</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded mb-4"
            style={{
              backgroundColor: "rgba(47,168,79,0.2)",
              border: "1px solid rgba(47,168,79,0.4)",
            }}
          >
            <span
              className="text-xs uppercase tracking-widest"
              style={{ fontFamily: "Inter, sans-serif", color: "#2FA84F" }}
            >
              Our Work
            </span>
          </div>
          <h1
            className="text-white mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              maxWidth: "650px",
              lineHeight: 1.2,
              color: "#fff",
            }}
          >
            Projects Delivered Across{" "}
            <span style={{ color: "#2FA84F" }}>Nigeria Since 1991</span>
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(255,255,255,0.75)",
              maxWidth: "560px",
            }}
          >
            Engineering companies sell with proof, not adjectives. Explore our
            track record of successfully delivered projects for corporate,
            government, and private clients.
          </p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="py-16" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <div className="flex items-center gap-2 mr-2">
              <Filter size={16} style={{ color: "#6B7280" }} />
              <span
                className="text-sm font-medium"
                style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
              >
                Filter:
              </span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  fontFamily: "Inter, sans-serif",
                  backgroundColor: activeFilter === cat ? "#3B52A5" : "#fff",
                  color: activeFilter === cat ? "#fff" : "#374151",
                  border: `1px solid ${activeFilter === cat ? "#3B52A5" : "#D1D5DB"}`,
                }}
              >
                {cat}
              </button>
            ))}
            <span
              className="ml-auto text-sm"
              style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
            >
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => {
              const imgSrc = project.imageUrl ?? project.image;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ height: "200px" }}
                  >
                    <img
                      src={imgSrc}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute top-3 left-3 px-2.5 py-1 rounded text-xs font-semibold"
                      style={{
                        backgroundColor: "#2FA84F",
                        color: "#fff",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {project.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3
                      className="mb-2"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 700,
                        color: "#3B52A5",
                        fontSize: "0.9rem",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-xs mb-3"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "#6B7280",
                      }}
                    >
                      Client: {project.client}
                    </p>
                    <div className="flex items-center justify-between">
                      <div
                        className="flex items-center gap-1 text-xs"
                        style={{ color: "#9CA3AF" }}
                      >
                        <MapPin size={11} />
                        <span style={{ fontFamily: "Inter, sans-serif" }}>
                          {project.location}
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-1 text-xs"
                        style={{ color: "#9CA3AF" }}
                      >
                        <Calendar size={11} />
                        <span style={{ fontFamily: "Inter, sans-serif" }}>
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#3B52A5" }}>
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2
            className="text-white mb-5"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
              color: "#fff",
            }}
          >
            Ready to Add Your Project to Our Track Record?
          </h2>
          <p
            className="mb-8"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "450px",
              margin: "0 auto 2rem",
            }}
          >
            Contact us today to discuss your engineering project requirements.
          </p>
          <Link
            to="/request-quote"
            className="inline-flex items-center gap-2 px-8 py-4 rounded text-sm font-semibold transition-all hover:opacity-90"
            style={{
              backgroundColor: "#2FA84F",
              color: "#fff",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Request a Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
