export default function WhyChooseUs() {
  const items = [
    "طاقم طبي وتمريضي محترف بجميع التخصصات",
    "الالتزام الكامل بمعايير الجودة وسلامة المرضى",
    "تغطية جغرافية واسعة وسهولة الوصول",
    "باقات رعاية متنوعة تناسب جميع الحالات",
    "إتاحة خدمات إضافية مثل التحاليل والأشعة",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">
          لماذا تختارنا؟
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-right max-w-3xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-slate-50 p-5 rounded-xl shadow-sm text-gray-700"
            >
              • {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
