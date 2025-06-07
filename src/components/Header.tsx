import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import pac from "../assets/pac.png";

export default function Header() {
  const [winWidth, setWinWidth] = useState(0);
  useEffect(() => {
    setWinWidth(window.innerWidth);
  }, []);
  return (
    <header
      style={{
        background: "linear-gradient(38.91deg, #DCF2FF 9.7%, #FFFFFF 70.65%)",
      }}
      className=" w-1/1 max-md:gap-0 max-lg:gap-[20px] max-[1200px]:gap-[20px] gap-[408px] max-md:flex-col  max-md:items-center flex flex-wrap justify-center   min-h-[706px]">
      <section className="max-md:items-center max-md:pt-[33px] pt-[131px] flex flex-col items-start justify-start  ">
        {winWidth < 900 && (
          <p className=" leading-[23px]  text-[18px] font-[400] font-[Arial]">
            office@ooopek.ru
          </p>
        )}
        <h2 className="   font-[500] max-md:text-[35px] text-[49px] leading-[67px]  uppercase text-black">
          группа компаний
        </h2>
        <img
          src={pac}
          className=" max-lg:w-[325px] w-[453px] h-[188px] max-lg:h-[134px]"
        />

        <p className=" max-md:text-[16px] max-md:mt-0  font-[400] text-[24px]  mt-[60px]">
          Cтроительство, ремонт и проектирование
        </p>

        <button
          style={{
            backgroundImage: "linear-gradient()",
            boxShadow: "0px 7px 10.1px 0px #57575740",
          }}
          className=" bg-linear-[51.31deg,#2F78AE_18.04%,#3A91C6_70.46%,#2F78AE_92.31%,#124F78_120.39%] hover:opacity-50 active:opacity-10  transition-all duration-150 mt-[42px] font-[700] w-[310px] h-[72px] font-[Arial] text-white flex justify-center items-center text-[14px] ">
          ОБРАТНАЯ СВЯЗЬ
        </button>
      </section>
      <section className="max-md:items-center max-md:pt-[40px] pt-[100px] flex-col">
        {winWidth >= 901 && (
          <p className="ml-[180px]  text-[18px] font-[400] font-[Arial]">
            office@ooopek.ru
          </p>
        )}
        <img
          className="mt-[10px] max-md:w-[224px] max-md:h-[260px] "
          src={logo}
          width={330}
          height={381}
          alt=""
        />
        <p className="font-[Arial] mt-[50px] font-[700] italic leading-[26px] text-right max-md:text-[14px] text-[16px] uppercase text-[#2F78AE]">
          ПЕРВЕНСТВО. ЭНЕРГИЯ. КОМАНДА
        </p>
      </section>
    </header>
  );
}
