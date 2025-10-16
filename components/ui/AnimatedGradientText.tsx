import clsx from "clsx";

const gradientStyle =
  "text-transparent bg-clip-text text-3xl bg-[length:200%_auto] animate-[animation_gradient_3s_ease-in-out_infinite]";

export function AnimatedGradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const combinedclasses = clsx(gradientStyle, className);
  return <span className={combinedclasses}>{children}</span>;
}
