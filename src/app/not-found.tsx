"use client"
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <main className="flex pt-28 pb-16 h-fit lg:min-h-screen items-center ">
      <div className="container">
        <div className="flex flex-wrap gap-y-12">
          <div className="relative flex flex-col gap-y-4 w-full px-4 lg:w-1/2 h-[32rem]">
            <Image
              src='/img/404.svg'
              alt='not-found-img'
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col justify-center w-full px-4 lg:w-1/2 space-y-6">
            <h1 className="text-5xl font-semibold">Opps! Page not found</h1>
            <p className="text-lg text-dark-etd dark:text-light-etd">Ada yang tidak beres! Sepertinya, linknya rusak atau halaman telah dihapus.</p>
            <div className="flex gap-4">
              <Button href="/">Home</Button>
              <Button onClick={handleGoBack}>Kembali</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
