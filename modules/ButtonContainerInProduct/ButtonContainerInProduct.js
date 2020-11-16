import AddElemInContainer from '../AddElemInContainer/AddElemInContainer.js'

export default class ButtonContainerInProduct {
  constructor(addToCart, addToWishList, container) {
    this.container = container;
    this.addToCart = addToCart;
    this.addToWishList = addToWishList;
  }

  createContainer() {
    this.container.forEach((btn, i) => {
      btn.insertAdjacentHTML(
        'beforebegin',
        `<div class="buttons__container">${this.addToWishList[i]}${this.addToCart[i]}</div>`,
      );
    });
  }
}

const priceActions = document.querySelectorAll('.price_actions');
const addToCart = document.querySelectorAll('.add_to_cart');
const addToWishList = document.querySelectorAll('.add_to_wishlist');

const buttonContainerInProduct = new ButtonContainerInProduct(addToCart, addToWishList, priceActions);

buttonContainerInProduct.createContainer();

// const btnContainer = document.querySelectorAll('.buttons__container')

// const addCartInProductCard = new AddElemInContainer(addToCart, btnContainer);
// const addLikeInProductCard = new AddElemInContainer(addToWishList, btnContainer);

//${this.addToCart.outerHTML}${this.addToWishList.outerHTML}
