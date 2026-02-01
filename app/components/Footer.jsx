export default function Footer() {
  return (
    <footer className="bg-slate-100 mt-20 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-gray-700">

        {/* Column 1: Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-blue-700">
            تواصل معنا
          </h3>

          <p className="mb-2">
            📧{" "}
            <a
              href="mailto:nabdalhayaat123@gmail.com"
              className="hover:text-blue-600"
            >
              nabdalhayaat123@gmail.com
            </a>
          </p>

          <p className="mb-2">
            <a
              href="https://www.facebook.com/NabdAlhayaat1"
              target="_blank"
              className="hover:text-blue-600"
            >
              Facebook
            </a>
          </p>

          <p>
            <a
              href="https://www.instagram.com/nabdalhayaathomecare1"
              target="_blank"
              className="hover:text-blue-600"
            >
              Instagram
            </a>
          </p>
        </div>

        {/* Column 2: Main Office */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-blue-700">
            المكتب الرئيسي
          </h3>

          <p className="mb-3">
            الدور السادس – 1 ميدان روكسي  
            <br />
            مصر الجديدة – القاهرة
          </p>

          <a
            href="https://maps.app.goo.gl/eALsGgQtjssSBVpf7"
            target="_blank"
            className="text-green-600 hover:underline"
          >
           📍 عرض الموقع على الخريطة
          </a>
        </div>

        {/* Column 3: Branches */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-blue-700">
            الفروع
          </h3>

          <p className="mb-3">
            <strong>فرع مدينة نصر</strong>
            <br />
            1 مصطفى النحاس – تقاطع عباس العقاد  
            <br />
            الدور السابع شقة 16 – فوق محمصة صلاح الدين
            <br />
            <a
              href="https://maps.app.goo.gl/srFcdm4KPF7qhJPx8"
              target="_blank"
              className="text-green-600 hover:underline"
            >
             📍 عرض على الخريطة
            </a>
          </p>

          <p>
            <strong>فرع التجمع الخامس</strong>
            <br />
            مكتب 208 – بلس مول  
            <br />
            المستثمرين الجنوبية – الدور الثاني
            <br />
            <a
              href="https://maps.app.goo.gl/3JtBLoVGRNN2czFk6"
              target="_blank"
              className="text-green-600 hover:underline"
            >
             📍 عرض على الخريطة
            </a>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-10 border-t pt-4">
        جميع الحقوق محفوظة © 2026 – نبض الحياة للرعاية الصحية المنزلية
      </div>
    </footer>
  );
}
