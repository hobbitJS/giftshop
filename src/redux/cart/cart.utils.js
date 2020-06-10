export const addItem = (cartItems, cartItemToAdd) => {
  const { id, title, options, selectedOption, category } = cartItemToAdd;

  const existingCartItem = cartItems.find(
    (cartItem) =>
      cartItem.id === id &&
      cartItem.selectedOption.attribute ===
        cartItemToAdd.options[selectedOption].attribute
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === id &&
      cartItem.selectedOption.attribute === options[selectedOption].attribute
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  const itemToAdd = {
    id,
    title,
    selectedOption: options[selectedOption],
    image: options[selectedOption].images.small[0],

    quantity: 1,
    category,
  };

  return [...cartItems, itemToAdd];
};

export const removeItem = () => {};

export const clearItem = (cartItems, itemToClear) => {
  const { id, attribute } = itemToClear;

  return cartItems.filter(
    (cartItem) =>
      cartItem.id !== id || cartItem.selectedOption.attribute !== attribute
  );
};

// hide/show cart-dropdown

const getHeight = (component) => {
  return parseFloat(getComputedStyle(component).height);
};

export const hideCartDropdown = () => {
  const header = document.querySelector("#header");
  const cartDropdown = document.querySelector("#cart-dropdown");

  const headerHeight = getHeight(header);
  const cartDropdownHeight = getHeight(cartDropdown);

  cartDropdown.style.top = `${headerHeight - cartDropdownHeight}px`;
};

export const showCartDropdown = () => {
  const header = document.querySelector("#header");
  const cartDropdown = document.querySelector("#cart-dropdown");

  const headerHeight = getHeight(header);
  cartDropdown.style.opacity = 1;
  cartDropdown.style.top = `${headerHeight}px`;
};
