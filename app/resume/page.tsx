import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Resume — Mandy Wu",
  description: "Mandy Wu's resume",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--c-bg)" }}>
      <div style={{ height: "160px" }} />

      <div
        className="mx-auto px-6"
        style={{ maxWidth: "1060px" }}
      >
        <div
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid var(--c-border)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          }}
        >
          <iframe
            src="/images/about/resume.pdf"
            style={{
              width: "100%",
              height: "calc(100vh - 260px)",
              border: "none",
              display: "block",
              minHeight: "600px",
            }}
            title="Mandy Wu Resume"
          />
        </div>
      </div>

      <div style={{ height: "80px" }} />
      <Footer />
    </main>
  );
}
