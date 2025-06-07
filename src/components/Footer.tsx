import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-1/1 bg-black text-white flex flex-col pt-[20px] items-center ">
      <div>
        <div className="flex gap-[175px] max-lg:justify-center">
          <ul>
            <h3 className="text-[12px] leading-[26px] font-[700] text-right font-[Arial]">
              Адрес
            </h3>
            <li className="text-[12px] leading-[26px] font-[400] font-[Arial] text-right">
              Симферополь, ул Гагарина 20а
            </li>
            <li className="text-[12px] leading-[26px] font-[400] font-[Arial] text-right">
              Пермь, Горького 9
            </li>
            <li className="text-[12px] leading-[26px] font-[400] font-[Arial] text-right">
              Пермь, Кировоградская 12
            </li>
          </ul>
          <div className="max-[1200px]:flex-col flex gap-[175px]">
            <div>
              <h3 className="text-[12px] leading-[26px] font-[700] text-right font-[Arial]">
                Контактное лицо
              </h3>
              <p className="text-[12px] leading-[26px] font-[400] font-[Arial] text-right">
                +7 (988) 187-82-71
              </p>
            </div>
            <div>
              <h3 className="text-[12px] leading-[26px] font-[700] text-right font-[Arial]">
                Почта
              </h3>
              <p className="text-[12px] leading-[26px] font-[400] font-[Arial] text-right">
                office@ooopek.ru
              </p>
            </div>
          </div>
        </div>
        <div className="max-[1200px]:flex max-[1200px]:flex-col   max-[1200px]:w-1/1">
          <h3 className="text-[12px] leading-[26px] font-[700] max-[1200px]:text-left max-sm:text-right text-right font-[Arial]">
            Юридическая информация
          </h3>
          <p className="text-[12px] leading-[26px] font-[400] font-[Arial] max-[1200px]:text-left max-sm:text-right text-right">
            ИНН 5904252716
          </p>
        </div>
        <div className="flex max-sm:flex-col max-sm:gap-0 max-[1200px]:gap-[200px] gap-[400px] items-center ">
          <div className="order-1 max-sm:order-2">
            <a
              className="text-[12px] leading-[26px] font-[400] font-[Arial] text-right text-[#2F78AE]"
              href="#">
              Условия использования сайта
            </a>
            <p className="text-[12px] leading-[26px] font-[400] font-[Arial] text-right">
              Копирование материалов сайта в коммерческих целях запрещено и
              преследуется по закону РФ.
            </p>
          </div>
          <img
            className="order-2 max-sm:order-1 w-[62px] h-[71px]"
            src={logo}
            alt="PAC logo"
          />
        </div>
      </div>
    </footer>
  );
}
