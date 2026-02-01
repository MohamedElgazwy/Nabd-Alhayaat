import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Services() {
  const phone = "201024193594";
  const message =
    "مرحبًا، أريد طلب خدمة تمريض منزلي.\nالاسم:\nالمنطقة:\nنوع الحالة:";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 text-blue-700">
          خدمات التمريض المنزلي
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
            <Image
              src="/images/photo1.jpg"
              width={300}
              height={200}
              alt="تمريض منزلي"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />

            <h3 className="font-bold text-xl mb-3 text-blue-700">
              تمريض منزلي عام
            </h3>

            <p className="text-gray-600 mb-6">
              متابعة المرضى وإعطاء الأدوية والرعاية اليومية داخل المنزل.
            </p>

            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
  <a href={whatsappLink} target="_blank">
    اطلب ممرض الآن
  </a>
</Button>

          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
            <Image
              src="/images/photo2.jpg"
              width={300}
              height={200}
              alt="تمريض بعد العمليات"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />

            <h3 className="font-bold text-xl mb-3 text-blue-700">
              تمريض بعد العمليات
            </h3>

            <p className="text-gray-600 mb-6">
              تغيير الجروح ومتابعة الحالة الصحية بعد العمليات الجراحية.
            </p>

            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
  <a href={whatsappLink} target="_blank">
    اطلب ممرض الآن
  </a>
</Button>

          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
            <Image
              src="/images/photo3.jpg"
              width={300}
              height={200}
              alt="تمريض 24 ساعة"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />

            <h3 className="font-bold text-xl mb-3 text-blue-700">
              تمريض 24 ساعة
            </h3>

            <p className="text-gray-600 mb-6">
              إقامة ممرض في المنزل لمتابعة الحالات الخاصة على مدار اليوم.
            </p>

            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
  <a href={whatsappLink} target="_blank">
    اطلب ممرض الآن
  </a>
</Button>

          </div>
        </div>
      </div>
    </main>
  );
}
