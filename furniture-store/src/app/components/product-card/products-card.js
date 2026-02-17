import { fetchFurnitures } from "../../api/furnitures-api";
import { state } from "../../app";
import "./products-card.css";

export async function loadFurnitures() {
  const { furnitures, totalItems } = await fetchFurnitures();
  state.totalPages = totalItems;

  return furnitures.map(createCardMarkup).join("");
}

function createCardMarkup({ _id, name, images, price, color }) {
  return `
      <li class="products-list-item">
        <article class="products-card" data-product-id="${_id}">
          <img class="products-card-image" src="${images.at(0)} " alt="${name}" />
          <h3 class="products-card-title">${name}</h3>
          <ul class="products-card-color">
            ${color
              .map(item => `<li style="background-color: ${item};"></li>`)
              .join("")}
          </ul>
          <p class="products-card-price">${price} грн</p>
          <button class="products-card-btn" type="button">Детальніше</button>
        </article>
      </li>
    `;
}
