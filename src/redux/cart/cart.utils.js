export const addItem = (cartItems, cartItemToAdd) => {
  const {
    id,
    title,
    options,
    selectedOption,
    category,
    addItemFromCheckout,
  } = cartItemToAdd;

  const checkItem = (item, itemToAdd) => {
    const checkoutItemAttr = addItemFromCheckout
      ? itemToAdd.selectedOption.attribute
      : itemToAdd.options[selectedOption].attribute;

    return (
      item.id === itemToAdd.id &&
      item.selectedOption.attribute === checkoutItemAttr &&
      item.title === title
    );
  };

  const existingCartItem = cartItems.find((cartItem) =>
    checkItem(cartItem, cartItemToAdd)
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      checkItem(cartItem, cartItemToAdd)
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  const itemToAdd = {
    id,
    title,
    optionNumber: selectedOption,
    selectedOption: options[selectedOption],
    image: options[selectedOption].images.small[0],
    quantity: 1,
    category,
  };

  return [...cartItems, itemToAdd];
};

export const subtractItem = (cartItems, itemToSubtract) => {
  const {
    id,
    quantity,
    selectedOption: { attribute },
  } = itemToSubtract;

  return quantity === 1
    ? cartItems
    : cartItems.map((cartItem) =>
        cartItem.id === id && cartItem.selectedOption.attribute === attribute
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
};

export const clearItem = (cartItems, itemToClear) => {
  const {
    id,
    selectedOption: { attribute, title },
  } = itemToClear;
  console.log(title);

  return cartItems.filter(
    (cartItem) =>
      cartItem.id !== id ||
      cartItem.selectedOption.attribute !== attribute ||
      cartItem.selectedOption.title !== title
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
