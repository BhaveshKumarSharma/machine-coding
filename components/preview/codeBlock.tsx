"use client";

import hljs from "highlight.js/lib/common";
import typescript from "highlight.js/lib/languages/typescript";
import { useEffect, useRef } from "react";

hljs.registerLanguage("tsx", typescript);

export default function CodeBlock({
  code,
  lang = "tsx",
}: {
  code: string;
  lang?: string;
}) {
  // Keep it super light – you can swap this for prism-react-renderer if you want.

  const codeRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);
  return (
    <pre className=" p-4 text-sm leading-relaxed ">
      <code className={`language-${lang}`} ref={codeRef}>
        {code}
      </code>
    </pre>
  );
}
