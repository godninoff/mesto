export class Section {
	constructor({items, renderer}, containerSelector) {
		this._items = items;
		this._renderer = renderer;
		this._container = document.querySelector(containerSelector);
	  }
	
	  renderItems() {
		this._items.forEach(card => {
			this._renderer(card);
		})
	  }
	
	  addItem(elem) {
		this._container.prepend(elem)
	}
}