# jcdl [![Build Status](https://travis-ci.org/joelcolucci/jcdl.svg?branch=master)](https://travis-ci.org/joelcolucci/jcdl) [![Code Climate](https://codeclimate.com/github/joelcolucci/jcdl/badges/gpa.svg)](https://codeclimate.com/github/joelcolucci/jcdl) [![Test Coverage](https://codeclimate.com/github/joelcolucci/jcdl/badges/coverage.svg)](https://codeclimate.com/github/joelcolucci/jcdl/coverage)
Client-side JSON to CSV file downloads made easy.

Pass in a JavaScript object, get back a data-uri link to instantly download data as a CSV file.

#### Built with..
The heavy lifting (JSON to CSV transformation) is done with https://github.com/evanplaice/jquery-csv.

#### Additional credit to..
API inspiration comes from https://github.com/konklone/json

## Installation
Install with NPM..
```
npm install --save jcdl
```

## Getting started
```javascript
// Array of objects
var json = [...]

var $downloadLink = $.jcdl.getDownloadLink(json);

$('#main').append($downloadLink);
```

## License
MIT License Copyright (c) 2016 Joel Colucci