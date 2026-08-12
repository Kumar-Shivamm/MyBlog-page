angular.module('myApp', [])
.controller('MainCtrl', ['$scope', function($scope) {
  
  // State
  $scope.view = 'home'; // home, post, about
  $scope.isDark = localStorage.getItem('theme') === 'dark';
  $scope.search = "";
  $scope.activePost = {};
  $scope.name = "";
  $scope.msg = "";

  // Save theme
  $scope.$watch('isDark', function(val) {
    localStorage.setItem('theme', val ? 'dark' : 'light');
  });

  $scope.setView = function(v) {
    $scope.view = v;
    window.scrollTo(0,0);
  };

  // Blog Data
  $scope.posts = [
    {
      id: 1, 
      title: "learning data structures & algorithms", 
      date: "2026-07-28", 
      excerpt: "tackling pointers, arrays, and recursion one problem at a time.", 
      body: "started focusing heavily on data structures and algorithms today.\n\nworking through time complexities and getting comfortable with arrays, linked lists, and recursion.\n\nit's challenging at first, but breaking down problems step-by-step makes patterns much clearer.",
      tags: ["dsa", "coding"]
    },
    {
      id: 2, 
      title: "understanding the 8085 microprocessor", 
      date: "2026-07-27", 
      excerpt: "exploring registers, timing diagrams, and basic assembly instructions.", 
      body: "diving into hardware architecture and low-level code with the 8085 microprocessor.\n\nlearning how registers (A, B, C, D, E, H, L) interact with memory and how the ALU executes opcode cycles.\n\nwriting basic assembly code really changes how you view high-level languages.",
      tags: ["microprocessor", "college"]
    },
    {
      id: 3, 
      title: "practicing object-oriented programming in java", 
      date: "2026-07-25", 
      excerpt: "applying encapsulation, inheritance, and polymorphism in real examples.", 
      body: "building small projects in Java to solidify core OOP concepts.\n\nfocusing on how interfaces, abstraction, and inheritance keep code modular and reusable.\n\nwriting clean class hierarchies helps prevent messy refactoring later.",
      tags: ["java", "oop"]
    }
  ];

  $scope.openPost = function(post) {
    $scope.activePost = post;
    $scope.view = 'post';
  };

  $scope.sendMsg = function() {
    if (!$scope.msg.trim()) return;
    alert("Thanks " + ($scope.name || "friend") + "! \n\nThis is a static site so I won't actually receive it, but: " + $scope.msg);
    $scope.name = "";
    $scope.msg = "";
  };

}]);
