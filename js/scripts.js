'use strict';
$(document).ready(function() {
    WebFont.load({
        google: {
            families: ['Lora:400,700']
        }
    });
    var form = $('#form-formula');
    var input = $('#inputFormula');

    form.submit( function(ev) {
        ev.preventDefault();
    });

    input.on('change',function() {
        var value = $(this).val();
        if ('' !== value) {
            checkValue(value);
        } else {
            //show alert about empty
        }
    });

    function checkValue(val) {
        //get formula from vocalbury
        var viewer = $('#formula-viewer');
        var canvas = $('#formula-canvas');
        var width = parseInt(canvas.width());
        var height = parseInt(canvas.height());
        viewer.html('');
        var equation = '';
        var formula = '';
        var elems = {};
        if ('water' === val) {
            equation = 'H<sub>2</sub>O';
            elems = {'H':2,'O':1};
            formula = 'H2O';
        } else if ('oxygen' === val) {
            equation = 'O<sub>2</sub>';
            elems = {'O':2};
            formula = 'O2';
        } else if ('methane' === val) {
            equation = 'CH<sub>4</sub>';
            elems = {'C':1,'H':4};
            formula = 'CH4';
        }
        viewer.html(equation);
        getCSSImage(formula, function(circles) {
            var stage = new Konva.Stage({
                container: 'formula-canvas',
                width: width,
                height: height
            });
            var layer = new Konva.Layer();

            for(var i=0; i< circles.length; i++) {
                var atom = new Konva.Ellipse({
                    x: circles[i].pos_x,
                    y: circles[i].pos_y,
                    radius: {
                        x: circles[i].radius,
                        y: circles[i].radius
                    },
                    fill: circles[i].color,
                    stroke: 'black',
                    strokeWidth: 1
                });
                layer.add(atom);
            }

            stage.add(layer);
            layer.draw();
        });
    }
});

function getCSSImage(formula, callback) {
    var result = [];
    var item = {};
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