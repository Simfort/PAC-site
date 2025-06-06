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
    <section className="bg-linear-[55.84deg,#2F78AE_-0.83%,#3A91C6_90.09%,teal] min-h-[512px]   max-lg:pr-[18px] max-lg:pt-[55px] max-lg:pb-[55px] max-lg:pl-[18px] flex flex-col gap-[40px] pt-[98px] pr-[172px] pb-[98px] pl-[133px]">
      <h2 className="font-[500]  max-lg:text-[40px] max-lg:leading-[47px] text-[52px] leading-[96px] uppercase text-white">
        Опыт и профиль
      </h2>
      <ul className="grid max-lg:flex max-lg:flex-col gap-[16px]  max-lg:items-center gap-x-[66px] gap-y-4  grid-cols-3 ">
        {arrLevels.map((val, i) => (
          <li
            className="bg-white p-[30px] w-[375px] h-[94px] max-lg:w-[324px]   rounded-[5px] flex gap-[10px]"
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
    </section>
  );
}
