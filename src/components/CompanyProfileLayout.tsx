import React from "react";

export default function CompanyProfileLayout({ data }) {
  const { COMPANY_PROFILE } = data;
  return (
    <div id="company-profile" style={{ fontFamily: "Montserrat, sans-serif", color: "#1a1a1a", lineHeight: 1.6 }}>
      {/* COVER PAGE */}
      <section style={{ textAlign: "center", padding: "80px 40px", background: "linear-gradient(to bottom, #004080, #007a33)", color: "white" }}>
        <img src={COMPANY_PROFILE.logo} alt="Kanato Logo" style={{ height: 84, marginBottom: 18 }} />
        <h1 style={{ margin: 0 }}>{COMPANY_PROFILE.title}</h1>
        <p style={{ margin: "8px 0 24px", fontSize: 16 }}>{COMPANY_PROFILE.tagline}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
          {COMPANY_PROFILE.heroImages.map((img, i) => (
            <img key={i} src={img} alt={`Hero ${i}`} style={{ width: "22%", borderRadius: 8 }} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "60px 0" }}>
        <div style={{ width: "55%" }}>
          <h2>{COMPANY_PROFILE.about.heading}</h2>
          <p>{COMPANY_PROFILE.about.text}</p>
          <ul>
            {COMPANY_PROFILE.about.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <img src={COMPANY_PROFILE.about.image} alt="Engineering Team" style={{ width: "40%", borderRadius: 8 }} />
      </section>

      {/* VISION & MISSION */}
      <section>
        <h2>Vision & Mission</h2>
        <p><strong>Vision:</strong> {COMPANY_PROFILE.visionMission.vision}</p>
        <p><strong>Mission:</strong> {COMPANY_PROFILE.visionMission.mission}</p>
        <div style={{ display: "flex", gap: 12 }}>
          {COMPANY_PROFILE.visionMission.values.map((val, i) => (
            <div key={i} style={{ padding: 12, background: "#fff", borderRadius: 8 }}>
              <p style={{ margin: 0 }}>{val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ marginTop: 40 }}>
        <h2>Our Approach</h2>
        <div style={{ display: "flex", gap: 18 }}>
          {COMPANY_PROFILE.process.map((step, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <img src={`/icons/${step.icon}`} alt={step.step} style={{ height: 48 }} />
              <p style={{ margin: "8px 0 0" }}>{step.step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ marginTop: 40 }}>
        <h2>Our Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
          {COMPANY_PROFILE.services.map((srv, i) => (
            <div key={i} style={{ borderRadius: 8, overflow: "hidden", background: "#fff", padding: 12 }}>
              <img src={srv.image} alt={srv.title} style={{ width: "100%", height: 140, objectFit: "cover" }} />
              <h3>{srv.title}</h3>
              <ul>
                {srv.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{ marginTop: 40 }}>
        <h2>Selected Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {COMPANY_PROFILE.projects.map((proj, i) => (
            <div key={i} style={{ borderRadius: 8, overflow: "hidden", background: "#fff", padding: 8 }}>
              <img src={proj.image} alt={proj.title} style={{ width: "100%", height: 120, objectFit: "cover" }} />
              <h4 style={{ margin: "8px 0 0" }}>{proj.title}</h4>
              <p style={{ margin: 0 }}>{proj.client} — {proj.location} ({proj.year})</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section style={{ marginTop: 40 }}>
        <h2>Our Clients</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {COMPANY_PROFILE.clients.map((c, i) => (
            <span key={i} style={{ padding: "8px 12px", background: "#F8FAFC", borderRadius: 999 }}>{c}</span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ marginTop: 40, marginBottom: 60 }}>
        <h2>Contact Us</h2>
        <p><strong>Head Office:</strong> {COMPANY_PROFILE.contact.headOffice}</p>
        <p><strong>Branch Office:</strong> {COMPANY_PROFILE.contact.branchOffice}</p>
        <p><strong>Phone:</strong> {COMPANY_PROFILE.contact.phone.join(", ")}</p>
        <p><strong>Email:</strong> {COMPANY_PROFILE.contact.email}</p>
      </section>
    </div>
  );
}
