import Image from "next/image";
import Link from "next/link";
import CallButtons from "@/app/components/CallButtons";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import { servicesData } from "@/app/data/services";

export default function Home() {
  const services = Object.entries(servicesData).slice(0, 6); // عرض أول 6 خدمات

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="pb-20 pt-6 bg-blue-50">
        <div className="text-center mb-10">
          <span className="inline-block text-blue-700 font-bold text-4xl tracking-wide">
            مستشفى في بيتك
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              رعاية طبية منزلية متخصصة
              <br />
              تصل إليك بسرعة وأمان
            </h1>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              نوفر خدمات المستشفى داخل منزلك بأعلى معايير الجودة،
              على يد طاقم طبي وتمريضي محترف.
            </p>

            <CallButtons serviceName="التمريض المنزلي" />
          </div>

          {/* IMAGE */}
          <div>
            <Image
              src="/images/photo1.jpg"
              alt="Home Medical Care"
              width={600}
              height={450}
              priority
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              خدماتنا الطبية
            </h2>

            <p className="text-gray-600 text-lg">
              باقات رعاية صحية منزلية تناسب جميع الاحتياجات
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map(([slug, service]) => (
              <div
                key={slug}
                className="bg-slate-50 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    {service.shortDescription}
                  </p>

                  <Link
                    href={`/services/${slug}`}
                    className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition"
                  >
                    عرض التفاصيل
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* VIEW ALL */}
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block text-blue-700 font-semibold hover:underline"
            >
              عرض جميع الخدمات →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <WhyChooseUs />
    </main>
  );
}
