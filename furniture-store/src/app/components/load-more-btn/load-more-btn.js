import { state } from "../../app";
import "./load-more-btn.css";
import { onLoadMoreClick } from "./load-more-btn.handler";

export function initLoadMoreBtn() {
  const loadMoreBtn = document.querySelector(".js-load-btn");
  const isBtnShown = state.totalPages === state.page;

  if (isBtnShown) {
    loadMoreBtn.classList.add("hide");
    return;
  }

  loadMoreBtn.addEventListener("click", onLoadMoreClick);
  loadMoreBtn.classList.remove("hide");
}
