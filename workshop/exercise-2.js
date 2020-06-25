// Exercise 2
// ----------

const lateComers = ['Felicia', 'Charles', 'Terry'];
const earlyBirds = ['Ellen', 'Jerry', 'Jasmine'];

const printGuestOrder = (early, late) => {
    let list = [...early, ...late];
    for (let x = 0; x < list.length; x++) {
        console.log(`${x+1}. ${list[x]}`);
    }
}

printGuestOrder(earlyBirds, lateComers);