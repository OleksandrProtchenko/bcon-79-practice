import { loadCategories } from "./components/product-filter/product-filter";
import {
  renderCategories,
  renderFurnitures,
  renderLoadMoreBtn,
} from "./core/render";
import { loadFurnitures } from "./components/product-card/products-card";
import "./components/load-more-btn/load-more-btn";
import { State } from "./core/state";

export const state = new State();

loadCategories().then(renderCategories);
loadFurnitures().then(furnitures => {
  renderFurnitures(furnitures);
  renderLoadMoreBtn();
});
