import Image from "next/image";
import CallButtons from "@/app/components/CallButtons";
import WhyChooseUs from "@/app/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen">

     
          <section className="pb-20 pt-2 bg-blue-50">
<div className="text-center mb-10">
  <span className="inline-block text-blue-700 font-bold text-4xl tracking-wide">
    مستشفى في بيتك
  </span>
</div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
           

            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              تمريض منزلي متخصص  
              <br />
              يصل إليك بسرعة وأمان
            </h1>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              نوفر خدمات تمريض ورعاية صحية منزلية متكاملة
              بأعلى معايير الجودة، على يد طاقم طبي وتمريضي محترف.
            </p>

            {/* CTA Buttons */}
            <CallButtons serviceName="ممرض منزلي" />
          </div>

          {/* Image */}
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

            {/* Service 1 */}
            <div className="bg-slate-50 rounded-xl shadow-sm hover:shadow-md transition p-6 text-center">
              <Image
                src="/images/photo2.jpg"
                alt="Home Nursing"
                width={300}
                height={200}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />

              <h3 className="text-xl font-bold text-blue-700 mb-3">
                تمريض منزلي
              </h3>

              <p className="text-gray-600">
                رعاية تمريضية يومية داخل المنزل بأعلى مستوى من الأمان.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-50 rounded-xl shadow-sm hover:shadow-md transition p-6 text-center">
              <Image
                src="/images/photo3.jpg"
                alt="Post Surgery Care"
                width={300}
                height={200}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />

              <h3 className="text-xl font-bold text-blue-700 mb-3">
                تمريض بعد العمليات
              </h3>

              <p className="text-gray-600">
                متابعة دقيقة للحالة الصحية بعد العمليات الجراحية.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-50 rounded-xl shadow-sm hover:shadow-md transition p-6 text-center">
              <Image
                src="/images/photo1.jpg"
                alt="ICU Home Care"
                width={300}
                height={200}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />

              <h3 className="text-xl font-bold text-blue-700 mb-3">
                رعاية مركزة منزلية
              </h3>

              <p className="text-gray-600">
                خدمات عناية مركزة متكاملة داخل المنزل للحالات الحرجة.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

    </main>
  );
}
