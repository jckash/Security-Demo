// Write your solution below:

function tShirtSorter(pile) {
    let count = {
    s: 0,
    m: 0,
    l: 0, 
};

for (let i = 0; i < pile.length; i++) {
    count[pile[i]]++;
}

let sortedPile = 's'.repeat(count.s) + 'm'.repeat(count.m) + 'l'.repeat(count.l);
return sortedPile;
}

console.log(tShirtSorter('lms'));