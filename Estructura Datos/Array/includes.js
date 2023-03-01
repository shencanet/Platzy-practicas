const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}

const rta = pets.includes('dog')
console.log('for', includeInArray);
console.log('includes', rta);

/*
1
2
3
4

Intentos

Tu reto es retornar un array solo con las palabras 
que cumplan con la condición de tener un término de 
búsqueda dado.*/
function solution(words, query) {
	const result = words.filter(word => {
		return word.includes(query);
	});
	return result;
};