sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({viewName: "project.view.Giris"}).then(function (oView) {
		oView.placeAt("content");
	});
});