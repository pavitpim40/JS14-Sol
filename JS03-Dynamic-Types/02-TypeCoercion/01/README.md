จงหาผลลัพธ์ของ typeof ดังต่อไปนี้

```js
typeof 'x'; // "string"
typeof x; // "undefined"
typeof ``; // "string"
typeof Infinity; // "number"
typeof (100 / 0); // "number"
typeof (1 + '3'); // "string" => "13"
typeof (1 * 'a'); // "number" => NaN
typeof null; // "object"
```
