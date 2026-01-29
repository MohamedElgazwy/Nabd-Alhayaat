

export const metadata = {
  title: "من نحن",
};

export default function About() {
  return (
    <main className="min-h-screen py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-4xl font-bold mb-8 text-blue-700">
          من نحن
        </h1>

        <p className="text-gray-700 text-lg leading-8 mb-6">
          نحن شركة متخصصة في تقديم خدمات التمريض المنزلي باحترافية عالية،
          نهدف إلى توفير رعاية صحية آمنة ومريحة للمرضى داخل منازلهم
          بواسطة فريق تمريض مؤهل ومدرب.
        </p>

        <p className="text-gray-700 text-lg leading-8 mb-6">
          نسعى دائمًا لتقديم أفضل مستوى من الخدمة من خلال السرعة في
          الاستجابة والمتابعة المستمرة ورضا العملاء.
        </p>

        <p className="text-gray-700 text-lg leading-8">
          رؤيتنا هي أن نصبح الخيار الأول في خدمات الرعاية الصحية المنزلية
          في منطقتنا.
        </p>

      </div>
    </main>
  );
}
