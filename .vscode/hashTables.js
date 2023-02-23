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
    }return undefined;

}
getAllKeys(){
    let items = this.data
      .filter(item => item != undefined)
      .flat()
      .map(item => item[0])
    
    return items;
  }
  delete(key){

    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    let itemDeleted
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const index = i
          itemDeleted = currentBucket[i]
          if (currentBucket.length > 1) {
            for (let i = index; i < currentBucket.length - 1; i++) {
              this.data[address][0] = this.data[address][i + 1];
            }
            delete this.data[address][currentBucket.length - 1]
            console.log("Se ha eliminado el elemento");
            return itemDeleted
          } else {
            delete this.data[address];
            console.log("Se ha liberado el Address");
            return itemDeleted
          }
        }
      }
    }
    console.log("No se encontro ningun elemento a borrar");
    return undefined
  }
}

}

const myHashTable = new HashTable(50);

myHashTable.set("Diego", 1990);
myHashTable.set("Alejandro", 1998);

