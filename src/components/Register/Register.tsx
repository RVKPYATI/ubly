import { FC } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export const Register: FC = () => {
  return (
    <div className="bg-dark w-full h-screen flex flex-col justify-center items-center">
      <div className="text-white text-[20px] font-extrabold mb-[150px]">
        $ubly
      </div>
      <div className="relative w-[612px] h-auto px-9 py-8 bg-[#44494E1A] bg-opacity-10 rounded-[25px] border-[1px] border-brown/10">
        <div className="mb-3">
          <h1 className="text-[32px] text-white">Регистрация</h1>
        </div>
        <div>
          <p className="text-white">
            У вас уже есть аккаунт?{" "}
            <a href="/login">
              <span className="text-mint">Войти →</span>
            </a>
          </p>
        </div>
        {/* form */}
        <form className="mt-8">
          <div className="flex justify-between">
            <div className="w-[264px]">
              <Input
                label="Имя"
                className="placeholder:text-base "
                placeholder="Введите Ваше имя..."
                classLabel="text-gray-100"
              />
            </div>
            <div className="w-[264px]">
              <Input
                label="Фамилия"
                className="placeholder:text-base "
                classLabel="text-gray-100"
                placeholder="Введите фамилию..."
              />
            </div>
          </div>
          <div>
            <div className="mt-3">
              <Input
                label="Почта"
                className="placeholder:text-base"
                classLabel="text-brown"
                placeholder="Введите email..."
              />
            </div>
            <div className="mt-3">
              <Input
                label="Пароль"
                className="placeholder:text-base"
                classLabel="text-gray-100"
                placeholder="Введите пароль..."
              />
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <div className="w-[156px]">
              <Button className="text-[14px] font-rubik font-bold text-dark hover:bg-white">
                Регистрация →
              </Button>
            </div>
          </div>
        </form>
        <div className="bg-[#6BFFF2] w-[192px] h-[192px] absolute top-[54px] right-[20px] rounded-full blur-[300px] pointer-events-none"></div>
        <div className="bg-[#9BA3FF] w-[192px] h-[192px] absolute top-[136px] left-[35px] rounded-full blur-[300px] pointer-events-none"></div>
      </div>
    </div>
  );
};
