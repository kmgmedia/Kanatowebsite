import { Clock, MessageCircle, ArrowRight } from "lucide-react";
import { officeHours, whatsappConfig } from "./data";

export function MapAndInfo() {
  return (
    <div className="space-y-6">
      {/* Map */}
      <div
        className="rounded-xl overflow-hidden shadow-sm"
        style={{ height: "300px", border: "1px solid #E5E7EB" }}
      >
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
      <div
        className="bg-white rounded-xl p-6 shadow-sm"
        style={{ border: "1px solid #E5E7EB" }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Clock size={18} style={{ color: "#3B52A5" }} />
          <h3
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              color: "#3B52A5",
              fontSize: "0.9rem",
            }}
          >
            Office Hours
          </h3>
        </div>
        <div className="space-y-2">
          {officeHours.map((h, i) => (
            <div key={i} className="flex items-center justify-between text-sm">
              <span
                style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}
              >
                {h.day}
              </span>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: h.day === "Sunday" ? "#EF4444" : "#3B52A5",
                  fontWeight: 600,
                }}
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
        className="flex items-center gap-4 p-5 rounded-xl transition-all hover:opacity-90"
        style={{ backgroundColor: "#25D366" }}
      >
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <MessageCircle size={22} className="text-white" />
        </div>
        <div>
          <p
            className="text-white font-semibold text-sm"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {whatsappConfig.title}
          </p>
          <p
            className="text-white/80 text-xs"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {whatsappConfig.subtitle}
          </p>
        </div>
        <ArrowRight size={18} className="text-white ml-auto" />
      </a>
    </div>
  );
}


