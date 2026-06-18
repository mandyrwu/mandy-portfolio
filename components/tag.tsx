interface TagProps {
  children: React.ReactNode;
  bg?: string;
  textColor?: string;
  fontWeight?: number;
}

export default function Tag({
  children,
  bg = "var(--c-border)",
  textColor = "var(--c-text-muted)",
  fontWeight = 300,
}: TagProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 6px",
        borderRadius: "var(--r-tag)",
        backgroundColor: bg,
        color: textColor,
        fontSize: "14px",
        fontWeight,
        lineHeight: "16px",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}
