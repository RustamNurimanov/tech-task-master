import { useMutation } from "@tanstack/react-query";

import type { UseModelTypes } from "../../../pages/comments/model";

import type { UseCommentsListTypes } from "./list";

export namespace UsePatchCommentTypes {
  //Подобные модели должны браться из код гена, а не создаваться руками)
  export type Args = Pick<UseCommentsListTypes.Entity, "id"> &
    Partial<Omit<UseModelTypes.CommentEntity, "id">>;
  //В react-query-kit типы сразу мапятся
  export interface Props {
    onSuccess?: (data: unknown, variables: UsePatchCommentTypes.Args) => Promise<unknown> | unknown;
  }
}

export const usePatchComment = (props: UsePatchCommentTypes.Props) => {
  return useMutation({
    mutationFn: () =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(null);
        }, 200);
      }),
    onSuccess: props.onSuccess,
  });
};
