import { contactCards } from "./data";

export function ContactInfoCards() {
  return (
    <section style={{ backgroundColor: "#123A6F" }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactCards.map((card, i) => (
            <div
              key={i}
              className="rounded-xl p-5"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="w-10 h-10 rounded flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(242,107,33,0.2)" }}
              >
                <card.icon size={18} style={{ color: "#F26B21" }} />
              </div>
              <h3
                className="text-white mb-3"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#fff" }}
              >
                {card.title}
              </h3>
              <div className="space-y-0.5">
                {card.lines.map((line, j) =>
                  card.href ? (
                    <a
                      key={j}
                      href={card.href}
                      className="block text-sm transition-colors hover:text-orange-300"
                      style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.7)" }}
                    >
                      {line}
                    </a>
                  ) : (
                    <p
                      key={j}
                      className="text-sm"
                      style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.7)" }}
                    >
                      {line}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
