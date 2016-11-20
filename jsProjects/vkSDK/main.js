VK.init(function() {
		console.log('success');
		VK.callMethod("showSettingsBox", 8214);
		// API initialization succeeded
     	// Your code here 
	}, function() {
		console.log('error');
		// API initialization failed
     	// Can reload page here 
}, '5.59');

