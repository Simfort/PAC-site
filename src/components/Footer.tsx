import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black   text-white pt-[63px] gap-[100px] flex flex-col items-center pb-[63px]">
      <div
        id="menu"
        className="flex gap-[191px] 1200px max-[1200px]:gap-[103px] 1024px max-lg:flex-col max-lg:max-w-[696px] 640px max-sm:w-[325px] max-sm:gap-[65px]">
        <div
          id="menu2"
          className="flex gap-[191px] 1200px max-[1200px]:gap-[103px] 640px max-sm:gap-[65px]">
          <div id="adress" className="flex flex-col gap-[18px] ">
            <h3 className="font-[Arial] font-[700] text-[14px] text-right leading-[26px]">
              Адрес
            </h3>
            <p className="font-[Arial] font-[400] text-[14px] text-right leading-[26px]">
              Симферополь, ул Гагарина 20а
            </p>
            <p className="font-[Arial] font-[400] text-[14px] text-right leading-[26px]">
              Пермь, Горького 9
            </p>
            <p className="font-[Arial] font-[400] text-[14px] text-right leading-[26px]">
              Пермь, Кировоградская 12
            </p>
          </div>
          <div
            id="pochataAndContacts"
            className="flex gap-[191px] 1200px max-[1200px]:gap-[103px] 630px mas-sm:flex-col max-sm:gap-[24px]">
            <div id="Contacts">
              <h3 className="font-[Arial] font-[700] text-[14px] text-right leading-[26px]">
                Контактное лицо
              </h3>
              <p className="font-[Arial] font-[400] text-[14px] text-right leading-[26px]">
                +7 (988) 187-82-71
              </p>
            </div>
            <div id="pochta">
              <h3 className="font-[Arial] font-[700] text-[14px] text-right leading-[26px]">
                Почта
              </h3>
              <p className="font-[Arial] font-[400] text-[14px] text-right leading-[26px]">
                office@ooopek.ru
              </p>
            </div>
          </div>
        </div>
        <div className=" 1024px max-lg:self-start max-lg:max-w-[206px] 630px max-sm:self-end">
          <h3 className="font-[Arial] font-[700] text-[14px] text-right leading-[26px]">
            Юридическая информация
          </h3>
          <p className="font-[Arial] font-[400] text-[14px] text-right leading-[26px]">
            ИНН 5904252716
          </p>
        </div>
      </div>
      <div
        id="info"
        className="w-[1200px] flex items-center justify-between 1200px max-[1200px]:w-[960px] 1024px max-lg:w-[694px] 1024px max-lg:gap-[348px] 630px max-sm:flex-col 630px max-sm:gap-0">
        <div
          id="rules"
          className="flex flex-col items-start 1024px max-lg:w-[283px] 630px max-sm:w-[325px] ">
          <a
            className="font-[Arial] text-[#2F78AE] font-[400] text-[14px]  leading-[26px]"
            href="#">
            Условия использования сайта
          </a>
          <p className="font-[Arial]  font-[400] text-[14px]  leading-[26px]">
            Копирование материалов сайта в коммерческих целях запрещено и
            преследуется по закону РФ.
          </p>
        </div>
        <img className="w-[62px] h-[71px]" src={logo} alt="Logo" />
      </div>
    </footer>
  );
}
