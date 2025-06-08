import close from "../assets/close.png";
import ModalInput from "./ModalInput";
import iconMan from "../assets/iconMan.png";
import iconPhone from "../assets/iconPhone.png";

export default function FormModal({
  setModal,
}: {
  setModal: (state: boolean) => void;
}) {
  return (
    <div id="modal">
      <form
        action=""
        className="bg-[#F6F6F6] w-[400px] h-[546px] flex flex-col items-center max-sm:w-[360px] ">
        <button
          className=" cursor-pointer self-end"
          onClick={() => setModal(false)}>
          <img src={close} alt="Close buton" />
        </button>
        <div className="flex flex-col items-center w-[340px] gap-[30px] max-sm:w-[300px] ">
          <div className="flex flex-col gap-[16px] items-center">
            <h2 className="font-[Arial] font-[700] text-[24px] leading-[32px] uppercase">
              Нужна консультация по строительству?
            </h2>
            <p className="font-[Arial] font-[400] text-[16px] leading-[24px] ">
              Оставьте свой номер телефона, и наш эксперт свяжется с вами в
              течение 30 минут.
            </p>
          </div>
          <div className="flex flex-col gap-[16px] max-sm:w-[300px]">
            <div className="flex flex-col gap-[16px]">
              <ModalInput text="Имя" img={iconMan} />
              <ModalInput text="Телефон для связи" img={iconPhone} />
              <button className="hover:opacity-50 cursor-pointer transition-[opacity] duration-75 active:opacity-20 w-[340px] text-white bg-[#2F78AE] h-[56px] font-[Arial] text-[14px] leading-[16px] font-[500]  max-sm:w-[300px]">
                ЗАКАЗАТЬ ЗВОНОК
              </button>
            </div>
            <p className="font-[Arial] text-[14px] font-[500] text-[#11111159] leading-[18px]">
              Продолжая, вы соглашаетесь с политикой конфиденциальности и
              обработкой персональных данных.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
