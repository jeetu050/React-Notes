function choice(items) {
  let index = Math.floor(Math.random() * items.length);
  return items[index];
}

function remove(items, item) {
  let index = items.indexOf(item);
  let newarr = [...items.slice(0, index), ...items.slice(index + 1)];
  return newarr;
}

export { choice, remove };
