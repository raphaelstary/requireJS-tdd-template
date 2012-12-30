require(['app', 'game', 'renderer', 'connector', 'lib/domReady'], function (App, Game, Renderer, Connector) {

    var screen = document.getElementById('screen');
    var background = document.getElementById('background');

    var pointer = {
        DOWN:'mousedown',
        UP:'mouseup',
        MOVE:'mousemove'
    };

    var renderer = new Renderer(screen, screen.getContext('2d'), background, background.getContext('2d'));

//    var ui = new Ui(renderer);

//    if (Modernizr.touch) {
//        pointer.DOWN = 'touchstart';
//        pointer.UP = 'touchend';
//        pointer.MOVE = 'touchmove';
//
//        document.body.addEventListener('gestureend', function (e) {
//            ui.gestureEnd(e);
//        }, false);

//    } else {
//        document.body.addEventListener('mousewheel', function (e) {
//            ui.scroll(e);
//        }, false);

//        document.body.addEventListener('DOMMouseScroll', function (e) {
//            ui.scroll(e);
//        }, false);
//    }

    window.addEventListener('resize', function () {
//        ui.resizeScreen(document.body.clientWidth, document.body.clientHeight);
    }, false);

//    screen.addEventListener(pointer.DOWN, function (e) {
//        ui.pointerDown(e);
//    }, false);

//    document.body.addEventListener(pointer.UP, function (e) {
//        ui.pointerUp(e);
//    }, false);

//    screen.addEventListener(pointer.MOVE, function (e) {
//        ui.drag(e);
//    }, false);

    var app = new App(renderer, new Game(), null, new Connector(), document.body.clientWidth, document.body.clientHeight);
    app.run();

});