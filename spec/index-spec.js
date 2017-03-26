const Index = require('../Model/inverted-index');
const validBook = require('../files/books.json');
const emptyBook = require('../files/empty.json');
const invalidBook = require('../files/test.json');
const workBook = require('../files/work.json');

const invertedIndex = new Index();

const work = [{
  title: 'Checkpoint one',
  text: 'Testing getIndex function',
},

{
  title: 'Checkpoint Two',
  text: 'Coming soon',
},
];


// invertedIndex.createIndex('feedback.json', work);

// Test Suite


describe('Define methods for Index class', () => {
  invertedIndex.createIndex('work.json', workBook);
  it('Should ensure that invertedIndex methods are defined', () => {
    expect(invertedIndex.getIndex).toBeDefined();
  });
  it('Should ensure that invertedIndex methods are defined', () => {
    expect(invertedIndex.createIndex).toBeDefined();
  });
  it('Should ensure that invertedIndex methods are defined', () => {
    expect(invertedIndex.tokenize).toBeDefined();
  });
  it('Should ensure that invertedIndex methods are defined', () => {
    expect(invertedIndex.validateFile).toBeDefined();
  });
  it('Should ensure that invertedIndex methods are defined', () => {
    expect(invertedIndex.searchIndex).toBeDefined();
  });
});

describe('', () => {
  invertedIndex.createIndex('work.json', work);
  it('Should return an object that is an accurate index of the json file',
    () => {
      expect(invertedIndex.getIndex('work.json', work)).toEqual({
        checkpoint: [0, 1],
        one: [0],
        testing: [0],
        getindex: [0],
        function: [0],
        two: [1],
        coming: [1],
        soon: [1],
      });
    });
});

describe('', () => {
  console.log(invalidBook, typeof invalidBook);
  invertedIndex.createIndex('test.json', invalidBook);
  it('Should return an object that is an accurate index of the json',
    () => {
      expect(invertedIndex.getIndex('test.json', invalidBook)).toEqual({
        honey: [0],
        i: [0],
        shrunked: [0],
        the: [0],
        kids: [0],
        an: [0],
        american: [0],
        movie: [0, 1],
        produced: [0],
        birds: [0],
        ant: [1],
        bully: [1],
        animated: [1],
        epic: [1],
        of: [1],
        ants: [1],
        bullying: [1],
        humans: [1],
      });
    });
});


// describe('Search Index', () => {
//   it('Should return correct index of the search term', () => {
//     expect(invertedIndex.searchIndex('Testing, soon', work)).toEqual({
//       'work.json': {
//         testing: [0],
//         soon: [1],
//       },
//     });
//   });
// });
// // Has issues with erasing search words fix before sunday
// describe('Search Index', () => {
//   it('Should return correct index of the search words', () => {
//     expect(invertedIndex.searchIndex('getIndex, Coming', work)).toEqual({
//       'work.json': {
//         getindex: [0],
//         coming: [1],
//       },
//     });
//   });
// });

// describe('Tokenize Index', () => {
//   it('should return tokenized words for tems', () => {
//     expect(invertedIndex.tokenize('work.json', work).toEqual());
//   });
// });

