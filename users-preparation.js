var fs = require('fs');

var users = {"users": []};

fs.readFile('ionic-users-sample.json', 'utf8', function(err, data){
  if(err){
    return console.log(err);
  }
  // Turn string from file to an Array
  dataArray = JSON.parse(data);

  for(var index in dataArray){
    for(var attr in dataArray[index]){
      if(dataArray[index].hasOwnProperty(attr)){
        var user = {};
        user.localId = dataArray[index]['uuid'];
        user.email = dataArray[index]['details']['email'];
        user.emailVerified = null;
        user.passwordHash = dataArray[index]['details']['password_hash'];
        user.salt = dataArray[index]['details']['password_salt'];
        user.displayName = dataArray[index]['details']['name'];
        user.phoneNumber = "+1" + dataArray[index]['custom']['phone'];
        user.photoUrl = dataArray[index]['details']['image'];
        user.createdAt = Date.parse(dataArray[index]['created']);
        user.providerUserInfo = [];
      }
    }
    users.users.push(user);
  }

  // Write users to file
  fs.writeFile("firebase-ready.json", JSON.stringify(users), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  });
})
