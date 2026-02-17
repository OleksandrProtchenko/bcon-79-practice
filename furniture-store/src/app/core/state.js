export class State {
  static perPage = 8;
  #categoryId;
  #totalPages;

  constructor(categoryId = "") {
    this.#categoryId = categoryId;
    this.page = 1;
    this.#totalPages = 1;
  }

  set category(newCategoryId) {
    this.#categoryId = newCategoryId;
  }

  get category() {
    return this.#categoryId;
  }

  set totalPages(totalItems) {
    this.#totalPages = Math.ceil(totalItems / State.perPage);
  }

  get totalPages() {
    return this.#totalPages;
  }

  increasePage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
