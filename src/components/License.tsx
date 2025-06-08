import gps from "../assets/gps.png";
import bear from "../assets/bear.png";
import license1 from "../assets/linecse1.png";
import license2 from "../assets/linecse2.png";
import elipse from "../assets/elipse.png";

const arrPuncts = [
  "Свидетельство СРО 0553 № СРО-С-168_11012010. Компенсационный фонд II уровня ответственности",
  "Свидетельство СРО 0496 № СРО-С-168-11012010. Компенсационный фонд II уровня ответственности (500.000.000 рублей)",
  "Свидетельство проектного СРО П-153-005904252716-1766. Ассоциация проектных организаций «Стройспецпроект» (СРО П-153-30032010)",
];

export default function License() {
  return (
    <section className="max-sm:h-[1991px] max-[1200px]:h-[1173px] h-[710px] bg-white flex  items-center flex-col pt-[120px] pb-[120px] gap-[70px]  ">
      <div className="flex flex-col max-[1200px]:items-center gap-[70px]">
        <div className="flex flex-col  max-lg:text-center">
          <h2 className="font-[500] text-[40px]  ">СРО И ЛИЦЕНЗИИ</h2>
          <h3 className="font-[400] text-[26px]  leading-9 uppercase">
            ООО «Первая Энергетическая Компания» ИНН 5904252716
          </h3>
        </div>
        <div className="flex flex-wrap justify-center max-sm:flex-col max-sm:items-center max-lg:justify-center  gap-[43px] max-sm:h-[1888px] h-[429px]">
          <div className="p-[40px] gap-[103px] flex max-sm:flex-col max-[1200px]:items-center bg-[#F2FAFF] text-black">
            <div>
              <img
                src={license1}
                className="w-[190px] h-[260px]"
                alt="Свидетельство проектного СРО П-153-005904252716-1766. image"
              />
              <p className="w-[262px] text-[14px] leading-[18px] font-[Arial] font-[700]">
                Свидетельство проектного СРО П-153-005904252716-1766. Ассоциация
                проектных организаций «Стройспецпроект» (СРО П-153-30032010)
              </p>
            </div>
            <div>
              <img
                src={license2}
                className="w-[190px] h-[260px]"
                alt="Лицензия на осуществление деятельности по сохранению объектов
            культурного наследия народов РФ №МКРФ 19825 от 10.12.2019 года image"
              />
              <p className="w-[262px] text-[14px] leading-[18px] font-[Arial] font-[700]">
                Лицензия на осуществление деятельности по сохранению объектов
                культурного наследия народов РФ №МКРФ 19825 от 10.12.2019 года
              </p>
            </div>
          </div>
          <div className="flex-col flex  w-[264px] h-[402px]">
            <ul className="flex flex-col gap-[26px] w-[264px] max-sm:w-1/1  max-lg:w-[324px] h-[402px]">
              <p className="font-[500] text-[32px]  h-[22px] leading-5">
                А ТАКЖЕ
              </p>
              {arrPuncts.map((val, i) => (
                <li
                  className="flex gap-[5px] max-lg:h-[100px] h-[268px] w-[264px] "
                  key={i}>
                  <img
                    src={elipse}
                    alt="Elipse"
                    className="mt-[6px] w-[5px] h-[5px]"
                  />
                  <p className="font-[Arial] list font-[400] text-[14px] leading-[18px]">
                    {val}
                  </p>
                </li>
              ))}
              <p className=" max-sm:w-1/1 italic font-[Arial] text-[14px] max-lg:w-[324px] max-lg:h-[36px] w-[264px] h-[54px] leading-[18px] font-[400] text-[#2F78AE]">
                Допуски включают в себя особо опасные, технически сложные и
                уникальные объекты.
              </p>
            </ul>
          </div>
          <div className="w-[207px] max-lg:w-[324px] flex flex-col items-center max-lg:h-[235px]  gap-[42px]">
            <img
              src={gps}
              className="h-[52px] w-[207px] max-lg:w-[210px]"
              alt="ГПС image"
            />
            <img
              src={bear}
              className="h-[130px] w-[207px]"
              alt="ПОД ЗНАКОМ ГИЛЬДИИ image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
