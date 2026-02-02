"use client";

export default function CallButtons({ serviceName }) {
  const phone = "201024193594";

  const whatsappMessage = `مرحبًا، كيف يمكنني حجز ${serviceName}؟`;
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      {/* Call */}
      <a
        href={`tel:${phone}`}
        className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-center font-semibold transition"
      >
        اتصال مباشر
      </a>

      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-center font-semibold transition"
      >
        تواصل عبر واتساب
      </a>
    </div>
  );
}
