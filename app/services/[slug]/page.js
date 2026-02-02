import Image from "next/image";
import { notFound } from "next/navigation";
import CallButtons from "@/app/components/CallButtons";
import WhyChooseUs from "@/app/components/WhyChooseUs";

/**
 * SERVICES DATA
 * أي خدمة جديدة = Object جديد هنا
 */
const servicesData = {
  "home-nursing": {
    title: "تمريض منزلي",
    tagline: "رعاية تمريضية احترافية داخل منزلك",
    description:
      "نقدم خدمات تمريض منزلي متكاملة تشمل متابعة الحالة الصحية، إعطاء الأدوية، والرعاية اليومية داخل المنزل بواسطة طاقم تمريضي مدرب.",
    image: "/images/photo2.jpg",
    scopes: [
      "متابعة العلامات الحيوية",
      "إعطاء الأدوية في مواعيدها",
      "العناية بكبار السن",
      "رعاية مرضى الأمراض المزمنة",
    ],
    serviceNameForWhatsApp: "ممرض منزلي",
  },

  "post-surgery-care": {
    title: "تمريض بعد العمليات",
    tagline: "رعاية آمنة بعد العمليات الجراحية",
    description:
      "نوفر رعاية تمريضية متخصصة بعد العمليات الجراحية لضمان التعافي السريع ومتابعة الحالة الصحية بدقة داخل المنزل.",
    image: "/images/photo3.jpg",
    scopes: [
      "تغيير الجروح وتعقيمها",
      "متابعة الحالة بعد الجراحة",
      "إعطاء الحقن والأدوية",
      "مراقبة أي مضاعفات محتملة",
    ],
    serviceNameForWhatsApp: "تمريض بعد العمليات",
  },

  "icu-home-care": {
    title: "رعاية مركزة منزلية",
    tagline: "مستشفى متكاملة داخل بيتك",
    description:
      "تم تصميم خدمة العناية المركزة المنزلية لتقديم رعاية متقدمة للحالات الحرجة مثل أمراض القلب، حالات التنفس، الأمراض العصبية، وما بعد العمليات الكبرى.",
    image: "/images/photo1.jpg",
    scopes: [
      "رعاية مرضى القلب الحرجة",
      "رعاية مرضى الجهاز التنفسي",
      "متابعة مرضى الأعصاب",
      "مراقبة طبية دقيقة 24/7",
    ],
    serviceNameForWhatsApp: "العناية المركزة المنزلية",
  },
};

/**
 * ✅ لازم async
 */
export default async function ServicePage({ params }) {
  const { slug } = await params; // ✅ فك الـ params صح
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div>
            <h1 className="text-4xl font-bold text-blue-700 mb-4">
              {service.title}
            </h1>

            <p className="text-xl text-gray-700 mb-6">
              {service.tagline}
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {service.description}
            </p>

            <CallButtons serviceName={service.serviceNameForWhatsApp} />
          </div>

          {/* IMAGE */}
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={450}
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </div>
      </section>

      {/* SERVICE SCOPE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
            نطاق الخدمة
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {service.scopes.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 p-5 rounded-xl shadow-sm text-gray-700"
              >
                • {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* FINAL CTA */}
      <section className="py-20 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          احجز الآن بسهولة
        </h2>

        <p className="text-gray-700 mb-8">
          تواصل معنا الآن وسيقوم فريقنا الطبي بالرد عليك في أسرع وقت
        </p>
            <div className="flex justify-center ">

        <CallButtons serviceName={service.serviceNameForWhatsApp} />
            </div>
      </section>
    </main>
  );
}
