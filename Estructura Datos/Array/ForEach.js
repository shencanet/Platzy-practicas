const letters = ['a', 'b', 'c'];


letters.forEach(element => console.log(element));
//vs
for(let index = 0; index < letters.length; index++){
    const element = letters[index];
    console.log(element);
}