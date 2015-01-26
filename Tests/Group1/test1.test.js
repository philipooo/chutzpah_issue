define(function () {

    require.config({
        "map": {
            "*": {
                "testdependency-1": null
            }
        }
    });

    require([ "testdependency-1", "testdependency-2", "helper" ], function(testdependency1, testdependency2, helper) {

        asyncTest("test1", 1, function () {

			equal(testdependency1(), 1, "ok");
		
            start();

        });

    });

});