"use client"
import { useState } from "react";
import Button from "@/components/button";
import Whatsapp from "@/components/icons/whatsapp"
import Instagram from "@/components/icons/instagram"
import Twitter from "@/components/icons/twitter"
import Facebook from "@/components/icons/facebook"
import Link from "@/components/icons/link"

interface ShareButtonsProps {
  shareUrl: string;
  shareText: string;
}

export default function ShareButtons({ shareUrl, shareText }: ShareButtonsProps) {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }).catch(() => {
      setCopySuccess(false);
    });
  };

  return (
    <>
      <p className="lg:text-lg font-medium">Share on:</p>
      <div className="w-full flex flex-wrap items-center gap-3">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button><Whatsapp
            className="icon-fill w-6 h-6" /></Button>
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button><Facebook
            className="icon-fill w-6 h-6" /></Button>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button><Twitter
            className="icon-fill w-6 h-6" /></Button>
        </a>
        <a
          href={`https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button><Instagram
            className="icon-fill w-6 h-6" /></Button>
        </a>
        <Button onClick={handleCopyClick}><Link
          className="icon-fill w-6 h-6" />{copySuccess ? "URL Copied!" : ""}</Button>
      </div>
    </>

  );
}