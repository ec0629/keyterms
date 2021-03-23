const fs = require('fs');

const previousTerms = fs.readFileSync('keyterms.txt')
    .toString()
    .split('\n');

const set = new Set();
previousTerms.forEach((t) => {
    set.add(t.trim());
});

const newTerms = fs.readFileSync('recent.txt')
    .toString()
    .split('\n')
    .reduce((acc, term) => {
        const trimmed = term.trim();
        if (!set.has(trimmed)) {
            acc.push(trimmed);
        }
        return acc;
    }, [])
    .sort((a, b) => a[0].localeCompare(b))
    .join('\n');

fs.writeFileSync('new-terms.txt', newTerms);