class HashTable {
  constructor(size) {
    this.size = size;
  }

  Parse(str) {
    let parsedStr = 0;
    for (let i = 0; i < str.length; i++) {
      parsedStr += str.charCodeAt(i);
    }
    console.log(parsedStr);
    return parsedStr;
  }
}

let hashTable = new HashTable(3);

let mod = hashTable.Parse("hello") % 100;
console.log(mod);
console.log("hello".charCodeAt(4));
