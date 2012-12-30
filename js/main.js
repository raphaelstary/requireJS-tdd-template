require(['serviceb', 'servicea', 'singletonservice', 'lib/domReady'], function (ServiceB, ServiceA, singletonService) {

    var serviceB = new ServiceB(new ServiceA("new service A instance"));

    var p = document.getElementById('helloWorld');

    p.innerHTML = serviceB.sayHello() + " and a Hello from '" + singletonService.sayYourName() + "'";

});