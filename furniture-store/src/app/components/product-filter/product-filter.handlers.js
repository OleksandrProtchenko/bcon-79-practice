import { state } from "../../app";
import { renderFurnitures, renderLoadMoreBtn } from "../../core/render";
import { loadFurnitures } from "../product-card/products-card";

export async function onFilterClick(id) {
  state.category = id;
  state.resetPage();
  const markup = await loadFurnitures(id);
  renderFurnitures(markup);
  renderLoadMoreBtn();
}
