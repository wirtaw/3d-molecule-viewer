'use strict';
$(document).ready(function() {
    WebFont.load({
        google: {
            families: ['Lora:400,700']
        }
    });
    let form = $('#form-formula');
    let input = $('#inputFormula');

    form.submit( function(ev) {
        ev.preventDefault();
    });

});

function getCSSImage(formula, callback) {
    let result = [];
    let item = {};
    switch(formula) {
        case 'H2O':
            item = {
                pos_x: 60,
                pos_y: 170,
                radius: 50,
                color: '#d5ddde'
            };
            result.push(item);
            item = {
                pos_x: 110,
                pos_y: 90,
                radius: 80,
                color: '#0327c0'
            };
            result.push(item);
            item = {
                pos_x: 160,
                pos_y: 170,
                radius: 50,
                color: '#d5ddde'
            };
            result.push(item);
            break;
        case 'O2':
            item = {
                pos_x: 100,
                pos_y: 160,
                radius: 80,
                color: '#0327c0'
            };
            result.push(item);
            item = {
                pos_x: 180,
                pos_y: 160,
                radius: 80,
                color: '#0327c0'
            };
            result.push(item);
            break;
        case 'CH4':
            item = {
                pos_x: 60,
                pos_y: 260,
                radius: 50,
                color: '#d5ddde'
            };
            result.push(item);
            item = {
                pos_x: 240,
                pos_y: 260,
                radius: 50,
                color: '#d5ddde'
            };
            result.push(item);
            item = {
                pos_x: 140,
                pos_y: 200,
                radius: 100,
                color: '#2d2d2d'
            };
            result.push(item);

            item = {
                pos_x: 120,
                pos_y: 120,
                radius: 50,
                color: '#d5ddde'
            };
            result.push(item);
            item = {
                pos_x: 100,
                pos_y: 260,
                radius: 50,
                color: '#d5ddde'
            };
            result.push(item);
            break;
    }
    callback(result);
}