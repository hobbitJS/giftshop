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
