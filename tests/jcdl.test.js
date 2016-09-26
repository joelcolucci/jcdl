describe('jcdl', function() {


    describe('getDownloadLink', function() {

        it('return a jQuery DOM object', function() {
            var downloadLink = $.jcdl.getDownloadLink();

            var isJqueryObject = downloadLink instanceof jQuery;

            expect(isJqueryObject).toBe(true);
        });

        it('should have a download attribute', function() {

        });

        it('should have data uri href', function() {

        });

    });


    describe('_transformToCsv', function() {
        // Wrapper around jQuery-csv call fromObjects method
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
            expect(containsMediaType).toBe(true);
        });

        it('should contain correct charset', function() {
            var containsCharset = dataUriString.indexOf('charset=utf-8') > 0 ? true : false;

            expect(containsCharset).toBe(true);
        });

        it('should contain str data', function() {
            var containsStringData = dataUriString.indexOf(csvString) > 0 ? true : false;

            expect(containsStringData).toBe(true);
        })

    });


});