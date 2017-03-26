# Inverted-Index-Project

[![Code Climate](https://codeclimate.com/github/andela-fomokaro/Inverted-Index-Project/badges/gpa.svg)](https://codeclimate.com/github/andela-fomokaro/Inverted-Index-Project) [![Coverage Status](https://coveralls.io/repos/github/andela-fomokaro/Inverted-Index-Project/badge.svg?branch=features)](https://coveralls.io/github/andela-fomokaro/Inverted-Index-Project?branch=features) [![Build Status](https://travis-ci.org/andela-fomokaro/Inverted-Index-Project.svg?branch=develop)](https://travis-ci.org/andela-fomokaro/Inverted-Index-Project)



## Concept

Once upon a time in the realm of computer science, computers became good enough to support storage of very large files and documents and then came the problem of searching for a little parts in large files. The traditional approach was to loop through the whole file to find the little block of text which was not very efficient. The saviour came and a concept in CS known as elastic search (say: Inverted Index)

The purpose of an inverted index is to allow fast full text searches, at a cost of increased processing when a document is added to the database.

## References

Inverted index - wikipedia.com

Inverted index - elastic search

## Use Cases

You have large number of documents you need to perform search operations on.

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
  "title": "The Sugar Girl",
  "text": "Ralia is lost in the forest and the whole village is in search for her, an innocent witch also accused"
}]
Click on Create Index button after uploading and you will see a table containing mapped words and their document location
Use the search bar on the right side of the app display layout to perform search operations.

## Technology

HTML5
Javascript (NODEJS Environment)
Jasmine for Testing

## Testing

After setting up the local version of the application, run gulp test to run test