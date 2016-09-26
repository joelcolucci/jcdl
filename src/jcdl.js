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
            // Transform to CSV

            // Encode string

            // Build data:uri href

            // Create jQuery anchor

            // Set href attribute

            // Set download attribute
            return $('<a></a>');
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