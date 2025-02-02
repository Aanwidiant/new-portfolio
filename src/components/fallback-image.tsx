import BrokenImage from "@/components/icons/broken-image";

export default function FallbackImage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-dark-etd/25 dark:bg-light-etd/25 rounded-lg gap-y-2">
      <BrokenImage className="w-24 h-24 fill-muted group-hover:scale-110" />
      <p className="text-dark-etd px-2">Maaf gambar rusak, mohon hubungi developer.</p>
    </div>
  );
}
