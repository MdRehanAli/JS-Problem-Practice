// paperRequirements(): book1 → 100, book2 → 200, book3 → 300. Here calculate how many books you need to compose 15 book1, 9 book2 & 3 book3.

function paperRequirements(book1, book2, book3) {

    if (typeof book1 !== 0 || typeof book2 !== 0 || typeof book3 !== 0) {
        console.log('Please Enter a Number.')
    }

    const paperForBook1 = 100;
    const paperForBook2 = 200;
    const paperForBook3 = 300;

    const totalPaperBook1 = paperForBook1 * book1;
    const totalPaperBook2 = paperForBook2 * book2;
    const totalPaperBook3 = paperForBook3 * book3;

    const totalPaperRequired = totalPaperBook1 + totalPaperBook2 + totalPaperBook3;

    return totalPaperRequired;

}

const book1 = 15;
const book2 = 9;
const book3 = 3;

const books = paperRequirements(book1, book2, book3);
console.log('Total Paper required =', books);