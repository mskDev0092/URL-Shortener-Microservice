require('dotenv').config();
var express = require('express');
const cors = require('cors');
const app = express();
const urlparser = require('url')
const {MongoClient} = require('mongodb')
const dns = require('dns');
// Basic Configuration
const port = process.env.PORT || 3000;
const cdb = new MongoClient(process.env.URI);
const db = cdb.db("url_service");
const storeUrls = db.collection('urls');
app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
}); 


// Your first API endpoint
app.post('/api/shorturl', function(req, res){
  
  const urlString = req.body.url;
  
  
  const lookDns = dns.lookup(urlparser.parse(urlString).hostname , async(req , validAddress) => {
   if(!validAddress){
    res.json({error: "Invalid URL"})
   } else {
    const countUrls = await storeUrls.countDocuments({});
    const urlStore = {
      urlString,
      short_url: countUrls
    }

    const respond = await storeUrls.insertOne(urlStore);
    console.log(respond);
    res.json({
      original_url: urlString,
      short_url: countUrls
    });



   }
  })
  
  });


app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
