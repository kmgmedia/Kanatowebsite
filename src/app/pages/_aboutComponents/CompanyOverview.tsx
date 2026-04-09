import { CIVIL_IMG } from "./data";

export function CompanyOverview() {
  return (
    <section className="py-20" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p
              className="uppercase tracking-widest text-xs mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21", fontWeight: 600 }}
            >
              The Company
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                color: "#123A6F",
                lineHeight: 1.3,
              }}
            >
              Over Three Decades of Dependable Engineering
            </h2>
            <p className="mb-4 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}>
              Kanato Engineering Resources Nigeria Limited was incorporated on the 23rd of July
              1991 as a distinct engineering company with reference for Electrical, Mechanical, and
              Civil services, with registration number 666713.
            </p>
            <p className="mb-4 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}>
              As a wholly indigenous engineering company, Kanato engages in Electrical &
              Mechanical Installation, Sales, Supply, Construction, and Service/Maintenance. Our
              dynamic, resourceful, and experienced professionals have consistently translated
              designs into affordable reality — turning the dreams and visions of our clients into
              tangible results.
            </p>
            <p className="mb-4 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}>
              Our years of professionalism and integrity have made us distinct among our
              contemporaries. We do not only provide safety installations but ensure aesthetic
              values are upheld. We have covered nearly all states in Nigeria and continue to
              expand our reach.
            </p>
            <p className="leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}>
              The team comprises accomplished professionals who came together to uphold integrity
              and professionalism. We maintain strong relationships with construction companies,
              financiers, suppliers, and distributors of electrical materials — all managed to the
              benefit of our clients and the environment.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl" style={{ height: "460px" }}>
              <img src={CIVIL_IMG} alt="Kanato Engineering Works" className="w-full h-full object-cover" />
            </div>
            <div
              className="absolute -bottom-5 -right-5 rounded-lg p-6 shadow-xl hidden md:block"
              style={{ backgroundColor: "#123A6F", maxWidth: "200px" }}
            >
              <p
                className="text-white text-3xl font-extrabold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                33+
              </p>
              <p
                className="text-white/70 text-xs mt-1"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Years of Engineering Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
