// Handle create contact actions
exports.getRepos = async function (req, res) {
    var request = require("request");
    auth = "Basic " + new Buffer.from("wewer" + ":" + "wer",'base64');
    auth= "RmFyZXNBbG1hamJyaTpPZzI2MjcjIzI3"
    console.log(auth)
    var options = { method: 'GET',
      url: 'https://api.github.com/user/starred',
      headers: 
       { 'cache-control': 'no-cache',
         Connection: 'keep-alive',
        //  'Accept-Encoding': 'gzip, deflate',
        //  'content-type': 'application/json',
         Host: 'api.github.com',
         'Postman-Token': '017e05d4-aa00-4de6-9225-713c117d0b1f,5fa6b5d8-1d98-45a5-89b5-b9e54eddaabb',
         'Cache-Control': 'no-cache',
         Accept: '*/*',
         'User-Agent': 'PostmanRuntime/7.17.1',
         Authorization: "Basic " + "RmFyZXNBbG1hamJyaTpPZzI2MjcjIzI3" } };
    
    await request(options, function (error, response, body) {
      if (error) throw new Error(error);
        // return response
        let reposList= JSON.parse(body);
        let responseToReturn=[];
         for (let index = 0; index < reposList.length; index++) {
             const element = reposList[index];
             responseToReturn.push({name:element.name,link:element.html_url,language:element.language})
         }
      console.table(responseToReturn);
      res.json(JSON.parse(responseToReturn) );
    });
    

};

// Handle index actions
exports.index = function (req, res) {
    res.json({
        message: 'New contact created!',
        data: "contact"
    });
};

// Handle create contact actions
exports.new = function (req, res) {


    res.json({
        message: 'New contact created!',
        data: "contact"
    });
};


// Handle view contact info
exports.view = function (req, res) {
    res.json({
        message: 'New contact created!',
        data: "contact"
    });
};

// Handle update contact info
exports.update = function (req, res) {
    res.json({
        message: 'New contact created!',
        data: "contact"
    });
};


// Handle delete contact
exports.delete = function (req, res) {
    res.json({
        message: 'New contact created!',
        data: "contact"
    });
};

async function getReposFromGithub (username,password){
    var request = require("request");

    var options = { method: 'GET',
      url: 'https://api.github.com/user/starred',
      headers: 
       { 'cache-control': 'no-cache',
         Connection: 'keep-alive',
         'Accept-Encoding': 'gzip, deflate',
         Host: 'api.github.com',
         'Postman-Token': '017e05d4-aa00-4de6-9225-713c117d0b1f,5fa6b5d8-1d98-45a5-89b5-b9e54eddaabb',
         'Cache-Control': 'no-cache',
         Accept: '*/*',
         'User-Agent': 'PostmanRuntime/7.17.1',
         Authorization: 'Basic RmFyZXNBbG1hamJyaTpPZzI2MjcjIzI3' } };
    
    await request(options, function (error, response, body) {
      if (error) throw new Error(error);
        return response
      console.log(body);
    });
    
}