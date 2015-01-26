require.config({
    "paths": {
		"jquery": "jquery-2.1.1",
		"testdependency-1": "dep1",
		"testdependency-2": "dep2"
    },
	"shim": {
        "jquery": {
            "deps": [],
            "exports": "$"
        },
	}
});