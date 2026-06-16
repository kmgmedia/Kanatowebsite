import { Menu } from "lucide-react";
import { BrandLogo } from "../../components/BrandLogo";
import { SectionHeader, Divider } from "./helpers";

const navSpecs = [
  {
    title: "Top Bar",
    specs: [
      "BG: #FFA323",
      "Text: white - text-xs - Inter",
      "Height: py-1.5",
      "Content: RC - phone",
    ],
  },
  {
    title: "Main Nav",
    specs: [
      "BG: rgba(59,82,165,0.97)",
      "Position: fixed top-0 z-50",
      "Links: Inter 500 text-sm",
      "Active: #48BC65 + amber underline",
    ],
  },
  {
    title: "Mobile Menu",
    specs: [
      "BG: #3B52A5",
      "Active bg: rgba(47,168,79,0.1)",
      "Active text: #2FA84F",
      "Closes on route",
    ],
  },
];

export function NavigationShowcase() {
  return (
    <>
      <SectionHeader
        label="Components"
        title="Navigation"
        desc="Navbar structure, states, mobile menu, and footer CTA section specifications."
      />

      <div className="mb-6 overflow-hidden rounded-xl border border-[#E5E7EB]">
        <p className="border-b border-[#E5E7EB] bg-[#F5F7FA] px-4 py-3 font-['Inter',sans-serif] text-[0.65rem] uppercase tracking-[0.05em] text-[#9CA3AF]">
          Navbar Preview
        </p>
        <div className="bg-[rgba(59,82,165,0.97)]">
          <div className="bg-[#FFA323] px-4 py-1.5">
            <div className="mx-auto flex max-w-4xl items-center justify-between">
              <span className="font-['Inter',sans-serif] text-xs text-white">
                RC 666713 | Est. 23rd July 1991
              </span>
              <span className="flex items-center gap-2 font-['Inter',sans-serif] text-xs text-white">
                08033201366
              </span>
            </div>
          </div>
          <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
            <BrandLogo onDark imageClassName="h-10" />
            <div className="hidden items-center gap-1 lg:flex">
              {["Home", "About Us", "Services"].map((link, i) => (
                <span
                  key={link}
                  className={`rounded border-b-2 px-4 py-2 font-['Inter',sans-serif] text-sm font-medium ${
                    i === 1
                      ? "border-[#FFA323] text-[#48BC65]"
                      : "border-transparent text-white/90"
                  }`}
                >
                  {link}
                </span>
              ))}
              <span className="ml-4 rounded bg-[#2FA84F] px-5 py-2.5 font-['Inter',sans-serif] text-sm font-semibold text-white">
                Request
              </span>
            </div>
            <button className="p-2 text-white lg:hidden" aria-label="Open menu preview">
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        {navSpecs.map((col) => (
          <div key={col.title} className="rounded-xl border border-[#E5E7EB] bg-white p-5">
            <h4 className="mb-2.5 font-['Montserrat',sans-serif] text-[0.85rem] font-bold text-[#3B52A5]">
              {col.title}
            </h4>
            <div className="flex flex-col gap-1.5">
              {col.specs.map((spec) => (
                <div key={spec} className="flex items-start gap-2">
                  <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#2FA84F]" />
                  <span className="font-['Inter',sans-serif] text-[0.7rem] text-[#6B7280]">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Divider />
    </>
  );
}
