const choice = (itemsArr) => {
let pickOne = Math.floor(Math.random() * itemsArr.length);
  return itemsArr[pickOne];
}

const removeMe = (items, item) => {
  for(let i = 0; i < items.length; i++){
    if(items[i] === item) {
      return [...items.slice(0, 1), ...items.slice(i + 1)];
    }
  }
}


export  { choice, removeMe };
