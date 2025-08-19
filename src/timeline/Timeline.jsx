import { Typewriter } from "react-simple-typewriter";
export default function Timeline() {
  const items = [
    {
      year: "2021 - 2022",
      title: "Deputy Store Manager - Winmart+",
      desc: "Managed store operations, including ordering, receiving, and stock transfers. Monitored inventory, ensured accurate records, and implemented loss prevention plans.",
    },
    {
      year: "2022 - 2023",
      title: "Store Manager - Winmart+",
      desc: "Oversaw inventory control, supplier returns, and quality management to reduce loss and waste. Managed SAP operations, including POs and stock transactions. Supervised staff scheduling, training, performance evaluation, and conflict resolution.",
    },
    {
      year: "2023 - Present",
      title: "Information Technology Student- Software Applications",
      desc: "Currently pursuing a degree in Information Technology with a focus on Software Applications, gaining knowledge in programming, web development, and software design.",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      className="relative max-w-6xl mx-auto py-12"
    >
      {/* Line giữa */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2"></div>
      {items.map((item, index) => (
        <div
          key={index}
          className={`mb-8 flex justify-between items-center w-full ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          {/* Nội dung */}
          <div className="w-5/12">
            {/* Năm */}
            <h1 className="font-bold">{item.year}</h1>
            {/* bg-white p-6 rounded-lg shadow-lg border border-gray-200 */}
            <div className="p-6 rounded-lg shadow-lg ">
              <h3 className="text-base text-blue-500 font-bold font-mono mb-2">
                <Typewriter
                  words={[item.title]}
                  loop={0} // 0 = loop vô hạn
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={30}
                  delaySpeed={1000}
                />
              </h3>
              <p className="text-white font-light italic">{item.desc}</p>
            </div>
          </div>

          {/* Chấm tròn */}
          <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white border-4 border-white shadow-lg">
            {index + 1}
          </div>

          {/* Khoảng trống bên kia */}
          <div className="w-5/12"></div>
        </div>
      ))}
    </div>
  );
}
