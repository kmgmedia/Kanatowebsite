import { Clock, MessageCircle, ArrowRight } from "lucide-react";
import { officeHours, whatsappConfig } from "./data";

export function MapAndInfo() {
  return (
    <div className="space-y-6">
      {/* Map */}
      <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200" style={{ height: "300px" }}>
        <iframe
          title="Kanato Engineering Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.648!2d3.2890!3d6.6012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9216dffe2d71%3A0x9e5fef6b7b1e9c45!2sAlimosho%2C%20Lagos!5e0!3m2!1sen!2sng!4v1680000000000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Business Hours */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <Clock size={18} className="text-secondary" />
          <h3 className="font-heading font-bold text-secondary text-[0.9rem]">
            Office Hours
          </h3>
        </div>
        <div className="space-y-2">
          {officeHours.map((h, i) => (
            <div key={i} className="flex items-center justify-between text-sm">
              <span className="text-gray-700">{h.day}</span>
              <span
                className={`font-semibold ${
                  h.day === "Sunday" ? "text-error" : "text-secondary"
                }`}
              >
                {h.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp CTA */}
      <a
        href={whatsappConfig.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-5 rounded-xl bg-whatsapp transition-all hover:opacity-90"
      >
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <MessageCircle size={22} className="text-white" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm font-heading">
            {whatsappConfig.title}
          </p>
          <p className="text-white/80 text-xs">{whatsappConfig.subtitle}</p>
        </div>
        <ArrowRight size={18} className="text-white ml-auto" />
      </a>
    </div>
  );
}
