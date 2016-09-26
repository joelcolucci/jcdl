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


});