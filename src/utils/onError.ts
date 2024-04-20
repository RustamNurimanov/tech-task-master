import axios from "axios";
import toast from "react-hot-toast";

export namespace ErrorTypes {
  export enum ErrorTypesEnum {
    NetworkError = "Network Error",
  }
}

//Модель ошибки будет известна поэтому сможем выводить более осмысленные ошибки в зависимости от типа
//Так же такие ошибки надо писать в сентри
export const onError = (error: Error) => {
  if (axios.isAxiosError(error)) {
    if (error.message === ErrorTypes.ErrorTypesEnum.NetworkError) {
      toast.error("Произошла ошибка из за отсутствия подключения к интернету");
    }
    return;
  }
  toast.error("Произошла неизвестная ошибка");
};
