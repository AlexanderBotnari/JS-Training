const cats = [
    { catWeight: 3, foodWeight: 25, owners: ['Наташа'] },
    { catWeight: 6, foodWeight: 90, owners: ['Марина', 'Алиса'] },
    { catWeight: 4, foodWeight: 45, owners: ['Алекс', 'Ирина'] },
    { catWeight: 7, foodWeight: 80, owners: ['Борис'] },
];

cats.map( cat => {
    cat.recommendedPortion = cat.catWeight * 0.75 * 12;
    // console.log(cat);
});
// console.log(cats);

const alexCat = cats.find(cat => cat.owners.includes('Алекс'));
// console.log(`This cat eat to very ${alexCat.foodWeight > alexCat.recommendedPortion ? 'much' : 'slow'}`);
// console.log(alexCat);

const catsEatTooMuchOwners = cats.filter(cat => cat.foodWeight > cat.recommendedPortion).flatMap(cat => cat.owners);
console.log(`${catsEatTooMuchOwners.join(', ')} - хозяева кошек, которые едят слишком много!`);

const catsEatTooLittleOwners = cats.filter(cat => cat.foodWeight < cat.recommendedPortion).flatMap(cat => cat.owners);
console.log(`${catsEatTooLittleOwners.join(', ')} - хозяева кошек, которые едят слишком мало!`);

const normalFoodWeight = cats.some(cat => cat.foodWeight === cat.recommendedPortion);
console.log(normalFoodWeight)

const catWithRecommendedFood = cats.some(cat => cat.foodWeight > cat.recommendedPortion * 0.9 && cat.foodWeight < cat.recommendedPortion * 1.1);
console.log(catWithRecommendedFood);

const sortedCats = cats.slice().sort(((a, b) => a.recommendedPortion - b.recommendedPortion));
console.log(sortedCats);