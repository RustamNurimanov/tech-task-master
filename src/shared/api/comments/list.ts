import { type InfiniteData } from "@tanstack/react-query";

import { type GlobalTypes } from "../../../types/global";
import { useLoadItems } from "../../../hooks/useLoadItems";
import getCommentsRequest from "../../../api/comments/getCommentsRequest";

export namespace UseCommentsListTypes {
  //Подобные модели должны браться из код гена, а не создаваться руками)
  export interface Entity {
    id: number;
    created: string;
    text: string;
    author: number;
    parent: null | number;
    likes: number;
    isLiked?: boolean;
  }
  export type RawQueryData = InfiniteData<
    GlobalTypes.PaginationResponse<UseCommentsListTypes.Entity>
  >;
}

export const useCommentsList = () => {
  return useLoadItems({
    fetchFn: getCommentsRequest,
    queryKey: ["comments"],
  });
};
