require(['renderer'], function (Renderer) {

    describe("a renderer instance renders the screen", function () {
        var screen, ctx = null;

        beforeEach(function () {
            ctx = {
                fillRect: function (xa,ya,xb,yb) {},
                fillText: function (txt, x, y) {},
                measureText: function(txt) {
                    return {
                        width: 50
                    };
                }
            };
            screen = {
                width: 0,
                height: 0
            };
            spyOn(ctx, 'fillRect');
            spyOn(ctx, 'fillText');
        });

        it("should render the start screen, " +
            "when I call renderStartScreen", function () {

            var cut =  new Renderer(screen, ctx);
            cut.renderStartScreen(300, 150);

            expect(screen.width).toBe(300);
            expect(screen.height).toBe(150);

            expect(ctx.fillRect).toHaveBeenCalledWith(0, 0, 300, 150);
            expect(ctx.fillText).toHaveBeenCalledWith("Tap to start", 125, 75);
        });
    });
});