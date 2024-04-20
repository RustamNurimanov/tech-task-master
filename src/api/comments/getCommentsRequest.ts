import axios from "axios";

import { type GlobalTypes } from "../../types/global";
import { type UseCommentsListTypes } from "../../shared/api/comments/list";

//Эта функция была бы сгенерина свагером
async function getCommentsRequest(
  page: number,
): Promise<GlobalTypes.PaginationResponse<UseCommentsListTypes.Entity>> {
  const { data } = await axios.get("/api/comments", { params: { page } });
  return data;
}

export default getCommentsRequest;
