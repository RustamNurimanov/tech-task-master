import { errors } from "../constants/errors";
import axios from "axios";
import toast from "react-hot-toast";

export namespace ErrorTypes {
  export enum ErrorTypesEnum {
    NetworkError = "Network Error",
    Unknown = "Unknown",
  }
}

//Модель ошибки будет известна поэтому сможем выводить более осмысленные ошибки в зависимости от типа
//Так же такие ошибки надо писать в сентри
export const onError = (error: Error) => {
  if (axios.isAxiosError(error)) {
    if (error.message === ErrorTypes.ErrorTypesEnum.NetworkError) {
      toast.error(errors[ErrorTypes.ErrorTypesEnum.NetworkError]);
    }
    return;
  }
  toast.error(errors[ErrorTypes.ErrorTypesEnum.Unknown]);
};
