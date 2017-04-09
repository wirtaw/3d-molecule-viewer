/**
 * Created by wirtaw on 17.3.31.
 */

new Vue({
    el: '#app-input-viewer',
    data: {
        id: 'ChemicalElems',
        message: 'Select checmical formula',
        canvas: '',
        formula: 'Formula',
        stage: null,
        list : [
            {id:1, title: 'water', formula:'H2O', formula_html:'H<sub>2</sub>O'},
            {id:2, title: 'oxygen', formula:'O2', formula_html:'O<sub>2</sub>'},
            {id:3, title: 'methane', formula:'CH4', formula_html:'CH<sub>4</sub>'}
        ]
    },
    methods: {
        selectMaterial: function (event) {
            let canvas = $('#formula-canvas');
            let width = parseInt(canvas.width());
            let height = parseInt(canvas.height());
            let $message = this.message;
            let $stage = this.stage;
            let $layer = null;
            let formula = '';
            let self = this;
            this.list.forEach(function(elem) {
                if ($message === elem.title) {
                    $message = elem.formula_html;
                    formula = elem.formula;
                }
            });
            getCSSImage(formula, function(circles) {
                if (null === $stage) {
                    $stage = new Konva.Stage({
                        container: 'formula-canvas',
                        width: width,
                        height: height
                    });
                }
                let exists = $stage.find('#topLayer')[0];
                if ('undefined' !== typeof exists) {
                    exists.destroy();
                }
                $layer = new Konva.Layer({id : 'topLayer'});

                for(let i=0; i< circles.length; i++) {
                    let atom = new Konva.Ellipse({
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
                    $layer.add(atom);
                }

                $stage.add($layer);
                $layer.draw();
                self.stage = $stage;
            });
        }
    }
});
