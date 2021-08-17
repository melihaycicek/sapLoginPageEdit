sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("project.App", {
			
                onPress: function() {
       window.location.href="https://workspaces-ws-rtzbl-app1.eu10.trial.applicationstudio.cloud.sap/giris.html";  
     }
           
            
		});
	});
