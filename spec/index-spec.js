const Index = require('../Model/inverted-index');
const invertedIndex = new Index();
const validBook = require('../files/books.json');
const emptyBook = require('../files/empty.json');
const invalidBook = require('../files/test.json');

// invertedIndex.createIndex('books.json', validBook);
// invertedIndex.createIndex('feedback.json', feedbackBook);

// this is test suite
/*
describe('Read book data', () => {
  it('Should return false for empty json file', () => {
    expect(invertedIndex.validateFile(emptyBook).status).toEqual(false);
  });

  it('Should return true for valid json file', () => {
    expect(invertedIndex.validateFile(feedbackBook).status).toEqual(true);
  });

  const report = 'Invalid file content';
  it(`Should return ${report} if json does not contain title and text`, () => {
    expect(invertedIndex.validateFile(invalidBook).msg).toEqual(report);
  });

  const result = 'Invalid File';
  it(`Should return ${result} for empty json file`, () => {
    expect(invertedIndex.validateFile(noContent).msg).toEqual(result);
  });
});
*/

describe('Populate Index', () => {
  it('Should ensure that index is created once the file has been read', () => {
    expect(invertedIndex.getIndex('books.json', validBook)).toBeDefined();
  });

  it('Should return an object that is an accurate index of the json file',
    () => {
      expect(invertedIndex.getIndex('feedback.json')).toEqual({
        checkpoint: [0, 1],
        one: [0],
        testing: [0],
        getindex: [0],
        function: [0],
        two: [1],
        coming: [1],
        soon: [1]
      });
    });
});

describe('Search Index', () => {
  it('Should return correct index of the search term', () => {
    expect(invertedIndex.searchIndex('alice, a')).toEqual({
      'books.json': {
        alice: [0],
        a: [0, 1]
      },
      'feedback.json': {}
    });
  });

  it('Should return empty object if no result is found',
    () => {
      expect(invertedIndex.searchIndex(
      'along', invertedIndex.getIndex()[0])).toEqual({
        'books.json': {},
        'feedback.json': {}
      });
    });

  it('Should return correct index in an array search terms', () => {
    expect(invertedIndex.searchIndex('checkpoint [one]')).toEqual({
      'books.json': {},
      'feedback.json': {
        checkpoint: [0, 1],
        one: [0]
      }
    });
  });
});
