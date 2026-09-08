import { useNavigate } from "react-router-dom";
import { doctors } from "../assets/assets";

const TopDoctors = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Dokter Pilihan untuk Anda</h1>
      <p className="text-sm text-center sm:w-1/3">
        Daftar dokter berpengalaman yang siap memberikan pelayanan medis
        terbaik.
      </p>

      {/* Grid Kartu Dokter */}
      <div className="grid w-full gap-4 px-3 pt-5 grid-cols-auto gap-y-6 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-teal-100 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 shadow-sm hover:shadow-md"
            key={index}
          >
            <img
              className="w-full bg-teal-50/50"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-600">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Tersedia</p>
              </div>
              <p className="text-lg font-medium text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-600">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Lihat Selengkapnya */}
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="px-12 py-3 mt-10 text-gray-700 transition-all rounded-full bg-teal-50 hover:bg-teal-100"
      >
        Lihat Semua Dokter
      </button>
    </div>
  );
};

export default TopDoctors;
