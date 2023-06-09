function fiveHeads() {
    return new Promise((resolve, reject) => {
        let attemps = 0;
        while (attemps < 101) {
            attemps++;
            // let result = tossCoin();
        }
        if (attemps === 5) {
            resolve(`it took ${attemps} tries to flip five 'heads'`)
        }
        if (attemps > 100) {
            reject(`You tried over 100 times, you lose!`)
        }

    });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");

