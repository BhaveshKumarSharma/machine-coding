import Link from "next/link";
import { registry } from "@/lib/registry";
import GradientCard from "@/components/Gradientcard";

export default async function Home() {
  // Load all metas from the demo modules
  const entries = await Promise.all(
    Object.entries(registry).map(async ([slug, loader]) => {
      const mod = await loader();
      return { slug, meta: mod.meta };
      // return { slug, meta: mod.meta as { title: string; description?: string } };
    })
  );

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map(({ slug, meta }) => {
        console.log("Meta", meta);
        return (
          <Link key={slug} href={`/dynamic-components/${slug}`}>
            <GradientCard gradient={meta.gradient}>
              {meta.title}
              {meta.description ? (
                <p className="text-sm text-muted-foreground mt-1">
                  {meta.description}
                </p>
              ) : null}
              <div className="mt-4 text-sm text-primary transition opacity-0 hover:opacity-100">
                View →
              </div>
            </GradientCard>
          </Link>
        );
      })}
    </div>
  );
}
