app.controller('HomeCtrl', ['$firebase', function($firebase) {
  var homeCtrl = this;
  
  var ref = new Firebase("https://booyacasha.firebaseio.com/values").orderByChild('3').limitToLast(50);
  var sync = $firebase(ref);
  
  //sync.$set({foo: "bar"});
  // add a new child node
//   sync.$push({hello: "world"}).then(function(newChildRef) {
//     console.log("added record with id " + newChildRef.key());
//   });
  var posts = sync.$asArray();
  homeCtrl.posts = posts;
  
}]);