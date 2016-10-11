var express			= require('express'),
	router			= express.Router(),
	path 			= require('path'),
	siteController 	= require('./controllers/site.controller');

//export the router
module.exports = router;

//site routes
router.get('/',			siteController.showHome);