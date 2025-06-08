import type { ItemObject } from "./objects";
import but from "../../assets/button.png";
import { useState } from "react";

export default function ObjectItem({ object }: { object: ItemObject }) {
  const [mouseFlag, setMouseFlag] = useState(false);
  return (
    <div className="w-[395px] max-sm:w-[300px] max-sm:h-[300px] h-[395px] ">
      <div
        onMouseEnter={() => setMouseFlag(true)}
        onMouseLeave={() => setMouseFlag(false)}
        className=" relative  p-[30px] mask-[linear-gradient(180deg,#3A91C6_0%,#3A91C6_81.02%);
]"
        style={{
          background: `url(${object.image})`,
          backgroundRepeat: "no-repeat",
        }}>
        <div className="  flex flex-col gap-[21px]">
          <div className="w-[395px] h-[395px] max-sm:w-[250px]  max-sm:h-[240px] flex gap-[185px] max-sm:gap-[120px] flex-col">
            <p className="text-[14px] h-[36px] text-white leading-[18px] font-[400] font-[Arial]">
              {object.title}
            </p>
            <p className="font-[Arial] text-white text-[18px] leading-[23px] uppercase font-[700]">
              {object.desc}
            </p>
          </div>
          <button className="w-1/1 flex justify-end">
            <img src={but} className="w-[37px] h-[37px]" alt="Button" />
          </button>
        </div>
        <div
          className={`w-[395px] h-[395px] max-sm:w-[300px] max-sm:h-1/1   ${
            mouseFlag ? " opacity-100 shadow-2xl " : "opacity-0 "
          } transition-[opacity] duration-700 p-[30px] bg-white absolute top-0 bottom-0 right-0 left-0 pt-[27px] pr-[22px] pb-[27px] pl-[22px] max-sm:p-[50px]  flex flex-col gap-[10px] max-sm:pt-[5px]  `}>
          <div className="flex flex-col gap-[20px] max-sm:gap-[2px]  max-sm:w-1/1  ">
            {object.contracts &&
              object.contracts.map((val, i) => (
                <div
                  key={i}
                  className="pb-[15px] last:border-none border-b-[1px] border-[#2F78AE]">
                  <p className="font-[400] font-[Arial] text-[16px] leading-[20px] ">
                    {val}
                  </p>
                </div>
              ))}
            {object.author && (
              <div className="pb-[15px] last:border-none border-b-[1px] border-[#2F78AE] max-sm:w-1/1 w-[345px]">
                <h2 className=" font-[700] text-[#3A91C6] font-[Arial] text-[20px] leading-[26px] uppercase max-sm:text-[16px]">
                  Заказчик
                </h2>
                <p className="font-[400] font-[Arial] text-[16px] leading-[20px] capitalize">
                  {object.author}
                </p>
              </div>
            )}

            {object.price && (
              <div className="pb-[15px] max-sm:w-1/1 last:border-none border-b-[1px] border-[#2F78AE] w-[345px] ">
                <h2 className="max-sm:text-[16px] font-[700] text-[#3A91C6] font-[Arial] text-[20px] leading-[26px] uppercase">
                  Стоимость капитального ремонта
                </h2>
                <p className="font-[400] font-[Arial] text-[16px] leading-[20px] ">
                  {object.price}
                </p>
              </div>
            )}

            {object.status && (
              <div className="pb-[15px] max-sm:w-1/1 last:border-none border-b-[1px] border-[#2F78AE] w-[345px] ">
                <h2 className="max-sm:text-[16px] font-[700] text-[#3A91C6] font-[Arial] text-[20px] leading-[20px] uppercase">
                  Статус контракта
                </h2>
                <p className="font-[400] font-[Arial] text-[16px] leading-[20px] ">
                  {object.status}
                </p>
              </div>
            )}
            {object.timeWork && (
              <div className="pb-[15px] max-sm:w-1/1 last:border-none border-b-[1px] border-[#2F78AE] w-[345px] ">
                <h2 className="max-sm:text-[16px] font-[700] text-[#3A91C6] font-[Arial] text-[20px] leading-[20px] uppercase">
                  СРОК ПРОИЗВОДСТВА РАБОТ
                </h2>
                <p className="font-[400] font-[Arial] text-[16px] leading-[20px] ">
                  {object.timeWork}
                </p>
              </div>
            )}

            {object.commonPrice && (
              <div className="pb-[15px] last:border-none max-sm:w-1/1 border-b-[1px] border-[#2F78AE] w-[345px]">
                <h2 className=" max-sm:text-[16px] font-[700] text-[#3A91C6] font-[Arial] text-[20px] leading-[20px] uppercase">
                  Общая сумма исполненных контрактов в Симферопольской ГКБ№ 7
                </h2>
                <p className="font-[400] font-[Arial] text-[16px] leading-[20px] ">
                  {object.commonPrice}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
