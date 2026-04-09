import { CheckCircle } from "lucide-react";
import { contactChannels, whyChoosePoints } from "./data";

export function SidebarInfo() {
  return (
    <div className="space-y-6">
      {/* Quick contact */}
      <div
        className="bg-white rounded-xl p-6 shadow-sm"
        style={{ border: "1px solid #E5E7EB" }}
      >
        <h3
          className="mb-4"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            color: "#123A6F",
            fontSize: "0.95rem",
          }}
        >
          Prefer to Talk Directly?
        </h3>
        <div className="space-y-4">
          {contactChannels.map((channel) => (
            <a
              key={channel.title}
              href={channel.href}
              {...(channel.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-gray-50"
              style={{ border: "1px solid #E5E7EB" }}
            >
              <div
                className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                style={{ backgroundColor: channel.bgColor }}
              >
                <channel.icon size={16} style={{ color: channel.iconColor }} />
              </div>
              <div>
                <p
                  className="text-xs font-semibold"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#374151",
                  }}
                >
                  {channel.title}
                </p>
                <p
                  className="text-xs"
                  style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
                >
                  {channel.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Why choose */}
      <div className="rounded-xl p-6" style={{ backgroundColor: "#123A6F" }}>
        <h3
          className="text-white mb-4"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "0.95rem",
            color: "#fff",
          }}
        >
          Why Request From Kanato?
        </h3>
        <div className="space-y-3">
          {whyChoosePoints.map((point, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle
                size={14}
                className="shrink-0 mt-0.5"
                style={{ color: "#F26B21" }}
              />
              <span
                className="text-xs leading-relaxed"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Response time */}
      <div
        className="rounded-xl p-5 text-center"
        style={{ backgroundColor: "#F26B21" }}
      >
        <p
          className="text-white text-3xl font-black mb-1"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          24hrs
        </p>
        <p
          className="text-white/80 text-sm"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Average quote response time
        </p>
      </div>
    </div>
  );
}
