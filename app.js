const { indexFruit, storeFruit, updateFruit, destroyFruit } = require("./controllers/FruitController.js");

const main = () => {
    indexFruit(1);
    storeFruit('Pisang');
    updateFruit(0, 'Kelapa');
    destroyFruit(0);
}

main();