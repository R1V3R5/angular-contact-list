function ContactController ($scope, SERVER, $http) {

  $scope.contacts = [];

  init();

  function init () {
    $http.get(SERVER.URL).then( (res) => {
      $scope.contacts = res.data;
    });
  }

  $scope.addContact = (contact) => {
    $scope.contacts.push(contact);
    $scope.contact = {};
  }

  // $scope.addContact = (contact) => {
  //   $http.post(SERVER.URL, contact).then( (res) => {
  //     $scope.contacts.push(res.data);
  //     $scope.contact = {};
  //   });
  // }

}

ContactController.$inject = ['$scope', 'SERVER', '$http'];
export { ContactController };