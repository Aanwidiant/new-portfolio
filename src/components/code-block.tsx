"use client";

import { useState, useEffect, useRef } from "react";
import Copy from "@/components/icons/copy";
import CopySuccess from "@/components/icons/copy-success";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-bash";

interface CodeBlockProps {
  code: string;
  language: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [isMounted, setIsMounted] = useState(false);
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [isMounted, code, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full">
      {isMounted ? (
        <pre>
          <code ref={codeRef} className={`language-${language}`}>
            {code}
          </code>
        </pre>
      ) : (
        <div className="p-4 animate-pulse bg-light/20 dark:bg-dark/20 h-32 rounded-md"></div>
      )}
      <button onClick={handleCopy} className="absolute top-2 right-2 p-2">
        {copied ? <CopySuccess className="icon-fill w-7 h-7" /> : <Copy className="icon-fill w-6 h-6" />}
      </button>
    </div>
  );
}
