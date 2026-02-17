import { state } from "../app";
import { State } from "../core/state";
import { request } from "./http";

export function fetchFurnitures() {
  const params = { limit: State.perPage, page: state.page };
  if (state.category !== "") {
    params.category = state.category;
  }
  return request("/furnitures", {
    params,
  });
}
