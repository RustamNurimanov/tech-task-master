import { type UseCommentsListTypes } from "shared/api/comments/list";
import {
  type UsePatchCommentTypes as UsePatchCommentMutationTypes,
  usePatchComment as usePatchCommentMutation,
} from "shared/api/comments/patchComment";
import { flatten, isNil } from "lodash";
import { produce } from "immer";
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export namespace UsePatchCommentTypes {
  export type onPatchCommentArgs = UsePatchCommentMutationTypes.Args;
}

export const usePatchComment = (queryKey: unknown[]) => {
  const queryClient = useQueryClient();
  const mutation = usePatchCommentMutation({
    onSuccess: (_, { isLiked }) =>
      toast.success(isLiked ? "Лайк успешно поставлен" : "Лайк успешно убран"),
  });

  const onPatchComment = useCallback(
    ({ id, isLiked }: UsePatchCommentTypes.onPatchCommentArgs) => {
      //TODO если использовать react-query-kit можно будет сделать декоратор с методами кеша
      queryClient.setQueryData<UseCommentsListTypes.RawQueryData>(queryKey, data => {
        return produce(data, draft => {
          if (isNil(draft)) {
            return draft;
          }
          const flatComments = flatten(draft?.pages.map(item => item.data));
          const comment = flatComments.find(comment => comment.id === id);

          if (isNil(comment)) {
            throw Error("Комментарий не найден");
          }

          if (!isNil(isLiked)) {
            comment.isLiked = isLiked;

            if (isLiked) {
              comment.likes += 1;
            }
            if (!isLiked) {
              comment.likes -= 1;
            }
          }

          return draft;
        });
      });
      mutation.mutate({ id, isLiked });
    },
    [queryKey],
  );

  return { mutation, onPatchComment };
};
