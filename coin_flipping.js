function fiveHeads() {
    return new Promise((resolve, reject) => {
        let attemps = 0;
        while (attemps < 5) {
            attemps++;
            // let result = tossCoin();
        }
        if (attemps === 5) {
            resolve(`it took ${attemps} tries to flip five 'heads'`)
        }

    });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");

