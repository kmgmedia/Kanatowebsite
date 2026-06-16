import { Eye, Target } from "lucide-react";

export function VisionMission() {
  return (
    <section className="kanato-section-soft py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-14 text-center">
          <p className="kanato-eyebrow mb-3 text-xs uppercase tracking-widest">
            Our Purpose
          </p>
          <h2 className="kanato-compact-section-title kanato-secondary-text font-extrabold">
            Vision & Mission
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="kanato-card rounded-lg border p-8 shadow-sm">
            <div className="kanato-icon-tile-primary mb-5 flex h-14 w-14 items-center justify-center rounded-lg">
              <Eye size={26} className="kanato-icon-primary" />
            </div>
            <h3 className="kanato-secondary-text mb-3 text-[1.15rem] font-bold">
              Our Vision
            </h3>
            <p className="kanato-charcoal-text leading-relaxed">
              To provide excellent service of Electrical, Mechanical, and Civil
              Installation and Servicing through a professional team - becoming
              a trusted engineering partner recognized for delivering efficient
              and reliable solutions across Nigeria and West Africa.
            </p>
          </div>
          <div className="rounded-lg border border-secondary bg-secondary p-8 shadow-sm">
            <div className="kanato-primary-badge mb-5 flex h-14 w-14 items-center justify-center rounded-lg">
              <Target size={26} className="kanato-icon-primary" />
            </div>
            <h3 className="mb-3 text-[1.15rem] font-bold text-white">
              Our Mission
            </h3>
            <p className="leading-relaxed text-white/75">
              To uphold integrity and professionalism in the daily discharge of
              our products and services - to bring the dreams of our clients to
              reality through quality workmanship, innovation, and unwavering
              commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
