class Index {
  constructor() {
    this.index = {};
    this.temp_search = [];
  }
  // isValid(arrObject) {
  //   if (typeof arrObject === 'object') {
  //     const len = Object.keys(arrObject).length;
  //     if (len > 0) {
  //       for (const key in arrObject) {
  //         if (!arrObject[key].hasOwnProperty('title') && !arrObject[key].hasOwnProperty('text')) {
  //           throw new Error('Dosent have title and text');
  //         }
  //       }
  //     }
  //   }
  //   return true;
  // }

  tokenize(words) {
    const word = words.toLowerCase();
    return word.trim().replace(/[^a-zA-Z 0-9]+/g, '');
  }

  distinctWords(words) {
    const token = this.tokenize(words);
    return token.filter((item, index) =>
        token.indexOf(item) === index);
  }

  validateFile(file) {
    const jsonFile = file;
    let check = {
      status: true,
      msg: 'Valid File',
    };

    try {
      if (typeof file !== 'object' || file.length === 0) {
        check = {
          status: false,
          msg: 'File is empty please upload a new file',
        };
      }
      jsonFile.forEach((key) => {
        if (key.title === undefined || key.text === undefined) {
          check = {
            status: false,
            msg: 'Invalid file content',
          };
        }
      });
    } catch (error) {
      check = {
        status: false,
        msg: 'Invalid File',
      };
    }
    if (check.status === false) {
      throw new Error('Invalid file');
    }
  }
  createIndex(fileName, jsonObject) {
    const newIndex = {};

    try {
      jsonObject = JSON.parse(jsonObject);
    } catch(err) {
      throw new Error('Not a valid JSON file');
    }


    // this.isValid(fileName);
    this.validateFile(jsonObject);

    jsonObject.forEach((object, position) => {
      const longSentence = object.title + ' ' + object.text;
      const wordArray = longSentence.split(' ');

      wordArray.forEach((word, pos) => {
        word = this.tokenize(word);
        if (newIndex[word] === undefined) {
          newIndex[word] = [position];
        } else if (newIndex[word].indexOf(position) < 0) {
          newIndex[word].push(position);
        }
      });
    });
    this.index[fileName] = newIndex;
  }

  getIndex(fileName) {
    if (Object.keys(arguments).length < 1) {
      return this.index;
    } else {
      return this.index[fileName];
    }
  }
  flattenSearch() {
    for (const arg of arguments) {
      if (arg instanceof Object && typeof arg !== 'string') {
        for (const item in arg) {
          if (arg.hasOwnProperty(item)) {
            this.flattenSearch(arg[item]);
          }
        }
      } else {
        const args = arg.split(' ');
        args.forEach((word) => {
          this.temp_search.push(word);
        });
      }
    }
  }

  searchIndex(terms, fileName) {
    const selectedIndex = this.getIndex(fileName);
    const searchResult = {};
    this.flattenSearch(terms);
    terms = this.temp_search;

    terms.forEach((term) => {
      term = this.tokenize(term);

      if (selectedIndex) {
        Object.keys(selectedIndex).forEach((savedWord) => {
          if (savedWord === term) {
            searchResult[savedWord] = selectedIndex[savedWord];
          }
        });
      } else {
        const all_indices = this.getIndex();
        Object.keys(all_indices).forEach((fileName) => {
          searchResult[fileName] = this.searchIndex(terms, fileName);
        });
      }
    });
    return searchResult;
  }
}
