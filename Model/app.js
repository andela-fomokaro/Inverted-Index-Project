const app = angular.module('inverted_index', []);
app.controller('myController', ['$scope', ($scope) => {
  const invertedIndex = new Index();
  $scope.documents = [];
  $scope.fileNames = [];
  $scope.numberOfDocuments = {};
  $scope.indices = {};
  $scope.showUploaded = false;
  $scope.showTable = false;
  $scope.showSearch = false;
  $scope.file = {};
  $scope.indexAtr = {};
  $scope.filesToSearch = [];
  $scope.fileContent = {};
  $scope.search = {};

  const file = document.getElementById('files');
  const indexBtn = document.getElementById('index');
  const selectFiles = document.getElementById('selectFiles');
  const search = document.getElementById('searchTerms');
  const fileName = $scope.selectFiles;

  file.addEventListener('change', () => {
    $scope.uploadFile(file);
  });

  $scope.uploadFile = (file) => {
    file = file.files;
    for (let i = 0; i < file.length; i += 1) {
      const fileExtension = file[i].name.split('.').pop();
      if (fileExtension !== 'json') {
        return toastr.error('This is not a json file');
      }
      if ($scope.fileNames.includes(file[i].name)) {
        return toastr.error(`${file[i].name} has already been uploaded`, 'Error');
      }
      $scope.documents = $scope.fileNames.push(file[i].name);
      $scope.showUploaded = true;
      // $scope.$apply($scope.documents);
      $scope.$apply();
      toastr.success(`${file[i].name} uploaded successfully`, 'Success');

      const reader = new FileReader();
      reader.onload = () => {
        $scope.fileContent[file[i].name] = reader.result;
        $scope.$apply();
      };
      reader.readAsText(file[i]);
    }
    console.log("++++++++upload", $scope.fileContent)
  };

  $scope.createIndex = () => {
    const fileName = document.getElementById('selectFile').value;
    let fileContent = $scope.fileContent[fileName];

    if (fileName.length === 0) {
      return toastr.error('Please upload a file before you create index', 'Error');
    } else {
      try {
        fileContent = JSON.parse(fileContent);
        invertedIndex.createIndex(fileName, fileContent);
      } catch (err) {
        toastr.error(err.message);
      }

      const index = invertedIndex.getIndex(fileName);
      $scope.indices[fileName] = index;

      $scope.fileContent[fileName] = fileContent;
      const length = fileContent.length;
      const temp = [];
      for (let i = 0; i < length; i++) {
        temp.push(i);
      }

      $scope.numberOfDocuments[fileName] = temp;
      $scope.filesToSearch.push(fileName);
      $scope.showTable = true;
      console.log($scope.indices);
    }
  };


  $scope.searchIndex = () => {
    const filename = document.getElementById('selectSearchFile').value;
    const words = $scope.searchString;
    if (filename !== 'Select file') {
      $scope.searchFileName = filename;
      $scope.searchResult = invertedIndex.searchIndex(words, filename);
      $scope.showSearch = true;
      $scope.showSearchAllFiles = false;
    } else {
      $scope.searchResultAllFiles = invertedIndex.searchIndex(words, filename);
      $scope.showSearch = false;
      $scope.showSearchAllFiles = true;
    }
  };
  $scope.clearSearch = () => {
    $scope.searchString = '';
    $scope.showSearch = false;
    $scope.showSearchAllFiles = false;
  }
}]);

