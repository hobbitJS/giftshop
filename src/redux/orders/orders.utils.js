export const filterOrders = (orders, filter) =>
  filter === "all"
    ? orders
    : orders.filter((order) => order.data.status === filter);

export const changeOrderStatus = (orders, payload) => {
  const idx = orders.findIndex((order) => order.uid === payload.uid);

  const ordersWithChangedStatus = [
    ...orders.slice(0, idx),
    {
      uid: orders[idx].uid,
      data: {
        ...orders[idx].data,
        status: payload.status,
      },
    },
    ...orders.slice(idx + 1),
  ];

  return ordersWithChangedStatus;
};

export const changeUserInfoField = (orders, payload) => {
  const idx = orders.findIndex((order) => order.uid === payload.uid);

  const ordersWithChangedUserField = [
    ...orders.slice(0, idx),
    {
      uid: orders[idx].uid,
      data: {
        ...orders[idx].data,
        [payload.field]: payload.value,
      },
    },
    ...orders.slice(idx + 1),
  ];

  return ordersWithChangedUserField;
};

export const incrementItem = (orders, payload) => {
  const idx = orders.findIndex((order) => order.uid === payload.uid);

  const modifiedOrders = [
    ...orders.slice(0, idx),
    {
      uid: orders[idx].uid,
      data: {
        ...orders[idx].data,
        cartItems: [
          ...orders[idx].data.cartItems.slice(0, payload.itemIdx),
          {
            ...orders[idx].data.cartItems[payload.itemIdx],
            quantity: orders[idx].data.cartItems[payload.itemIdx].quantity + 1,
          },
          ...orders[idx].data.cartItems.slice(payload.itemIdx + 1),
        ],
      },
    },
    ...orders.slice(idx + 1),
  ];

  return modifiedOrders;
};

export const decrementItem = (orders, payload) => {
  const idx = orders.findIndex((order) => order.uid === payload.uid);

  if (orders[idx].data.cartItems[payload.itemIdx].quantity < 2) return orders;

  const modifiedOrders = [
    ...orders.slice(0, idx),
    {
      uid: orders[idx].uid,
      data: {
        ...orders[idx].data,
        cartItems: [
          ...orders[idx].data.cartItems.slice(0, payload.itemIdx),
          {
            ...orders[idx].data.cartItems[payload.itemIdx],
            quantity: orders[idx].data.cartItems[payload.itemIdx].quantity - 1,
          },
          ...orders[idx].data.cartItems.slice(payload.itemIdx + 1),
        ],
      },
    },
    ...orders.slice(idx + 1),
  ];

  return modifiedOrders;
};

export const removeItem = (orders, payload) => {
  const idx = orders.findIndex((order) => order.uid === payload.uid);

  const modifiedOrders = [
    ...orders.slice(0, idx),
    {
      uid: orders[idx].uid,
      data: {
        ...orders[idx].data,
        cartItems: [
          ...orders[idx].data.cartItems.slice(0, payload.itemIdx),
          ...orders[idx].data.cartItems.slice(payload.itemIdx + 1),
        ],
      },
    },
    ...orders.slice(idx + 1),
  ];

  return modifiedOrders;
};

export const selectOptionOfItemByQuery = (
  items,
  { itemId, option, category }
) => {
  const idx = items[category].findIndex((item) => item.id === itemId);

  const modifiedItems = {
    ...items,
    [category]: [
      ...items[category].slice(0, idx),
      { ...items[category][idx], defaultOption: option },
      ...items[category].slice(idx + 1),
    ],
  };

  return modifiedItems;
};

export const addItemByQuery = (orders, payload) => {
  const idx = orders.findIndex((order) => order.uid === payload.uid);

  const checkItem = (item, itemToAdd) =>
    item.id === itemToAdd.id &&
    item.selectedOption.attribute ===
      itemToAdd.options[itemToAdd.defaultOption].attribute;

  const existingCartItem = orders[idx].data.cartItems.find((cartItem) =>
    checkItem(cartItem, payload.item)
  );

  if (existingCartItem) {
    return [
      ...orders.slice(0, idx),
      {
        ...orders[idx],
        data: {
          ...orders[idx].data,
          cartItems: orders[idx].data.cartItems.map((cartItem) =>
            checkItem(cartItem, payload.item)
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        },
      },
      ...orders.slice(idx + 1),
    ];
  }

  const itemToAdd = {
    id: payload.item.id,
    title: payload.item.title,
    optionNumber: payload.item.defaultOption,
    selectedOption: payload.item.options[payload.item.defaultOption],
    image: payload.item.options[payload.item.defaultOption].images.small[0],
    quantity: 1,
    category: payload.category,
  };

  return [
    ...orders.slice(0, payload.activeOrder),
    {
      ...orders[payload.activeOrder],
      data: {
        ...orders[payload.activeOrder].data,
        cartItems: [...orders[payload.activeOrder].data.cartItems, itemToAdd],
      },
    },
    ...orders.slice(payload.activeOrder + 1),
  ];
};
