import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  const phone = "201024193594";
  const message = "مرحبًا، أريد طلب ممرض منزلي.\nالاسم:\nالمنطقة:\nنوع الحالة:";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="py-20 bg-blue-50">
        <div className="grid md:grid-cols-2 items-center px-6 gap-10 max-w-6xl mx-auto">
          {/* TEXT */}
          <div>
            <h1 className="text-4xl font-bold mb-6 text-blue-700">
              تمريض منزلي متخصص يصل إليك بسرعة
            </h1>

            <p className="mb-8 text-gray-700 text-lg">
              نوفر ممرضين محترفين لرعاية مرضاك في المنزل بأعلى جودة وراحة.
            </p>

            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <a href={whatsappLink} target="_blank">
                اطلب ممرض الآن
              </a>
            </Button>
          </div>

          {/* IMAGE */}
          <Image
            src="/images/photo1.jpg"
            width={500}
            height={400}
            alt="تمريض منزلي"
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>
      </section>

      {/* SERVICES CARDS */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">
          خدمات التمريض
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div
            className="p-6 shadow-md hover:shadow-xl transition duration-300
 rounded-xl text-center bg-white hover:scale-105"
          >
            <Image
              src="/images/photo2.jpg"
              width={300}
              height={200}
              alt="تمريض منزلي عام"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />

            <h3 className="font-bold text-xl mb-4 text-blue-700">
              تمريض منزلي عام
            </h3>

            <p className="text-gray-600 mb-6">
              متابعة المرضى وإعطاء الأدوية والرعاية اليومية.
            </p>

            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <a href={whatsappLink} target="_blank">
                اطلب ممرض الآن
              </a>
            </Button>
          </div>

          {/* Card 2 */}
          <div
            className="p-6 shadow-md hover:shadow-xl transition duration-300
 rounded-xl text-center bg-white hover:scale-105"
          >
            <Image
              src="/images/photo3.jpg"
              width={300}
              height={200}
              alt="تمريض بعد العمليات"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />

            <h3 className="font-bold text-xl mb-4 text-blue-700">
              تمريض بعد العمليات
            </h3>

            <p className="text-gray-600 mb-6">
              تغيير جروح ومتابعة الحالة الصحية بعد العمليات.
            </p>

            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
  <a href={whatsappLink} target="_blank">
    اطلب ممرض الآن
  </a>
</Button>

          </div>

          {/* Card 3 */}
          <div className="p-6 shadow-md hover:shadow-xl transition duration-300 rounded-xl text-center bg-white hover:scale-105 ">
            <Image
              src="/images/photo1.jpg"
              width={300}
              height={200}
              alt="تمريض 24 ساعة"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />

            <h3 className="font-bold text-xl mb-4 text-blue-700">
              تمريض 24 ساعة
            </h3>

            <p className="text-gray-600 mb-6">
              إقامة ممرض بالمنزل للحالات الخاصة والمتابعة المستمرة.
            </p>

            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
  <a href={whatsappLink} target="_blank">
    اطلب ممرض الآن
  </a>
</Button>

          </div>
        </div>
      </section>
      {/* WHY CHOOSE US */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-blue-700">
            لماذا تختار خدماتنا؟
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Box 1 */}
            <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
              <h3 className="font-bold text-lg mb-3">ممرضين معتمدين</h3>
              <p className="text-gray-600">
                فريق تمريض محترف وذو خبرة عالية في الرعاية المنزلية.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
              <h3 className="font-bold text-lg mb-3">وصول سريع</h3>
              <p className="text-gray-600">
                نوصل إليك في أسرع وقت ممكن حسب موقعك.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
              <h3 className="font-bold text-lg mb-3">متابعة 24/7</h3>
              <p className="text-gray-600">
                خدمة عملاء متوفرة على مدار الساعة للرد على استفساراتك.
              </p>
            </div>

            {/* Box 4 */}
            <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
              <h3 className="font-bold text-lg mb-3">أسعار مناسبة</h3>
              <p className="text-gray-600">أفضل جودة خدمة بأفضل سعر ممكن.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
