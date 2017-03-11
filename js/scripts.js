'use strict';
$(document).ready(function() {
    var form = $('#form-formula');
    var button = $('#formula-submit');
    var input = $('#inputFormula');

    form.submit( function(ev) {
        ev.preventDefault();
    });

    button.on('click',function() {
        if ('undefined' !== typeof input && 0 < input.length) {
            var value = input.val();
            if ('' !== value) {
                checkValue(value);
            } else {

            }
        }
    });

    input.on('change',function() {
        var value = $(this).val();
        if ('' !== value) {
            checkValue(value);
        } else {

        }
    });

    function checkValue(val) {
        console.log('value',val);
    }
});

