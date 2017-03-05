# Liquid Linter

A node package that lets you lint liquid template strings.

## Installation

```
npm install --save liquid-linter
```

## Usage

```javascript
var linter = require('liquid-linter');
var testString = "{% capture %} Lorem ipsum dolor {% endcapture %}";

linter.lintString(testString, function(err) {
  if(err) {
    console.log(err);
  };
});
```

## CLI usage

If you are looking to use the liquid linter as a cli tool, @Potherca created a wrapper around this package, which you can find here: https://github.com/DealerDirect/liquid-linter-cli

## Methods

* `lintFile(filepath, callback)`
* `lintString(testString, callback)`
* `lintFilePromise(filepath)`
* `lintStringPromise(testString)`
* `loadTags({blocks: [], tags:[]})`

### lintFile(filepath, callback)

**filepath**: Path to a file that needs linting
**callback**: function that gets an error array

### lintString(string, callback)

**string**: String that needs linting
**callback**: function that gets an error array

### lintFilePromise(filepath)

**filepath**: Path to a file that needs linting
Returns a thenable promise with the error array

### lintStringPromise(string)

**string**: String that needs linting
Returns a thenable promise with the error array


### loadTags(obj)

Liquid is a very extendable language, and you might want to have your custom tags validate in the linter as well. The `loadTags` function will let you register dummy block and simple tags, so the linter will pass.

**obj**: The passed object contains of two properties `blocks` and `tags`

Example:

```javascript
var linter = require('liquid-linter');
var testString = "{% section %} Lorem ipsum dolor  {% button text='Buttontext' %} {% endsection %}";

linter.loadTags({
  blocks: ["section"],
  tags: ["button", "color"]
});

linter.lintString(testString, function(err) {
  if(err) {
    console.log(err);
  };
});
```


## Error object

The error object contains the following properties:
```javascript
{
  name: String        // the name of the Liquid error raised
  message: String     // Errormessage of what went wrong
  location: {
    line: Number     // Line in which the error occured
    col: Number      // Column in which the error occured
    length: Number   // Length of the errorous string
  }
}
```


## License
The MIT License (MIT)
Copyright © 2016, Thomas Heller <office@thomasheller.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
