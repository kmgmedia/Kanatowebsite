// Shared helper components for Design System page

type ColorShade = {
  shade: string;
  hex: string;
  rgb: string;
  base?: boolean;
};

export function isLight(hex: string) {
  const color = hex.replace("#", "");
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return yiq >= 128;
}

export function ColorSwatch({ shade, hex, rgb, base }: { shade: string; hex: string; rgb: string; base?: boolean }) {
  const isDark = !isLight(hex);
  return (
    <div className="text-center">
      <div className="h-12 rounded mb-2 border" style={{ backgroundColor: hex, borderColor: isDark ? hex : "#E5E7EB" }} />
      <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: base ? 700 : 600, fontSize: "0.65rem", color: "#374151" }}>
        {shade}
      </p>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#9CA3AF" }}>{hex}</p>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.55rem", color: "#C4B5FD" }}>{rgb}</p>
    </div>
  );
}

export function PaletteColumn({ title, colors }: { title: string; colors: ColorShade[] }) {
  return (
    <div>
      <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.75rem", color: "#3B52A5", marginBottom: "12px" }}>
        {title}
      </h4>
      <div className="flex flex-col gap-3">
        {colors.map((color) => (
          <ColorSwatch key={color.shade} {...color} />
        ))}
      </div>
    </div>
  );
}

export function SectionHeader({ label, title, desc }: { label: string; title: string; desc?: string }) {
  return (
    <div className="mb-12">
      <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "#2FA84F", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "8px" }}>
        {label}
      </p>
      <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "#3B52A5", marginBottom: "8px" }}>
        {title}
      </h2>
      {desc && <p style={{ fontFamily: "Inter, sans-serif", color: "#6B7280", fontSize: "0.95rem" }}>{desc}</p>}
      <div className="w-12 h-1 rounded mt-4" style={{ backgroundColor: "#2FA84F" }} />
    </div>
  );
}

export function Divider() {
  return <div className="my-12 border-t" style={{ borderColor: "#E5E7EB" }} />;
}


