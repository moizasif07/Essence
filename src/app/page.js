export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#4B2A1A] text-center relative px-4">
      {/* Logo */}
      <img
        src="/logo.png"
        alt="Brand Logo"
        className="w-72 h-auto mb-14"
      />

      {/* Title */}
      <h1 className="text-6xl md:text-8xl font-bold text-yellow-400 mb-6 leading-[1.1]">
        Coming Soon
      </h1>

      {/* Tagline */}
      <p className="text-yellow-400 mt-4 max-w-lg text-xl leading-relaxed">
        Natural Hair Oil for Healthy Growth & Shine
      </p>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923104115955"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 transition"
      >
        <img src="/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
        Contact Us
      </a>
    </main>
  );
}
