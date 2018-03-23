import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dburl = 'mongodb://localhost/kymedApp';

mongodb.MongoClient.connect(dburl, function(err, db){

    app.get('/api/turnos', (req, res)=>{
        db.collection('turnos').find({}).toArray((err, turnos) =>{
            res.json({turnos});
        });
    });

    app.listen(8080, ()=> console.log('server is running on 8080'))
});
