/**
 * TODO 3:
 * - import fruits dari data/fruits.js
 * - refactor variabel ke ES6 variable
 */
const fruits = require("../data/fruits.js");

/**
 * TODO 4:
 * - Buat method index.
 * - Refactor function ke ES6 Arrow Function
 * - Tampilkan data fruits.
 *
 * @hint - Gunakan looping for of
 */
const indexFruit = () => {
    console.log('index of fruits(for loop): ')
    for (const fruit of fruits) {
        console.log(fruit)
    }

    console.log('index of fruits(spread operator) : ', ...fruits)
}

/**
 * TODO 5:
 * - Buat method store.
 * - Refactor function ke ES6 Arrow Function
 * - Menambahkan data baru ke array fruits.
 *
 * @param {string} name - Nama buah.
 *
 * @hint - Gunakan method push
 */
const storeFruit = (name) => {
    fruits.push(name);
    console.log('store of fruits: ', ...fruits)
}

/**
 * TODO 6:
 * - Buat method update.
 * - Refactor function ke ES6 Arrow Function
 * - Memperbarui data fruits.
 *
 * @param {number} index - Posisi atau index yang ingin diupdate.
 * @param {string} name - Nama buah yang baru.
 */
const updateFruit = (index, name) => {
    fruits[index] = name;
    console.log('update of fruits: ', ...fruits)
}

/**
 * TODO 7:
 * - Buat method destroy.
 * - Refactor function ke ES6 Arrow Function
 * - Menghapus data fruits.
 *
 * @param {number} index - Posisi atau index yang ingin dihapus
 *
 * @hint - Gunakan method splice
 */
const destroyFruit = (index) => {
    fruits.splice(index, 1)
    console.log('destroy of fruits: ', ...fruits)
}

/**
 * TODO 8: export method index, store, update, dan destroy
 */
module.exports = { indexFruit, storeFruit, updateFruit, destroyFruit };