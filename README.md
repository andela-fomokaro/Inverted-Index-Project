# Inverted-Index-Project

[![Code Climate](https://codeclimate.com/github/andela-fomokaro/Inverted-Index-Project/badges/gpa.svg?branch=develop)](https://codeclimate.com/github/andela-fomokaro/Inverted-Index-Project) [![Coverage Status](https://coveralls.io/repos/github/andela-fomokaro/Inverted-Index-Project/badge.svg?branch=develop)](https://coveralls.io/github/andela-fomokaro/Inverted-Index-Project?branch=develop)[![Build Status](https://travis-ci.org/andela-fomokaro/Inverted-Index-Project.svg?branch=develop)](https://travis-ci.org/andela-fomokaro/Inverted-Index-Project)



## Introduction

Inverted index takes a JSON array of text objects and creates an index from the array. The index allows a user to search for text blocks in the array that contain a specified collection of words.



## References

Inverted index - wikipedia.com

Inverted index - elastic search


## Limitations

This app can only work for JSON files with members having title and text properties.

## Running Locally

Follow the steps below to run the application locally on your machine.

Clone the repository: git clone <THIS_REPOSITORY_URL>
Enter into the apps directory by running cd Inverted-Index-Project
Install npm packages npm install
Run the app by typing gulp

## How to Use

Using this app is very simple and intuitive,

Start the deployed or local version of the application npm start as outlined above
Upload JSON files containing an array of object literals like the example below:

[{
  "title": "Alice is a girl",
  "text": "Alice went to school and never returned"
}]
Click on Create Index button after uploading and you will see a table containing mapped words and their document location
Use the search bar on the right side of the app display layout to perform search operations.

## Technology

HTML5
Javascript (NODEJS Environment)
Jasmine for Testing

## Testing

After setting up the local version of the application, run gulp test to run test


##Contributing
- Fork this repositry to your account.
- Clone your repositry: git clone git@github.com:your-username/inverted-index.git
- Create your feature branch: git checkout -b new-feature
- Commit your changes: git commit -m "did something"
- Push to the remote branch: git push origin new-feature
- Open a pull request.