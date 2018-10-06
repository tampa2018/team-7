function determineIfFacebookLoggedIn(){
    var loginStatusFlag = false;

    do{
      FB.login();
      FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
          if(response.status == 'connected'){
              loginStatusFlag = true;
          }
      });
    }while(!loginStatusFlag);

  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
