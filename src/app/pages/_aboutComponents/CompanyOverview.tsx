import { CIVIL_IMG } from "./data";

export function CompanyOverview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-widest text-[#2FA84F]">
              The Company
            </p>
            <h2 className="mb-6 font-['Montserrat',sans-serif] text-[clamp(1.5rem,2.5vw,2.1rem)] font-extrabold leading-tight text-[#3B52A5]">
              Over Three Decades of Dependable Engineering
            </h2>
            <p className="mb-4 font-['Inter',sans-serif] leading-relaxed text-[#4B5563]">
              Kanato Engineering Resources Nigeria Limited was incorporated on
              the 23rd of July 1991 as a distinct engineering company with
              reference for Electrical, Mechanical, and Civil services, with
              registration number 666713.
            </p>
            <p className="mb-4 font-['Inter',sans-serif] leading-relaxed text-[#4B5563]">
              As a wholly indigenous engineering company, Kanato engages in
              Electrical & Mechanical Installation, Sales, Supply, Construction,
              and Service/Maintenance. Our dynamic, resourceful, and experienced
              professionals have consistently translated designs into affordable
              reality - turning the dreams and visions of our clients into
              tangible results.
            </p>
            <p className="mb-4 font-['Inter',sans-serif] leading-relaxed text-[#4B5563]">
              Our years of professionalism and integrity have made us distinct
              among our contemporaries. We do not only provide safety
              installations but ensure aesthetic values are upheld. We have
              covered nearly all states in Nigeria and continue to expand our
              reach.
            </p>
            <p className="font-['Inter',sans-serif] leading-relaxed text-[#4B5563]">
              The team comprises accomplished professionals who came together to
              uphold integrity and professionalism. We maintain strong
              relationships with construction companies, financiers, suppliers,
              and distributors of electrical materials - all managed to the
              benefit of our clients and the environment.
            </p>
          </div>
          <div className="relative">
            <div className="h-[460px] overflow-hidden rounded-lg shadow-2xl">
              <img
                src={CIVIL_IMG}
                alt="Kanato Engineering Works"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden max-w-[200px] rounded-lg bg-[#3B52A5] p-6 text-white shadow-xl md:block">
              <p className="font-['Montserrat',sans-serif] text-3xl font-extrabold">
                33+
              </p>
              <p className="mt-1 text-xs text-white/70">
                Years of Engineering Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
