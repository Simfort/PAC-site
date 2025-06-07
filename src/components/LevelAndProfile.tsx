import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon6 from "../assets/icon6.png";
import vector from "../assets/Vector.png";

const arrLevels = [
  {
    title: "Объекты военно-промышленного комплекса и гособоронзаказа",
    image: icon1,
  },
  {
    title: "Объект на новых территориях РФ",
    image: icon2,
  },
  {
    title: "Объекты здравоохранения ",
    image: icon3,
  },
  {
    title: "Объекты образования",
    image: icon4,
  },
  {
    title: "Объекты спорта",
    image: vector,
  },
  {
    title: "Административные объекты",
    image: icon6,
  },
];

export default function LevelAndProfile() {
  return (
    <section className="bg-linear-[55.84deg,#2F78AE_-0.83%,#3A91C6_90.09%,teal] min-h-[512px] max-md:items-center   max-lg:pr-[18px] max-lg:pt-[55px] max-lg:pb-[55px] max-lg:pl-[18px] flex flex-col  pt-[98px] pr-[172px] pb-[98px]  items-center">
      <div>
        <h2 className="font-[500] self-start mb-[40px]   max-lg:text-[40px] max-lg:leading-[47px] text-[52px] leading-[96px] uppercase text-white">
          Опыт и профиль
        </h2>
        <ul className="grid max-md:flex max-md:flex-col  max-md:items-center  gap-y-4 gap-x-[10px] max-[1200px]:grid-rows-3 max-[1200px]:grid-cols-[375px_375px]   grid-cols-[375px_375px_375px] ">
          {arrLevels.map((val, i) => (
            <li
              className="bg-white p-[30px] w-[375px] items-center max-lg:w-[324px] max-lg:h-[94px]   rounded-[5px] flex gap-[10px]"
              key={i}>
              <img
                src={val.image}
                className="w-[31px] h-[31px]"
                alt="image levels"
              />
              <p className="font-[Arial] font-[400] text-[16px] leading-[21px]">
                {val.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
