function ContactController($scope, SERVER, $http) {

  $scope.contacts = [];

  init();

  function init() {
    $http.get(SERVER.URL).then((res) => {
      $scope.contacts = res.data;
    });
  }

  // $scope.addContact = (contact) => {
  //   let pattern = /^https?:\/\//i;
  //   if (pattern.test(contact.website) === true && $scope.myForm.$valid) {
  //     console.log('Website Valid')
  //     $scope.contacts.push(contact);
  //     $scope.contact = {};
  //   }
  //   // if ($scope.myForm.$valid) {
  //   //   console.log("YES")
  //   //   $scope.contacts.push(contact);
  //   //   $scope.contact = {};      
  //   // }
  //   // $scope.contacts.push(contact);
  //   // $scope.contact = {};
  // }

  $scope.checkName = (event) => {
    console.log(event);
  }

  $scope.checkEmail = (event) => {
    console.log(event);
  }

  $scope.checkWebsite = (event) => {

  }

  $scope.addContact = (contact) => {
    let pattern = /^https?:\/\//i;
    if (pattern.test(contact.website) === true && $scope.myForm.$valid) {
      $http.post(SERVER.URL, contact).then((res) => {
        $scope.contacts.push(res.data);
        $scope.contact = {};
      });
    }
  }

}

ContactController.$inject = ['$scope', 'SERVER', '$http'];
export { ContactController };