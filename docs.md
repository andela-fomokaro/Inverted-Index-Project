## Classes

<dl>
<dt><a href="#InvertedIndex">InvertedIndex</a></dt>
<dd><p>Implementation of the inverted index data structure.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#tokenize">tokenize(words)</a> ⇒ <code>String</code></dt>
<dd><p>It returns the words passed in small letters and spaces removed</p>
</dd>
<dt><a href="#validateFile">validateFile(file)</a> ⇒ <code>object</code></dt>
<dd><p>It validates the file passed and returns the error message</p>
</dd>
<dt><a href="#createIndex">createIndex(fileName, jsonObject)</a> ⇒ <code>number</code></dt>
<dd><p>It returns the index of the file passed</p>
</dd>
<dt><a href="#getIndex">getIndex(fileName)</a> ⇒ <code>object</code></dt>
<dd><p>It returns the index of the words</p>
</dd>
<dt><a href="#flattenSearch">flattenSearch(arguments)</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#searchIndex">searchIndex(sTerms, fileName)</a> ⇒ <code>Object</code></dt>
<dd><p>it returns the word searched for in the object it was found</p>
</dd>
</dl>

<a name="InvertedIndex"></a>

## InvertedIndex
Implementation of the inverted index data structure.

**Kind**: global class  
**Author**: Omokaro Faith <faith.omokaro@andela.com>  

* [InvertedIndex](#InvertedIndex)
    * [new InvertedIndex()](#new_InvertedIndex_new)
    * [.readFile(file, callback)](#InvertedIndex.readFile) ⇒ <code>void</code>

<a name="new_InvertedIndex_new"></a>

### new InvertedIndex()
Creates an instance of InvertedIndex.

<a name="InvertedIndex.readFile"></a>

### InvertedIndex.readFile(file, callback) ⇒ <code>void</code>
Reads the data from an uploaded file.

**Kind**: static method of <code>[InvertedIndex](#InvertedIndex)</code>  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>File</code> | The file to be read |
| callback | <code>function</code> | The callback function on file read |

<a name="tokenize"></a>

## tokenize(words) ⇒ <code>String</code>
It returns the words passed in small letters and spaces removed

**Kind**: global function  
**Returns**: <code>String</code> - this.token  

| Param | Type |
| --- | --- |
| words | <code>string</code> | 

<a name="validateFile"></a>

## validateFile(file) ⇒ <code>object</code>
It validates the file passed and returns the error message

**Kind**: global function  
**Returns**: <code>object</code> - validates the file passed  

| Param | Type |
| --- | --- |
| file | <code>String</code> | 

<a name="createIndex"></a>

## createIndex(fileName, jsonObject) ⇒ <code>number</code>
It returns the index of the file passed

**Kind**: global function  
**Returns**: <code>number</code> - returns the position on the file  

| Param | Type |
| --- | --- |
| fileName | <code>Object</code> | 
| jsonObject | <code>Object</code> | 

<a name="getIndex"></a>

## getIndex(fileName) ⇒ <code>object</code>
It returns the index of the words

**Kind**: global function  
**Returns**: <code>object</code> - gets the index  

| Param | Type |
| --- | --- |
| fileName | <code>Object</code> | 

<a name="flattenSearch"></a>

## flattenSearch(arguments) ⇒ <code>Array</code>
**Kind**: global function  
**Returns**: <code>Array</code> - array of terms  

| Param | Type | Description |
| --- | --- | --- |
| arguments | <code>void</code> | of terms |

<a name="searchIndex"></a>

## searchIndex(sTerms, fileName) ⇒ <code>Object</code>
it returns the word searched for in the object it was found

**Kind**: global function  
**Returns**: <code>Object</code> - search result  

| Param | Type |
| --- | --- |
| sTerms | <code>String</code> | 
| fileName | <code>String</code> | 

