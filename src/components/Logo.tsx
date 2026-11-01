import Image from "next/image";

export function Logo({
  className = "h-8 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/depesch-logo.png"
      alt="Depesch"
      width={976}
      height={121}
      priority={priority}
      className={className}
    />
  );
}
