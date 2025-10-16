"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import CodeBlock from "./codeBlock";
import { useState } from "react";

type Source = { path: string; code: string };

export default function PreviewShell({
  demo,
  sources,
}: {
  demo: React.ReactNode;
  sources: Source[];
}) {
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  const copyAll = async () => {
    await navigator.clipboard.writeText(
      sources.map((s) => `// ${s.path}\n${s.code}`).join("\n\n")
    );
    setCopiedPath("ALL");
    setTimeout(() => setCopiedPath(null), 1200);
  };

  return (
    <Card className="rounded-2xl shadow-sm">
      <Tabs defaultValue="preview" className="w-full">
        <div className="flex items-center justify-between border-b px-4 py-2">
          <TabsList className="flex gap-4">
            <TabsTrigger
              value="preview"
              className="bg-gray-600 data-[state=active]:bg-gradient-to-tr data-[state=active]:from-pink-500 data-[state=active]:via-red-500 data-[state=active]:to-yellow-500 rounded-full"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="bg-gray-600 data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-600 data-[state=active]:to-cyan-400 rounded-full"
            >
              Code
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={copyAll}>
              <Copy className="mr-2 h-4 w-4" />
              {copiedPath === "ALL" ? "Copied!" : "Copy all"}
            </Button>
          </div>
        </div>

        <TabsContent value="preview" className="p-4">
          <div className="rounded-xl border bg-background p-6">{demo}</div>
        </TabsContent>

        <TabsContent value="code" className="p-0">
          <div>
            <div className="space-y-8 p-4 ">
              {sources.map((s) => (
                <div
                  key={s.path}
                  className="rounded-xl border  max-h-[500px] overflow-auto no-scrollbar"
                >
                  <div className="flex items-center justify-between border-b px-3 py-2 sticky top-0 bg-slate-800">
                    <div className="text-sm font-medium">{s.path}</div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={async () => {
                        await navigator.clipboard.writeText(s.code);
                        setCopiedPath(s.path);
                        setTimeout(() => setCopiedPath(null), 1200);
                      }}
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      {copiedPath === s.path ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                  <CodeBlock
                    code={s.code}
                    lang={
                      s.path.endsWith(".ts") || s.path.endsWith(".tsx")
                        ? "tsx"
                        : "text"
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
