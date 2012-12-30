// param1 'module name' is required because of an issue with the testing framework
define('serviceb', function() {

    /**
     * creates a new service a instance
     *
     * @constructor
     */
    function ServiceB(serviceA) {
        this.serviceA = serviceA;
    }

    /**
     * decorate service a's output
     *
     * @return {String}
     */
    ServiceB.prototype.sayHello = function () {
        return "Hello from '" + this.serviceA.sayYourName() + "'";
    };

    return ServiceB;
});