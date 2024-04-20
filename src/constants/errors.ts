import { ErrorTypes } from "../utils/onError";

export const errors: Record<ErrorTypes.ErrorTypesEnum, string> = {
  [ErrorTypes.ErrorTypesEnum.NetworkError]:
    "Произошла ошибка сети. Пожалуйста, проверьте ваше интернет-соединение и попробуйте снова.",
  [ErrorTypes.ErrorTypesEnum.Unknown]: "Произошла неизвестная ошибка",
} as const;
