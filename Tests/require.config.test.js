require.config({
    "baseUrl": "../../Scripts",

	"paths": {
		"helper": "../Tests/helper"
	},
	
    "map": {
        "*": {
            "testdependency-1": "../Tests/dep1.fake"
        }
    }
    
});