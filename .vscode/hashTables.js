class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.lenght; i++){
        hash = (hash +key.charCodeat(i) + i) % this.data.lenght;

    }
   
    return hash;
    
}
}

const myHashTable = new HashTable(25);
console.log(myHashTable);