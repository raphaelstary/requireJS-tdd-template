// param1 'module name' is required because of an issue with the testing framework
define('servicea', function() {

    /**
     * creates a new instance of service a
     *
     * @param name      a string for the given name for a service, must be not-null or empty
     * @constructor
     */
    function ServiceA(name) {
        this.name = name;
    }

    /**
     * request the given name
     *
     * @return {String}
     */
    ServiceA.prototype.sayYourName = function () {
        return this.name;
    };

    return ServiceA;
});