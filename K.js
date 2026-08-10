angular.module('myApp', [])
.controller('MainCtrl', function($scope) {
  
  // State
  $scope.view = 'home'; // home, post, about
  $scope.isDark = localStorage.getItem('theme') === 'dark';
  $scope.search = "";
  $scope.activePost = {};
  $scope.msg = "";

  // Save theme
  $scope.$watch('isDark', function(val) {
    localStorage.setItem('theme', val ? 'dark' : 'light');
  });

  $scope.setView = function(v) {
    $scope.view = v;
    window.scrollTo(0,0);
  };

  // Blog Data - Add new posts here
  $scope.posts = [
    {
      id: 1, 
      title: "angularjs filter broke my brain today", 
      date: "2026-07-28", 
      excerpt: "spent 2 hours because i forgot to inject $scope. classic.", 
      body: "spent 2 hours debugging.\n\nturns out i forgot to inject $scope into the controller.\n\nnote to self: always check console first. then stackoverflow. then cry.\n\nangular is old but it teaches you how binding actually works.",
      tags: ["angular", "debugging"]
    },
    {
      id: 2, 
      title: "potatoes and chain reactions", 
      date: "2026-07-27", 
      excerpt: "one sprouting potato releases ethylene gas and ruins the whole bag.", 
      body: "learned this in bio today.\none bad potato releases gas that makes others sprout faster.\n\nfeels like a metaphor for procrastination too.\none bad habit spoils the whole week.\n\nweird what you remember from class.",
      tags: ["random", "college"]
    },
    {
      id: 3, 
      title: "why i stopped using templates", 
      date: "2026-07-25", 
      excerpt: "everyone is selling the same landing page. so i built this.", 
      body: "was looking at 'portfolio templates'.\nall of them look identical.\n\ndecided to build something i'd actually want to read.\nsomething messy, personal, and mine.\n\nthis is it. no 'hire me' button.",
      tags: ["projects", "thoughts"]
    }
  ];

  $scope.openPost = function(post) {
    $scope.activePost = post;
    $scope.view = 'post';
  };

  $scope.sendMsg = function() {
    if($scope.msg.trim() === "") return;
    alert("Thanks for the note! \n\nThis is a static site so I won't actually receive it, but: " + $scope.msg);
    $scope.msg = "";
  };

});
