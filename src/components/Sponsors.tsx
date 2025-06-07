import logos from "../assets/logos.png";
import logos2 from "../assets/logos2.png";
import logos3 from "../assets/logos3.png";
import logos4 from "../assets/logos4.png";

export default function Sponsors() {
  return (
    <section className="flex  flex-col max-sm:w-1/1 max-sm:h-[1274px] max-sm:items-center max-md:w-[584px] max-md:h-[1209px] max-[1200px]:w-[750px] max-[1200px]:h-[968px] items-center max-sm:pt-[20px] pt-[120px] pb-[120px] justify-start gap-[70px]">
      <div className="flex items-center  max-sm:items-center flex-wrap  max-sm:h-[218px] max-sm:flex-col max-[1200px]:gap-[10px] gap-[345px] h-[78px]">
        <h2 className="font-[500]  max-lg:w-1/1 text-center  max-sm:h-[75px] max-[1200px]:w-1/1  max-md:w-1/1  max-md:h-[28px] max-md:text-[40px] h-[36px] leading-[37px] uppercase text-[52px] ">
          Наши заказчики
        </h2>
        <p className="w-[413px] max-sm:text-left text-center max-lg:w-1/1 max-sm:h-[104px] max-md:h-[130px] max-md:text-[18px]  font-[Arial] font-[500] text-[20px] leading-[26px]  ">
          Нашими заказчиками выступают следующие учреждения и предприятия
          Пермкого края и Российской федерации:
        </p>
      </div>
      <div>
        {window.innerWidth >= 1200 && (
          <img
            className="h-[422px] w-[962px]"
            src={logos}
            alt="Logo sponsors"
          />
        )}
        {window.innerWidth < 1200 && window.innerWidth >= 750 && (
          <img
            className="h-[422px] w-[762px]"
            src={logos2}
            alt="Logo sponsors"
          />
        )}
        {window.innerWidth < 750 && window.innerWidth >= 640 && (
          <img
            className="h-[589px] w-[694px]"
            src={logos3}
            alt="Logo sponsors"
          />
        )}
        {window.innerWidth < 640 && (
          <img
            className="h-[919px] w-[324px]"
            src={logos4}
            alt="Logo sponsors"
          />
        )}
      </div>
      <div className="flex max-sm:w-[324px] max-[1200px]:w-[400px] max-sm:h-[242px] max-md:w-[694px] max-md:h-[110px] justify-center h-[66px] w-[1200px]">
        <p className="font-[Arial] font-[500] text-[16px] leading-[22px]">
          В том числе: Департамент культуры и искусства Пермского края; КГАУ
          «Управление общежитиями Пермского края», г. Пермь; Группа компаний
          «Теплов и Сухов», г. Пермь; Краснокаменская бумажная фабрика Гознака,
          г. Краснокамск; Сберегательный Банк РФ ЗУБ г. Перми; Центральный Банк
          РФ г. Перми; ООО «Диодор» г. Киров; ООО ДОК «Камский» пгт
          Светлополянск;
        </p>
      </div>
    </section>
  );
}
