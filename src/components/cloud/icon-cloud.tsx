import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "express",
  "prisma",
  "postgresql",
  "firebase",
  "vercel",
  "git",
  "github",
  "gitlab",
  "figma",
  "nextjs",
  "nodejs",
  "tailwindcss",
  "sanitycms",
  "graphql",
  "re",
];

export function IconCloudComponent() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg md:px-20 pb-20 pt-8 mx-auto">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
