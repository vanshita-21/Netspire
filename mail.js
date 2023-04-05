const firebaseConfig = {
    apiKey: "AIzaSyDjaUr-cEtTf0unhIDTO4gmoG350v_bjFY",
    authDomain: "loginform-745df.firebaseapp.com",
    databaseURL: "https://loginform-745df-default-rtdb.firebaseio.com",
    projectId: "loginform-745df",
    storageBucket: "loginform-745df.appspot.com",
    messagingSenderId: "129672860453",
    appId: "1:129672860453:web:17b13749c7ec023880c0cc"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // reference your database
  
  var loginFormDB = firebase.database().ref("loginForm");

  document.getElementById("loginForm").addEventListener("submit" , submitForm);

  function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var platform = getElementVal("platform");
    var socialmediaid = getElementVal("socialmediaid");
    var Category = getElementVal("Category");
    var type1 = getElementVal("type1");
    var location = getElementVal("location");
    var Price = getElementVal("Price");

    saveMessages(name, platform, socialmediaid, Category, type1, location, Price);

    // enable the alert

    document.querySelector(".alert").style.display = "block";

    // Remove the alert

    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    //reset the form

    document.getElementById("loginForm").reset();
  }

  const saveMessages = (name, platform, socialmediaid, Category, type1, location, Price) => {
    var newLoginForm = loginFormDB.push();

    newLoginForm.set({
      name : name,
      platform : platform,
      socialmediaid : socialmediaid, 
      Category : Category,
      type1 : type1,
      location : location,
      Price : Price,
      
    });
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };