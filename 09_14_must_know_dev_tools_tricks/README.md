![JS30](../javascript30.png)

# 09 - 14 Must Know Dev Tools Tricks

## Console.log()

### Regular

---

```js
console.log('Hello World');
```

### Interpolated

---

```js
console.log('Hello I am a %s string', '💩');
```

### Styled

---

```js
console.log('Hello I am %c bold', 'font-weight:700');
```

### Warning

---

```js
console.warn('Warning: Bad Code is coming !!!');
```

### Error

---

```js
console.error('Error: Cannot fix that bug !!!');
```

### Infos

---

```js
console.info('Info Covid-19: Wear a mask ');
```

### Testing

---

```js
console.assert(true === false, 'true is not equal to false');
```

### Clearing

---

```js
console.clear();
```

### Viewing DOM Elements

---

```js
console.dir(document.documentElement);
```

### Grouping

---

```js
const dogs = [
  { name: 'Snickers', age: 2, breed: 'American Staff' },
  { name: 'Hulk', age: 5, breed: 'Alaskan Malamute' },
  { name: 'Poopy', age: 10, breed: 'Border Collie' },
];
```

```js
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name} is a ${dog.breed}`);
  console.log(` ${dog.name} is a ${dog.age} years old`);
  console.log(` ${dog.name} is a ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
```

### Counting

---

```js
console.count();
```

### Timing

---

```js
console.time('fetching data');
fetch('https://api.github.com/users/MehdiHan')
  .then((response) => response.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
  });
```
