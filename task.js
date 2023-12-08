/**
* Fungsi untuk menampilkan hasil download
* @param {string} result - Nama file yang didownload
*/
const showDownload = (result) => {
    console.log("Download selesai");
    console.log(`Hasil Download: ${result}`);
};

/**
 * Fungsi untuk download file
 * @returns {Promise<string>} - Promise yang resolve dengan nama file yang didownload
 */
const download = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = "windows-10.exe";
            resolve(result);
        }, 3000);
    });
};

/**
 * Main function untuk mengeksekusi download dan menampilkan hasilnya
 */
const main = async () => {
    try {
        const result = await download();
        showDownload(result);
    } catch (error) {
        console.error(`Error during download: ${error}`);
    }
};

// Call main function
main();


/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */