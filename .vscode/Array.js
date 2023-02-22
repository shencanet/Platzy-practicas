// const array = ["Diego", "Karen", "Oscar"];

class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    Pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;

    }

    delete(index){
        const item = this.data[index]
        this.shiftIndex(index);
        return item;
    }

       shiftIndex(index){
        for (let i = index; i< this.lenght -1; i++ ){
            this.data[i] = this.data[i + 1 ];

           }
            delete this.data[this.length -1 ];
            this.length--; 
            return this.data;
       }

    
}
const myArray = new MyArray();
myArray.push("Jose");
myArray.push("Adrian");
myArray.push("Santi");
console.log(myArray)
//myArray.get(1);
//myArray.Pop();
myArray.delete(0);
console.log(myArray)

