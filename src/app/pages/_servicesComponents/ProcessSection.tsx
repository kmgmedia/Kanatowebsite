import { processSteps } from "./data";

export function ProcessSection() {
  return (
    <section className="bg-primary py-14">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.step} className="flex items-start gap-4">
              <span className="shrink-0 text-4xl font-black leading-none text-white/30">
                {step.step}
              </span>
              <div>
                <h3 className="mb-1 text-sm font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/80">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
