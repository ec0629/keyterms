const fs = require('fs');

const content = fs.readFileSync('keyterms.txt').toString();
const terms = content.split('\n');
const map = new Map();
terms.forEach((t) => {
    const term = t.trim();
    if (map.has(term)) {
        map.set(term, map.get(term) + 1);
    } else {
        map.set(term, 1);
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