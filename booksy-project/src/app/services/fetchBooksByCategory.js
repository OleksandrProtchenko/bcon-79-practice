import axios from "axios";
import "./config";

// const BASE_URL = "https://books-backend.p.goit.global/books";

export function fetchBooksByCategory(categoryName = "") {
  const endpoint = categoryName === "" ? "/top-books" : "/category";
  return axios
    .get(endpoint, {
      params: {
        category: categoryName,
      },
    })
    .then(response => response.data)
    .catch(error => console.log(error.message));
}
