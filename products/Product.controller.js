sap.ui.controller("products.Product", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf product.Product
*/
	onInit: function() {
		var oModel= sap.ui.model.odata.ODataModel("proxy/http/services.odata.org/V4/OData/OData.svc");
		oModel.oHeaders = {
			"DataServiceVersion": "4.0",
			"MaxDataServiceVersion": "4.0"
			
			
		}
		sap.ui.getCore().setModel(oModel,"products");
//		console.log(oModel);

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf product.Product
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf product.Product
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf product.Product
*/
//	onExit: function() {
//
//	}
	create:function(){
		
	},
	
	edit:function(){
		
	},
	
	remove:function(){
		
	},
	save:function(){
		
	}

});