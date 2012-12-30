// param1 'module name' is required because of an issue with the testing framework
define('singletonservice', ['servicea'], function(ServiceA) {

    var serviceA = new ServiceA("singleton service A");

    // interface hides object variables aka the module pattern
    return {
        sayYourName: function() {
            return serviceA.sayYourName();
        }
    }
});