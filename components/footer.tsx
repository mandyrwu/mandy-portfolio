export default function Footer() {
  return (
    <footer
      className="flex items-center justify-center flex-wrap"
      style={{
        gap: "24px",
        padding: "80px 24px",
      }}
    >
      {/* "Thanks for stopping by" — black, no underline */}
      <span
        style={{
          fontSize: "var(--fs-body)",
          fontWeight: 300,
          lineHeight: "var(--lh-body)",
          color: "#000000",
          whiteSpace: "nowrap",
        }}
      >
        Thanks for stopping by. Let&apos;s be friends!
      </span>

      {/* Links — secondary gray, dotted underline */}
      {[
        { label: "Email", href: "mailto:mandyrwu1@gmail.com" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/mandyrwu/", external: true },
        { label: "Resume", href: "/resume" },
      ].map(({ label, href, external }) => (
        <a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          style={{
            fontSize: "var(--fs-body)",
            fontWeight: 300,
            lineHeight: "var(--lh-body)",
            color: "var(--c-text-secondary)",
            textDecoration: "none",
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "4px 3px",
            backgroundPosition: "0 100%",
            backgroundRepeat: "repeat-x",
            paddingBottom: "3px",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </a>
      ))}
    </footer>
  );
}
