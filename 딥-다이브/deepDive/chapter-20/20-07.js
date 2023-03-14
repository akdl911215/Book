(function () {
    // non-strict mode
    var let = 10; // The error does not occur.

    function foo () {
        'use strict';

        // let = 20; // SyntaxError: Unexpected strict mode reserved word
    }
    foo();
}());