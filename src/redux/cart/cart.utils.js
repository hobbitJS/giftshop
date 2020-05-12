export const addItemToCart = (cartItems, cartItemToAdd) => {
  const { id, title, options, selectedOption, cardImage } = cartItemToAdd;

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
    cardImage,
    quantity: 1,
  };

  console.log(itemToAdd, cartItemToAdd);
  return [...cartItems, itemToAdd];
};
