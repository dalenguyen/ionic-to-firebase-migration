var fs = require('fs');

var users = {"users": []};

console.log(users.users);

fs.readFile('ionic-users-sample.json', 'utf8', function(err, data){
  if(err){
    return console.log(err);
  }
  console.log(data);
})
