import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Kolom Kiri: Branding & Deskripsi */}
        <div>
          <div
            onClick={() => {
              navigate("/");
              scrollTo(0, 0);
            }}
            className="flex items-center gap-2 mb-5 cursor-pointer"
          >
            <div className="flex items-center justify-center text-xl font-bold text-white rounded-lg shadow-md w-9 h-9 bg-primary">
              A+
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-800">
              Apotic<span className="text-primary">Care</span>
            </span>
          </div>
          <p className="w-full leading-6 text-gray-600 md:w-2/3">
            ApoticCare adalah platform layanan kesehatan digital yang memudahkan
            Anda menemukan dokter spesialis terpercaya, mengatur jadwal
            konsultasi medis secara fleksibel, dan memantau riwayat janji temu
            dengan mudah.
          </p>
        </div>

        {/* Kolom Tengah: Menu Navigasi Cepat */}
        <div>
          <p className="mb-5 text-xl font-medium">MENU UTAMA</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li
              onClick={() => {
                navigate("/");
                scrollTo(0, 0);
              }}
              className="transition-all cursor-pointer hover:text-primary"
            >
              Beranda
            </li>
            <li
              onClick={() => {
                navigate("/doctors");
                scrollTo(0, 0);
              }}
              className="transition-all cursor-pointer hover:text-primary"
            >
              Daftar Dokter
            </li>
            <li
              onClick={() => {
                navigate("/about");
                scrollTo(0, 0);
              }}
              className="transition-all cursor-pointer hover:text-primary"
            >
              Tentang Kami
            </li>
            <li
              onClick={() => {
                navigate("/contact");
                scrollTo(0, 0);
              }}
              className="transition-all cursor-pointer hover:text-primary"
            >
              Hubungi Kami
            </li>
          </ul>
        </div>

        {/* Kolom Kanan: Kontak */}
        <div>
          <p className="mb-5 text-xl font-medium">HUBUNGI KAMI</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+62-21-555-0199</li>
            <li>bantuan@apoticcare.id</li>
            <li>Yogyakarta, Indonesia</li>
          </ul>
        </div>
      </div>

      {/* Garis Pembatas & Copyright */}
      <div>
        <hr className="border-gray-200" />
        <p className="py-5 text-sm text-center text-gray-500">
          Hak Cipta © 2026 ApoticCare – Seluruh Hak Cipta Dilindungi.
        </p>
      </div>
    </div>
  );
};

export default Footer;
