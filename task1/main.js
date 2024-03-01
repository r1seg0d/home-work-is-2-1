const pet = {
    species: 'Cat',
    name: 'Whiskers',
    age: 5,
    characteristics: ['playful', 'affectionate', 'curious'],
    health: 'good'
};

for (let key in pet) {
    console.log(`${key}: ${pet[key]}`);
}

if (pet.age < 5) {
    console.log('Whiskers is still young!');
} else {
    console.log('Whiskers is a mature cat.');
}