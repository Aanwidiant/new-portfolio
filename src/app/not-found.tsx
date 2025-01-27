import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-8">Maaf, halaman yang Anda cari tidak ditemukan.</p>
      <Link href="/" className="px-6 py-3 bg-light-primary text-white font-semibold rounded-lg hover:bg-dark transition">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
