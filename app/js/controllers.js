(function() {

  var weatherControllers = angular.module('weatherControllers', []);

  weatherControllers.controller("FormController", ["GoogleGeo", "Forecast", "Geolocation", function(GoogleGeo, Forecast, Geolocation) {
    var vm = this;
    vm.addressInput;
    vm.visible = true;
    vm.temperature;
    vm.feelsLike;
    vm.humidity;
    vm.windSpeed;

    vm.getCoordinates = function(address) {
      GoogleGeo.get(address).then(function(coordinates) {
        console.log(coordinates.lat);
        console.log(coordinates.lng);
        Forecast.get(coordinates.lat, coordinates.lng)
          .then(function(weather) {
            vm.temperature = weather.currently.temperature;
            vm.feelsLike = weather.currently.apparentTemperature;
            vm.humidity = weather.currently.humidity * 100;
            vm.windSpeed = weather.currently.windSpeed;
          })
      });
    }

    vm.toggle = function() {
      vm.visible = !vm.visible;
      vm.getCoordinates(vm.addressInput);
    }

    // Geolocation.get().then(function(coordinates) {
    //   console.log(coordinates);
    // });


  }]);

  weatherControllers.controller("MainController", ["Forecast", "Geolocation", function(Forecast, Geolocation) {
    var vm = this;
    vm.temperature;
    vm.feelsLike;
    vm.humidity;
    vm.windSpeed;

    Geolocation.get().then(function(coordinates) {
      Forecast.get(coordinates.lat, coordinates.lng)
        .then(function(weather) {
          vm.temperature = weather.currently.temperature;
          vm.feelsLike = weather.currently.apparentTemperature;
          vm.humidity = weather.currently.humidity * 100;
          vm.windSpeed = weather.currently.windSpeed;
        })
    });
  }]);

  weatherControllers.controller("DestinationController", ["Forecast", "GoogleGeo", function(Forecast, Geolocation) {
    var vm = this;
    vm.temperature;
    vm.feelsLike;
    vm.humidity;
    vm.windSpeed;

    GoogleGeo.get(address).then(function(coordinates) {
      Forecast.get(coordinates.lat, coordinates.lng)
        .then(function(weather) {
          vm.temperature = weather.currently.temperature;
          vm.feelsLike = weather.currently.apparentTemperature;
          vm.humidity = weather.currently.humidity * 100;
          vm.windSpeed = weather.currently.windSpeed;
        })
    });
  }]);

})();