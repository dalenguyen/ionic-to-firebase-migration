var fs = require('fs');

fs.readFile('ionic-sample.json', 'utf8', function(err, data){
  if(err){
    return console.log(err);
  }

  // Turn string from file to an Array
  dataArray = JSON.parse(data);

  for(var index in dataArray){
    for(var attr in dataArray[index]){
      if(dataArray[index].hasOwnProperty(attr)){
        switch (attr) {
          // It depends on your JSON structure, you should replace details with something else
          case 'details':
            // Append emails to a list
            fs.appendFileSync('emails-list.txt', dataArray[index]['details']['email'] + "\n");
            break;
          default:

        }
      }
    }
  }
})
