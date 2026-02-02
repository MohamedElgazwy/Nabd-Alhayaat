import Link from "next/link";
import Image from "next/image";
import WhyChooseUs from "@/app/components/WhyChooseUs";

const services = [
  {
    title: "تمريض منزلي",
    description: "رعاية تمريضية يومية داخل المنزل.",
    image: "/images/photo2.jpg",
    slug: "home-nursing",
  },
  {
    title: "تمريض بعد العمليات",
    description: "متابعة دقيقة بعد العمليات الجراحية.",
    image: "/images/photo3.jpg",
    slug: "post-surgery-care",
  },
  {
    title: "رعاية مركزة منزلية",
    description: "عناية مركزة متكاملة داخل بيتك.",
    image: "/images/photo1.jpg",
    slug: "icu-home-care",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-blue-50 py-20 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          خدماتنا الطبية
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          خدمات رعاية صحية منزلية مصممة لتلبية جميع احتياجات المرضى.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-xl shadow hover:shadow-md transition overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="w-full h-52 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg"
                >
                  عرض التفاصيل
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />
    </main>
  );
}
