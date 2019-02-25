(function() {
  'use strict';

  angular
    .module('challengecharlie')
    .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$scope', '$state'];
  function AppCtrl($scope, $state) {
    var vm = this;

    activate();

    function activate() { }
  }
})();