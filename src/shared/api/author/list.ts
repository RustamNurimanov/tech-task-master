import { useQuery } from "@tanstack/react-query";

import getAuthorsRequest from "../../../api/authors/getAuthorsRequest";

export namespace useAuthorListTypes {
  //Подобные модели должны браться из код гена, а не создаваться руками)
  export interface Entity {
    id: number;
    name: string;
    avatar: string | null;
  }
}

export const useAuthorList = () => {
  return useQuery({
    queryKey: ["authors"],
    queryFn: getAuthorsRequest,
  });
};
