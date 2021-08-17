sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
	"use strict";

	return Controller.extend("project.Giris", {
        onBackButton: function() {
       window.location.href="https://workspaces-ws-rtzbl-app1.eu10.trial.applicationstudio.cloud.sap/index.html";  
     },
		onPress : function () {
			MessageToast.show("Hello App!");
        },
        	onLogin : function () {
            var userno = this.getView().byId('sicilId')
            var password = this.getView().byId('passwordId')
            
            
            var user ="1234";
            var pass = "456";

           

            if(userno.getValue() === '' ){
                    MessageBox.error("Lütfen Sicil No Giriniz!!");
                    return;
            }else if(password.getValue() == ''){
                    MessageBox.error("Lütfen Şifreyi Giriniz!!");
                    return;
            }else{
                if(userno.getValue() === user && password.getValue() === pass){
                    MessageBox.success("Giriş Başarılı!");
                    MessageToast.show("Hello App!");
                }else{
                    MessageBox.error("Sicil No veya Şifre Hatalı!!");
                    return;
                }
            }
			
        },

        
        


        
	});

});