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
set(key, value) {
    const address = this.hashMethod(key);
    if(!this.data[address]){
        this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
}
set(key){
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if(currentBucket){
        for(let i =0; i<currentBucket.lenght; i++){
            if(currentBucket[i][0] === key){
                return currentBucket[i][1];
            }
        }
    }

}
}

const myHashTable = new HashTable(50);

myHashTable.set("Diego", 1990);
myHashTable.set("Alejandro", 1998);

