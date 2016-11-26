firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in
        var email = user.email;
        alert(email + " Connected!");
        // ...
    } else {
        // User is not signed in
        alert("Connection error!");
        // ...
    }
});
firebase.auth().signInWithEmailAndPassword(email, password);