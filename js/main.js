var iceCream = ['mint chocolate chip', 'chocolate chip cookie dough', 'chocolate',
    'vanilla'
];

var presidents = [
    {firstName: 'Donald', lastName: 'Trump', termLength: 4, party: 'Republican', yearsOfPresidency: 1},
    {firstName: 'Barack', lastName: 'Obama', termLength: 8, party: 'Democrat', yearsOfPresidency: 8},
    {firstName: 'George W.', lastName: 'Bush', termLength: 8, party: 'Republican', yearsOfPresidency: 8},
    {firstName: 'Bill', lastName: 'Clinton', termLength: 8, party: 'Democrat', yearsOfPresidency: 8},
    {firstName: 'George', lastName: 'Bush', termLength: 4, party: 'Republican', yearsOfPresidency: 4}
];

console.log(presidents[2].firstName, presidents[2].lastName);

function howdy(person, message) {
    return person + ' says ' + message;
}

console.log(howdy('Lauren Light', 'hello!'));

var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    }
    else if (string.length > 7) {
        console.log("I'm sorry, but that's too many to count.");
    }
    else if (string.length === 7) {
        console.log('7, what a perfect choice!');
    }
};
numba('7');
numba('seventy');
numba('university');

function inception(display, favMovie) {
    return favMovie + display;
}

console.log(inception(' is a fantastic movie.', 'Harry Potter'));
