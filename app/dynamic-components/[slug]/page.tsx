import PreviewShell from "@/components/preview/PreviewShell";
import { readFilesContent } from "@/lib/read-source";
import { registry } from "@/lib/registry";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return Object.keys(registry).map((slug) => ({ slug }));
}

export default async function DynamiccomponentPage({
  params: { slug },
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const loader = (registry as any)[slug] as (() => Promise<any>) | undefined;
  if (!loader) return notFound();

  const mod = await loader();
  const Demo = mod.default as React.ComponentType;
  const meta = mod.meta as {
    slug: string;
    title: string;
    description?: string;
    files: string[];
  };

  const sources = await readFilesContent(meta.files);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold tracking-tight">{meta.title}</h1>
      {meta.description ? (
        <p className="text-muted-foreground mt-1">{meta.description}</p>
      ) : null}
      <div className="mt-6">
        <PreviewShell demo={<Demo />} sources={sources} />
      </div>
    </div>
  );
}
