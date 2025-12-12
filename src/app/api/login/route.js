export async function GET(req, res) {


  // Make a note we are on

  // the api. This goes to the console.

  console.log("in the api page")



  // get the values

  // that were sent across to us.

  const { searchParams } = new URL(req.url)

  const email = searchParams.get('email')

  const pass = searchParams.get('pass')


  console.log(email);

  console.log(pass);



 


  // database call goes here
  // =================================================

  const { MongoClient } = require('mongodb');


  const url = 'mongodb+srv://root:myPassword123@assignment1.s42w9m3.mongodb.net/?appName=Assignment1';

  const client = new MongoClient(url);

 

 

  const dbName = 'app'; // database name


  await client.connect();

  console.log('Connected successfully to server');

  const db = client.db(dbName);

  const collection = db.collection('login'); // collection name



  const findResult = await collection.find({"username": email}).toArray();

  console.log('Found documents =>', findResult);


  let valid = false

  if(findResult.length >0 ){

          valid = true;
          if(collection.find({"username": email, "acctype": "manager"}) == true){
            console.log("manager login valid")
            return Response.json({ "data":"manager valid" })
          }
          else{
            console.log("login valid")
            return Response.json({ "data":"valid" })
          }

  } else {


        valid = false;

        console.log("login invalid")

        return Response.json({ "data":"invalid" })

  }



 //==========================================================


  // at the end of the process we need to send something back.

  

}