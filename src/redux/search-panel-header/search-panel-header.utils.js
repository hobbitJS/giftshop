export const convertData = (data, payload) => {
  const newData = {};

  for (let category in data) {
    const categoryItems = [];

    for (let id in data[category]) {
      if (
        id === payload ||
        data[category][id].title.toUpperCase().includes(payload)
      ) {
        categoryItems.push(data[category][id]);
      } else {
        continue;
      }
    }

    newData[category] = categoryItems;
  }

  return newData;
};
