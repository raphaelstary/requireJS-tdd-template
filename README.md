requireJS-tdd-template
======================

is a project template for large javascript projects. It integrates RequireJS, Jasmine, jsTestDriver and Apache Maven.
You find the source in js/ and all tests in test/spec/

jsTestDriver IDE plugin
-----------

The easiest way to run tests and do the TDD is running tests within your IDE with the jsTestDriver plugin.
Start it with the jsTestDriver.conf file.

Local Jasmine Spec Runner
-----------

Open the file test/runner.html in a browser. You have to include all spec files manually in the runner.html file.
This is the easiest method to execute because you need nothing installed (neither maven nor jsTestDriver plugin).
It's the only execution method, where you have to include new spec files manually.


Headless command line testing
-----------

With this method you run headless tests with maven. It's best for build server integration.
Apache Maven is required. The tests run during the maven test phase, to start it locally run the test goal or any later phase:

    mvn clean test


Cross browser command line testing
-----------

To run jsTestDriver with maven. You actually need a browser and some kind of display for this method,
so it won't work out of the box with server instances without display. Run:

    mvn clean test -Pjstd

or with a specific browser path

    mvn clean test -DbrowserPath=/usr/bin/firefox -Pjstd
