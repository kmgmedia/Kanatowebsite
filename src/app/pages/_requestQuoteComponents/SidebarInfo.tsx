import { CheckCircle } from "lucide-react";
import { contactChannels, whyChoosePoints } from "./data";

export function SidebarInfo() {
  return (
    <div className="space-y-6">
      {/* Quick contact */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="mb-4 font-heading font-bold text-secondary text-[0.95rem]">
          Prefer to Talk Directly?
        </h3>
        <div className="space-y-4">
          {contactChannels.map((channel) => (
            <a
              key={channel.title}
              href={channel.href}
              {...(channel.external && { target: "_blank", rel: "noopener noreferrer" })}
              className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 transition-all hover:bg-gray-50"
            >
              <div className={`w-10 h-10 rounded flex items-center justify-center shrink-0 ${channel.bgColor}`}>
                <channel.icon size={16} className={channel.iconColor} />
              </div>
              <div>
                <p className="text-xs font-semibold font-heading text-gray-700">
                  {channel.title}
                </p>
                <p className="text-xs text-muted">{channel.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Why choose */}
      <div className="rounded-xl p-6 bg-secondary">
        <h3 className="text-white mb-4 font-heading font-bold text-[0.95rem]">
          Why Request From Kanato?
        </h3>
        <div className="space-y-3">
          {whyChoosePoints.map((point, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle size={14} className="shrink-0 mt-0.5 text-primary" />
              <span className="text-xs leading-relaxed text-white/80">{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Response time */}
      <div className="rounded-xl p-5 text-center bg-primary">
        <p className="text-white text-3xl font-black mb-1 font-heading">24hrs</p>
        <p className="text-white/80 text-sm">Average quote response time</p>
      </div>
    </div>
  );
}
