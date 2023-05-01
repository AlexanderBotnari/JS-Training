const janeData = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
const juliaData = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];

const janeData1 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
const juliaData1 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];

const verifyCats = function (catsJane, catsJulia) {
    const catsJaneCopy = catsJane.slice(1, -1);
    const catsJuliaCopy = catsJulia.slice(1, -1);

    const allCats = catsJaneCopy.concat(catsJuliaCopy);

    allCats.forEach(function (age, nr) {
        if(age >= 2){
            console.log(`Кошка № ${nr + 1} взрослая, ей ${age} лет`);
        }else{
            console.log(`Кошка № ${nr + 1} ещё котёнок`);
        }
    });
};

const getAverageHumanAge = catAges => {
    const avgHumanAge = catAges
            .map(value => value <= 2 ? value * 10 : value * 7)
            .filter(value => value >= 18)
            .reduce((acc, value, _, arr) => acc + value / arr.length, 0);
    console.log(avgHumanAge);
}

// verifyCats(janeData, juliaData);
//verifyCats(janeData1, juliaData1);
getAverageHumanAge(janeData);
