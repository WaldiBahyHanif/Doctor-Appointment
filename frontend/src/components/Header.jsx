import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col flex-wrap px-6 rounded-lg md:flex-row bg-primary md:px-10 lg:px-20">
      {/* Bagian Kiri: Teks & Tombol */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:-mb-[-30px]">
        <p className="text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl md:leading-tight lg:leading-tight">
          Jadwalkan Konsultasi <br /> Bersama Dokter Terpercaya
        </p>
        <div className="flex flex-col items-center gap-3 text-sm font-light text-white md:flex-row">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Temukan dokter spesialis berpengalaman dengan mudah,{" "}
            <br className="hidden sm:block" /> atur jadwal konsultasi Anda tanpa
            antre.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 px-8 py-3 m-auto text-sm text-gray-600 transition-all duration-300 bg-white rounded-full md:m-0 hover:scale-105"
        >
          Cari Jadwal Dokter{" "}
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* Bagian Kanan: Gambar Header Dokter */}
      <div className="relative md:w-1/2">
        <img
          className="bottom-0 w-full h-auto rounded-lg md:absolute"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
