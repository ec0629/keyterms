const fs = require('fs');

const terms = fs.readFileSync('keyterms.txt')
    .toString()
    .split('\n');
    
const map = new Map();
terms.forEach((term) => {
    const trimmed = term.trim();
    mapValue = map.get(trimmed);
    
    if (mapValue) {
        map.set(trimmed, mapValue + 1);
    } else {
        map.set(trimmed, 1);
    }
});
const sortedByOccurrence = [...map]
    .sort((a, b) => b[1] - a[1])
    .map((v) => `${v[1]}\t${v[0]}`)
    .join('\n');

const sortedAlphabetically = [...map]
    .sort((a, b) => a[0].localeCompare(b))
    .map((v) => v[0])
    .join('\n');

fs.writeFileSync('alphabetical.txt', sortedAlphabetically);
fs.writeFileSync('occurrences.txt', sortedByOccurrence);