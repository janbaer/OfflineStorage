/// <reference path="knockout-2.1.0.debug.js"/>

(function () {
    
    var Employee = function (id, name) {
        this.id = id;
        this.name = name;
    };
    
    var ViewModel = function () {
        employees: ko.observableArray([
            new Employee(1, "Max Mustermann"),
            new Employee(2, "Paul Panzer")
        ]);
    };

    var init = function () {
        ko.applyBindings(new ViewModel());
    };

    var load = function() {
                
    };

    var add = function() {
        
    };

    init();
}());