require(['servicea'], function (ServiceA) {
    describe("a description for Service A", function () {

        it ("should return undefined, " +
            "when I call sayYourName", function() {

            var cut = new ServiceA();

            expect(cut.sayYourName()).toBeUndefined();
        });

        it ("should return the given name, " +
            "when I call sayYourName " +
            "given it has been initialised with a name", function() {

            var cut = new ServiceA("oi8sdhjk30");

            expect(cut.sayYourName()).toBe("oi8sdhjk30");
        });


    })
});