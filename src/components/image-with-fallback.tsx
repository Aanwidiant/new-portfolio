"use client";
import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

const fallbackImage = "/fallback-img.png";

interface ImageWithFallbackProps extends ImageProps {
  fallback?: string;
}

const ImageWithFallback = ({
  fallback = fallbackImage,
  alt,
  src,
  ...props
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  return (
    <Image
      alt={alt}
      src={error ? fallback : src}
      onError={() => setError(true)}
      {...props}
    />
  );
};

export default ImageWithFallback;
