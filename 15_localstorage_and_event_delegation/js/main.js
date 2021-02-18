const items = localStorage;
const itemsContainer = document.querySelector('.items__list');
const itemsSubmit = document.querySelector('.items__add');
const itemName = document.querySelector('[name="item"]');

const addItems = (keyValue) => {
  items.setItem(items.length, keyValue);
  createItem(keyValue);
};
const getItems = () => {
  for (let i = 0; i < items.length; i++) {
    const keys = items.key(i);
    const item = items.getItem(keys);
    createItem(item, keys);
  }
};
const removeItem = () => {
  const targetLabel = event.target.previousSibling;
  const key = targetLabel.dataset.key;
  items.removeItem(key);
  document.location.reload();
};
const createItem = (item, key) => {
  const itemList = document.createElement('li');
  const itemCheckbox = document.createElement('input');
  const itemLabel = document.createElement('label');
  const itemSpan = document.createElement('span');

  itemCheckbox.type = 'checkbox';
  itemLabel.htmlFor = item;
  itemSpan.textContent = 'X';
  itemLabel.textContent = item;
  itemLabel.setAttribute('data-key', `${key}`);
  itemLabel.classList.add('item__name');
  itemSpan.classList.add('item__remove');

  itemList.append(itemCheckbox);
  itemList.append(itemLabel);
  itemList.append(itemSpan);
  itemsContainer.append(itemList);

  itemSpan.addEventListener('click', removeItem);
};

itemsSubmit.addEventListener('submit', (event) => {
  event.preventDefault();
  addItems(itemName.value);
});

window.addEventListener('load', getItems);
