import { state } from "../../app";
import { renderLoadMoreBtn, renderMoreFurnitures } from "../../core/render";
import { loadFurnitures } from "../product-card/products-card";

export async function onLoadMoreClick() {
  state.increasePage();
  const markup = await loadFurnitures();
  renderMoreFurnitures(markup);
  renderLoadMoreBtn();
}
