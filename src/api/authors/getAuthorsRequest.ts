import axios from "axios";

import { type useAuthorListTypes } from "../../shared/api/author/list";

//Эта функция была бы сгенерина свагером
async function getAuthorsRequest(): Promise<useAuthorListTypes.Entity[]> {
  const { data } = await axios.get("/api/authors");
  return data;
}

export default getAuthorsRequest;
