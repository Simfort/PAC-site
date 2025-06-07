import { useEffect, useState } from "react";

export default function InfoHistory() {
  const [winWidth, setWinWidth] = useState(0);
  useEffect(() => {
    setWinWidth(window.innerWidth);
  }, []);
  return (
    <section className="flex items-center flex-col pb-[100px] gap-[50px]">
      <section className="flex gap-[105px] max-[1200px]:gap-[60px] max-md:items-center pt-[50px] pb-[50px] max-md:flex-col">
        <div className="flex w-[269px]  max-lg:gap-[29px] flex-col max-lg:w-[151px] max-lg:h-[100px] max-lg:items-center">
          <span className="w-[103px] border-[1px] border-[#2F78AE]"></span>
          <div className="max-lg:text-center">
            <h3 className="text-[32px] max-md:text-[21px] text-[#2F78AE] leading-[35px] uppercase font-[500]">
              с 2008-го года
            </h3>
            <p className="text-[16px] max-lg:w-[160px] max-lg:h-[42px] font-[Arial] leading-[21px] font-[400] ">
              группа компаний работает на рынке
            </p>
          </div>
        </div>
        <div className="flex  w-[269px] max-lg:gap-[29px]  flex-col max-lg:w-[219px] max-lg:h-[142px] max-lg:items-center">
          <span className="w-[139px] border-[1px] border-[#2F78AE]"></span>
          <div className="max-lg:text-center">
            <h3 className="text-[32px] max-md:text-[21px] text-[#2F78AE] leading-[35px] uppercase font-[500]">
              12 лет
            </h3>
            <p className="text-[16px] font-[Arial] leading-[21px] font-[400] ">
              опыт исполнения контрактов 44фз и 223фз на территории Пермского
              края, Крыма и Севастополя (с 2018 года)
            </p>
          </div>
        </div>
        <div className="flex  max-lg:gap-[29px] w-[269px]  flex-col max-lg:w-[234px] max-lg:h-[121px] max-lg:items-center">
          <span className="w-[134px] border-[1px] border-[#2F78AE]"></span>
          <div className="max-lg:text-center">
            <h3 className="text-[32px]  max-md:text-[21px] text-[#2F78AE] leading-[35px] uppercase font-[500]">
              Более 1,5 млрд рублей
            </h3>
            <p className="text-[16px] font-[Arial] leading-[21px] font-[400] ">
              — сумма исполненных обязательств по госконтрактам за последние
              годы
            </p>
          </div>
        </div>
      </section>
      {winWidth >= 1400 && (
        <div className=" p-10 w-[1100px]  bg-[#2F78AE] text-white rounded-[10px]">
          <p className="text-[28px] font-[500] leading-[35px]">
            ГК ПЭК— это предприятие полного цикла строительства. Наш профиль:
            проектирование, ремонт и реконструкция, строительство зданий и
            сооружений (специализированные, коммерческие, промышленные,
            административные и жилые). Монтаж внутренних и наружных инженерных
            сетей, монтаж и пусконаладка слаботочных и компьютерных сетей.
          </p>
        </div>
      )}
    </section>
  );
}
