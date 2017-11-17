angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'homeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about.html',
        controller: 'aboutCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'contact.html'
      })
	  
	  .state('signup', {
        url: '/signup',
        templateUrl: 'signup.html'
      })
	  
	  .state('register', {
        url: '/register',
        templateUrl: 'register.html',
		controller: 'formCtrl'
		
      });
	  
	 
  }]);
  
  