const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/parkingData',{useNewUrlParser:true, useUnifiedTopology:true})
const Parking = require('./schema/Parking');

function socketMain(io,socket){
    let parkingCode;
    console.log("socketMain: ",socket.id);
    socket.on('clientAuth',(cheie)=>{
        if (cheie === 'yNzf8NktIopB1ewqRoNZvob;'){
            socket.join('clients');
        } else if (cheie === 'uRhj6mv8NjHPqaUYtwergUjnm.'){
            socket.join('ui');
            Parking.find({},(err,docs)=>{
                docs.forEach((pk)=>{
                    pk.isActive = false;
                    io.to('ui').emit('data',pk);
                })
            })
        } else {
            socket.disconnect(true);
        }
    });
    socket.on('parkingInitData',async(data)=>{
        parkingCode = data.parkingCode;
        const resp = await checkMongoAndAdd(data);
        console.log(resp);
    })

    socket.on('parkingData',(data)=>{
        io.to('ui').emit('data',data);
        console.log(data);
    })

    socket.on('disconnect',()=>{
        Parking.find({parkingCode: parkingCode},(err,docs)=>{
            if(docs.length > 0){
                docs[0].isActive = false;
                io.to('ui').emit('data',docs[0])
            }
        })
    })
}

function checkMongoAndAdd(data){
    return new Promise((resolve,reject)=>{
        Parking.findOne(
            {parkingCode : data.parkingCode},
            (err,doc)=>{
                if(err){
                    reject(err);
                } else if(doc===null){
                    let parking = new Parking(data);
                    parking.save();
                    resolve('adaugat');
                } else {
                    resolve('gasit');
                }
            }
        )
    });
}

module.exports = socketMain;