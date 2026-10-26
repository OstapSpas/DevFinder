const ABOUT_TITLES = [
  "about me",
  "about",
  "who am i",
  "whoami",
  "bio",
  "introduction",
  "intro",
  "про мене",
  "o mne",
];

export async function fetchProfileReadme(login) {
  try {
    const res = await fetch(`https://api.github.com/repos/${login}/${login}/readme`, {
      headers: { Accept: "application/vnd.github.raw+json" },
    });
    if (!res.ok) return null;
    return res.text();
  } catch {
    return null;
  }
}

function cleanMarkdown(text) {
  return text
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/^\s*(---|\*\*\*|___)\s*$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function isHeading(line) {
  return /^#{1,6}\s/.test(line);
}

function headingText(line) {
  return line
    .replace(/^#+\s*/, "")
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .trim()
    .toLowerCase();
}

function findSection(lines) {
  const start = lines.findIndex(
    (line) => isHeading(line) && ABOUT_TITLES.includes(headingText(line))
  );
  if (start === -1) return null;

  const level = lines[start].match(/^#+/)[0].length;
  const rest = lines.slice(start + 1);
  const end = rest.findIndex((line) => {
    const m = line.match(/^(#+)\s/);
    return m && m[1].length <= level;
  });

  const section = cleanMarkdown((end === -1 ? rest : rest.slice(0, end)).join("\n"));
  return section || null;
}

function isNoise(line) {
  const t = line.trim();
  return (
    t === "" ||
    isHeading(t) ||
    /^!\[.*\]\(.*\)$/.test(t) ||
    /^(\[!\[.*\]\(.*\)\]\(.*\)\s*)+$/.test(t) ||
    /^<.*>$/.test(t) ||
    /^(---|\*\*\*|___)$/.test(t)
  );
}

function firstParagraphs(lines, maxParagraphs = 2, maxLength = 600) {
  const paragraphs = [];
  let current = [];

  for (const line of lines) {
    if (isNoise(line)) {
      if (current.length) {
        paragraphs.push(current.join("\n"));
        current = [];
        if (paragraphs.length >= maxParagraphs) break;
      }
      continue;
    }
    current.push(line);
  }
  if (current.length && paragraphs.length < maxParagraphs) {
    paragraphs.push(current.join("\n"));
  }

  const text = cleanMarkdown(paragraphs.join("\n\n"));
  if (!text) return null;
  return text.length > maxLength ? text.slice(0, maxLength).trimEnd() + "…" : text;
}

export function getAboutText(markdown) {
  if (!markdown) return null;
  const lines = markdown.split("\n");
  return findSection(lines) || firstParagraphs(lines);
}