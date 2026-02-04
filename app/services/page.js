import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/app/data/services";
import WhyChooseUs from "@/app/components/WhyChooseUs";

export default function ServicesPage() {
  const services = Object.entries(servicesData);

  return (
    <main className="min-h-screen">
      <section className="bg-blue-50 py-20 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          خدماتنا الطبية
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          خدمات رعاية صحية منزلية مصممة لتلبية جميع احتياجات المرضى.
        </p>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {services.map(([slug, service]) => (
            <div
              key={slug}
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
                  {service.shortDescription}
                </p>

                <Link
                  href={`/services/${slug}`}
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
