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

  /**
   * jcdl defaults
   * Encapsulates the method paramater defaults for the jcdl plugin module.
   */

    $.jcdl = {

        /**
         * 
         * createDownloadLink
         * @param {string} json
         * 
         */
    
        getDownloadLink: function(json) {
            if (json == null) {
                throw new TypeError("Argument 'json' must be defined");
            }

            // Transform to CSV
            var csvStr = $.jcdl._transformToCsv(json);

            // Encode string
            var encodedCsvStr = $.jcdl._encodeString(csvStr);

            // Build data:uri href
            var dataUri = $.jcdl._createDataUriHref(encodedCsvStr);

            // Create jQuery anchor
            var $downloadLink = $('<a></a>');

            // Set href attribute
            $downloadLink.attr('href', dataUri);

            // Set download attribute
            $downloadLink.attr('download', true);

            return $downloadLink;
        },


        /**
         * 
         * _transformToCsv
         * @param {string} json
         * 
         */

        _transformToCsv: function(json) {
            return $.csv.fromObjects(json);
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
         * _encodeString
         * @param {string} string
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