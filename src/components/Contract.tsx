import paper from "../assets/paper.png";

const arrPoint: string[] = [
  "Проектирование, ремонт и реконструкция. ",
  "Строительство зданий и сооружений (специализированные,коммерческие, промышленные, административные и жилые)",
  "Монтаж внутренних и наружных инженерных сетей, монтаж и пусконаладка слаботочных и компьютерных сетей.",
];

export default function Contract() {
  return (
    <section className="bg-[#F9F9F9] pt-[98px] flex flex-col items-center max-sm:w-1/1  pb-[98px] ">
      <div className="flex max-sm:w-[360px]     max-[1200px]:gap-[20px] max-lg:w-[692px] max-lg:mr-[40px] max-sm:flex-col items-center gap-[175px] max-sm:gap-[30px]">
        <div className=" max-lg:order-2 max-sm:ml-[38px]  items-center  order-1 max-sm:w-[324px] max-sm:h-[449px] max-lg:w-[480px] w-[749px] h-[356px] flex flex-col gap-[58px]">
          <h2 className="font-[Arial]  font-[700] max-sm:text-[26px] max-sm:w-[323px]  text-[32px] leading-[37px] uppercase">
            Все контракты были завершены в срок. На ряде объектов работы были
            завершены досрочно (до 4 мес).
          </h2>
          <h3 className="w-[620px] max-lg:w-[480px] max-sm:w-[323px] max-sm:h-[156px] max-sm:text-[18px] h-[78px] max-lg:text-[#2F78AE] font-[Arial] font-[700] text-[20px] leading-[26px] uppercase">
            Наличие опыта исполнения контрактов 44фз по общестроительным
            работам, строительству линейных объектов и объектов благоустройства.
          </h3>
        </div>
        <img
          className="max-sm:order-1 order-2 w-[276px] max-lg:w-[161px] max-lg:h-[183px] h-[312px]"
          src={paper}
          alt="Paper"
        />
      </div>
      <div className="pt-[20px]   max-lg:pt-[16px] max-lg:gap-[33px] flex flex-col gap-[20px]">
        <h4 className="font-[Arial] max-sm:w-[323px] max-[1200]:h-[78px] font-[700] text-[20px] leading-[26px]">
          ГК ПЭК — это предприятие полного цикла строительства. Наш профиль:
        </h4>
        <ol className="flex max-sm:items-center max-sm:flex-col  gap-[40px] ">
          {arrPoint.map((val, i) => (
            <li
              className=" border-t-[1px] pt-[30px] pb-[30px] border-b-[1px] border-[#2F78AE] max-lg:w-[204px] max-[1200px]:w-[293px]  w-[373px] min-lg:h-[164px]"
              key={i}>
              <p className="font-[Arial] max-lg:text-[18px] text-[20px] leading-[26px] font-[500] break-words">
                {val}
              </p>
            </li>
          ))}
        </ol>
      </div>
      <div className="pt-[60px] ">
        <div className="flex justify-center items-center p-[30px] max-[1200px]:w-[692px] w-[1200px] bg-white max-sm:w-[324px] h-[104px] max-sm:h-[214px]">
          <h5 className="max-sm:h-[274px] h-[44px] w-[750px] font-[700] font-[Arial] text-[18px] leading-[22px]  ">
            Группа компаний ПЭК имеет представительства в нескольких регионах
            РФ. А именно: Пермский край, Республика Крым, Севастополь и
            Запорожская область.
          </h5>
        </div>
      </div>
    </section>
  );
}
