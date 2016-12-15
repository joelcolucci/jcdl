describe('jcdl', function() {


    describe('getDownloadLink', function() {
        var jsonData;

        beforeEach(function() {
            jsonData = [
                {
                    "title": "Creativity Inc",
                    "author": "Ed Catmull",
                    "meta": {
                        "keywords": "business,leadership",
                        "genre": "businees"
                    }
                },
                {
                    "title": "Ego is the Enemy",
                    "author": "Ryan Holiday",
                    "meta": {
                        "keywords": "philosophy",
                        "genre": "philosophy"
                    }
                }
            ]; 
        });

        it('should throw TypeError if no argument defined', function() {
            expect(function() {
                $.jcdl.getDownloadLink();
            }).to.throw();
        });

        it('should return a jQuery DOM object', function() {
            var $downloadLink = $.jcdl.getDownloadLink(jsonData);

            var isJqueryObject = $downloadLink instanceof jQuery;

            expect(isJqueryObject).to.be.true;
        });

        it('should have a download attribute', function() {
            var $downloadLink = $.jcdl.getDownloadLink(jsonData);

            var downloadAttr = $downloadLink.attr('download');

            expect(downloadAttr).to.be.ok;
        });

        it('should have data uri href', function() {
            var $downloadLink = $.jcdl.getDownloadLink(jsonData);

            var href = $downloadLink.attr('href');

            expect(href).to.be.ok;
        });

    });


    describe('_transformToCsv', function() {
        // Wrapper around jQuery-csv call fromObjects method

        it('flattens nested JSON', function() {

        });
        
    });


    describe('_encodeString', function() {
        // Wrapper around encodeURIComponent method
    });


    describe('_createDataUriHref', function() {

        var csvString,
        dataUriString;

        beforeEach(function() {
            csvString= 'title,content\n,Hello, world\n,Goodbye, world';
            dataUriString = $.jcdl._createDataUriHref(csvString);
        })

        it('should contain correct media type', function() {
            var containsMediaType = dataUriString.indexOf('text/csv') > 0 ? true : false;
            expect(containsMediaType).to.be.true;
        });

        it('should contain correct charset', function() {
            var containsCharset = dataUriString.indexOf('charset=utf-8') > 0 ? true : false;

            expect(containsCharset).to.be.true;
        });

        it('should contain str data', function() {
            var containsStringData = dataUriString.indexOf(csvString) > 0 ? true : false;

            expect(containsStringData).to.be.true;
        })

    });


});