/**
 * 
 * jcdl - (jQuery plugin)
 * 
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright (c) 2016 Joel Colucci
 * 
 */

(function($) {
    'use strict'

    $.jcdl = {

        /**
         * 
         * getDownloadLink
         * @param {array} data
         * 
         */
    
        getDownloadLink: function(data) {
            if (data == null) {
                throw new TypeError("Argument 'data' must be defined");
            }

            var csvStr = $.jcdl._transformToCsv(data);
            var encodedCsvStr = $.jcdl._encodeString(csvStr);

            var dataUri = $.jcdl._createDataUriHref(encodedCsvStr);

            var $downloadLink = $('<a>Download</a>');
            $downloadLink.attr('href', dataUri);
            $downloadLink.attr('download', 'download');

            return $downloadLink;
        },


        /**
         * 
         * _transformToCsv
         * @param {array} data - array of objects
         * 
         */

        _transformToCsv: function(data) {
            var flattenedData = flatten2.flattenMany(data);

            return $.csv.fromObjects(flattenedData);
        },


        /**
         * 
         * _encodeString
         * @param {string} string
         * @return {string}
         * 
         */

        _encodeString: function(str) {
            return encodeURIComponent(str);
        },


        /**
         * 
         * _createDataUriHref
         * @param {string} string - encoded string of data
         * @return {string}
         * 
         */

        _createDataUriHref: function(str) {
            return [
                'data:',
                'text/csv;',
                'charset=utf-8,',
                str  
            ].join('');
        }, 

    };


})(jQuery);