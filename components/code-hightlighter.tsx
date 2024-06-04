"use client";

import { RefObject, useEffect, useRef } from "react";

import { highlight } from "sugar-high";

type CodeHighlighterProps = {
  code: string;
};

const CodeHighlighter = ({ code }: CodeHighlighterProps) => {
  // Explicitly type the ref as a RefObject<HTMLElement>
  const codeRef: RefObject<HTMLElement> = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      const highlightedCode = highlight(code);
      codeRef.current.innerHTML = highlightedCode;
    }
  }, [code]);

  return (
    <pre>
      <code ref={codeRef}></code>
    </pre>
  );
};

export default CodeHighlighter;
