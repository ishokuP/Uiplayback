import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UiPlayback",
  description: "Window-like layout with menu bar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#ffeeea] text-[#1a1a1a] m-0 p-0 font-sans overflow-hidden h-screen">
        {/* Fixed Menu Bar */}
        <header
          className="fixed top-0 left-0 w-full h-[32px] px-4 text-sm flex items-center justify-between text-white z-10"
          style={{ backgroundColor: "#6a5acd" }}
        >
          <div className="flex gap-4">
            {["File", "Window", "Browse", "Help", "About"].map((item) => (
              <button
                key={item}
                className="hover:bg-white/20 px-2 py-0.5 rounded transition select-none"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="text-xs opacity-75 select-none">UiSystems v1.0</div>
        </header>

        {/* Main Content fills below header */}
        <main
          className="absolute top-[32px] left-0 w-full"
          style={{ height: "calc(100vh - 32px)" }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
