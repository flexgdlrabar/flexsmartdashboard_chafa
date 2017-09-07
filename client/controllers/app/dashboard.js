angular.module('app').controller('app_dashboard', app_dashboard);
function app_dashboard($scope, app) {
    'use strict';
    app.init($scope);
    data = JSON.parse('{"Site":"Test", "Building": "04"}');
}