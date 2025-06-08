import { useState } from "react";

export default function ModalInput({
  img,
  text,
}: {
  img: string;
  text: string;
}) {
  const [change, setChange] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="w-[340px] relative h-[56px] border-[1px] text-[16px] flex items-center border-[#2F78AE] max-sm:w-[300px] pl-[16px] pr-[16px] ">
      {(!change || !value) && (
        <p
          onClick={() => {
            setChange(true);
          }}
          className="text-[16px] z-1 absolute flex gap-[4px] font-[400] font-[Arial] leading-[24px]">
          <img src={img} alt="Image logo input" />
          <p className="text-[#11111159]">
            {text}
            <span className="text-red-500">*</span>
          </p>
        </p>
      )}
      {change && (
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          value={value}
          className="z-20 outline-none "
        />
      )}
    </div>
  );
}
