import Link from "next/link";

function renderInline(text: string, keyPrefix: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const href = link[2];
      const label = link[1];
      if (href.startsWith("/")) {
        return (
          <Link key={`${keyPrefix}-${i}`} href={href} className="font-semibold text-accent-strong underline">
            {label}
          </Link>
        );
      }
      return (
        <a key={`${keyPrefix}-${i}`} href={href} className="font-semibold text-accent-strong underline">
          {label}
        </a>
      );
    }
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={`${keyPrefix}-${i}`}>{bold[1]}</strong>;
    return <span key={`${keyPrefix}-${i}`}>{part}</span>;
  });
}

export function MarkdownBody({ text }: { text: string }) {
  const blocks = text.split(/\n\n+/).map((b) => b.trim()).filter(Boolean);

  return (
    <div className="flex flex-col gap-5 text-[16px] leading-relaxed text-text-2 [&_h2]:text-[20px] [&_h2]:font-bold [&_h2]:tracking-[-0.01em] [&_h2]:text-text">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return <h2 key={i}>{block.replace(/^##\s+/, "")}</h2>;
        }
        if (block.startsWith("- ")) {
          const items = block.split("\n").filter((line) => line.startsWith("- "));
          return (
            <ul key={i} className="flex list-disc flex-col gap-2 pl-5">
              {items.map((item, j) => (
                <li key={j}>{renderInline(item.replace(/^- /, ""), `${i}-${j}`)}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{renderInline(block.replace(/\n/g, " "), `p-${i}`)}</p>;
      })}
    </div>
  );
}
