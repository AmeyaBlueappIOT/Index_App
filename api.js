(function() {

    var gateway = null;
    
    class API {
        constructor() {
        
        gateway = navigator.bluetooth.gateway;
        console.log("gateway--");
        }
        
        }
        
         window.api = new API();
})();
