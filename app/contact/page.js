import { Button } from "@/components/ui/button";

export const metadata = {
  title: "تواصل معنا",
};

export default function Contact() {
  const phone = "201234567890";
  const message =
    "مرحبًا، أريد الاستفسار عن خدمات التمريض.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <main className="min-h-screen py-20 px-6 bg-slate-50
">
      <div className="max-w-3xl mx-auto text-center">

        <h1 className="text-4xl font-bold mb-10 text-blue-700">
          تواصل معنا
        </h1>

        <p className="text-gray-700 text-lg mb-8">
          يمكنك التواصل معنا مباشرة عبر واتساب للحصول على خدمة سريعة.
        </p>

        <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
  <a href={whatsappLink} target="_blank">
    اطلب ممرض الآن
  </a>
</Button>


        <div className="mt-10 text-gray-600">
          <p>رقم الهاتف: 201234567890</p>
          <p>متاحون 24/7</p>
        </div>

      </div>
    </main>
  );
}
