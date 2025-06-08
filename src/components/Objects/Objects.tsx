import { useState } from "react";
import ObjectItem from "./ObjectItem";
import { objects } from "./objects";

export default function Objects() {
  const [flag, setFlag] = useState(false);
  return (
    <section className="pt-[120px] max-sm:pt-[160px] max-sm:w-1/1  pb-[120px] flex flex-col gap-[70px] items-center  ">
      <div>
        <h2 className="font-[700] mt-[100px] max-sm:text-center     text-[52px] leading-[96px] uppercase self-start ">
          объекты
        </h2>
        <div
          className={`max-sm:flex max-sm:flex-col grid-cols-3 max-[1200px]:grid-cols-2 max-sm:grid-cols-1 ${
            flag
              ? ` grid-rows-[395px_395px_395px_395px_395px]`
              : `min-h-[1603px] grid-rows-4`
          }  max-sm:gap-[60px]  gap-[5px] grid transition-all duration-300`}>
          {objects.slice(0, 12).map((val, i) => (
            <ObjectItem key={i} object={val} />
          ))}
          {flag &&
            objects
              .slice(12, 24)
              .map((val, i) => <ObjectItem key={i} object={val} />)}
          <div className="max-[1200px]:w-[200%] w-[300%] max-sm:w-[100%] flex-col flex">
            <button
              className="bg-[#DAEFFF]  self-end text-[14px] leading-[16px] text-center font-[700] font-[Arial] w-[159px] h-[48px]"
              onClick={() => setFlag(!flag)}>
              {!flag ? "ПОСМОТРЕТЬ ВСЕ" : "СКРЫТЬ"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
