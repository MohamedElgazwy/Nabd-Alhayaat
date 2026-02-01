import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-slate-100 mt-20 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-gray-700">

        {/* Column 1: Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-blue-700">
            تواصل معنا
          </h3>

          <p className="mb-3 flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-600" />
            <a
              href="mailto:nabdalhayaat123@gmail.com"
              className="hover:text-blue-600 transition"
            >
              nabdalhayaat123@gmail.com
            </a>
          </p>

          <p className="mb-3 flex items-center gap-2">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
            <a
              href="https://www.facebook.com/NabdAlhayaat1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              Facebook
            </a>
          </p>

          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faInstagram} className="text-pink-600" />
            <a
              href="https://www.instagram.com/nabdalhayaathomecare1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition"
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

          <p className="flex items-start gap-2 mb-4">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-green-600 mt-1"
            />
            <span>
              الدور السادس – 1 ميدان روكسي
              <br />
              مصر الجديدة – القاهرة
            </span>
          </p>

          <a
            href="https://maps.app.goo.gl/eALsGgQtjssSBVpf7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline transition"
          >
            عرض الموقع على الخريطة
          </a>
        </div>

        {/* Column 3: Branches */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-blue-700">
            الفروع
          </h3>

          <p className="mb-6">
            <strong className="block mb-1">فرع مدينة نصر</strong>

            <span className="flex items-start gap-2 mb-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-green-600 mt-1"
              />
              <span>
                1 مصطفى النحاس – تقاطع عباس العقاد
                <br />
                الدور السابع شقة 16 – فوق محمصة صلاح الدين
              </span>
            </span>

            <a
              href="https://maps.app.goo.gl/srFcdm4KPF7qhJPx8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline transition"
            >
              عرض على الخريطة
            </a>
          </p>

          <p>
            <strong className="block mb-1">فرع التجمع الخامس</strong>

            <span className="flex items-start gap-2 mb-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-green-600 mt-1"
              />
              <span>
                مكتب 208 – بلس مول
                <br />
                المستثمرين الجنوبية – الدور الثاني
              </span>
            </span>

            <a
              href="https://maps.app.goo.gl/3JtBLoVGRNN2czFk6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline transition"
            >
              عرض على الخريطة
            </a>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-12 border-t pt-4">
        جميع الحقوق محفوظة © 2026 – نبض الحياة للرعاية الصحية المنزلية
      </div>
    </footer>
  );
}
