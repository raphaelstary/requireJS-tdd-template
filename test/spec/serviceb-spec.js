require(['serviceb'], function (ServiceB) {

    describe("a description for Service B", function () {

        var serviceMock = {
            sayYourName: function () {
                return 'test';
            }
        };

        it ("should return greetings, " +
            "when I call sayHello", function() {

            var cut = new ServiceB(serviceMock);

            expect(cut.sayHello()).toBe("Hello from 'test'");
        });


    })
});