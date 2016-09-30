# jcdl
Client-side JSON to CSV file downloads made easy.

Pass in a JavaScript object, get back a data-uri link to instantly download data as a CSV file.

#### Built with..
The heavy lifting (JSON to CSV transformation) is done with https://github.com/evanplaice/jquery-csv.
Note, this module is included in the distribution.

#### Additional credit to..
API inspiration comes from https://github.com/konklone/json

## Installation
Install with NPM..
```
Coming soon...
```

Install with bower..
```
bower install --save jcdl
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