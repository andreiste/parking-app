const fs = require('fs');
const io = require('socket.io-client');
let socket = io('http://127.0.0.1:8080');

const jsonConfig = fs.readFileSync('config.json');
const config = JSON.parse(jsonConfig);

const locuriInitFile = 'locuriInit.json';
const locuriInitFilePath = './'.concat(locuriInitFile);

socket.on('connect',()=>{
    socket.emit('clientAuth','yNzf8NktIopB1ewqRoNZvob;');

    console.log('Client conectat');

    socket.emit('parkingInitData',parkingData());

    function sendData(){
        data = parkingData();
        socket.emit('parkingData',data);
    }

    let parkingDataInterval = setInterval(sendData,5000);
})

socket.on('disconnect',()=>{
    clearInterval(parkingDataInterval);
})

function parkingData(){
    const parkingCode = config.parkingCode;
    const adresa = config.adresa;
    const dateTime = new Date();
    const locuriTotal = config.locuriTotal;
    const locuriOcupateInitial = returnLocuriOcupateInitial();
    const date = calculNumarLocuri(locuriOcupateInitial,locuriTotal);
    const procentOcupare = Math.floor((date.locuriActuale*100)/locuriTotal);
    const locuriVacante = locuriTotal - date.locuriActuale;
    const crestereProcentuala = calculCrestere(locuriOcupateInitial,date.locuriActuale);
    const isActive = true;
    writeLocuriOcupateInitial(date.locuriActuale);
    return {
        parkingCode: parkingCode,
        adresa: adresa,
        dateTime: dateTime,
        locuriTotal:locuriTotal,
        locuriOcupateInitial:locuriOcupateInitial,
        rataOcupare: date.rataOcupare,
        rataEliberare: date.rataEliberare,
        locuriActuale: date.locuriActuale,
        locuriVacante: locuriVacante,
        procentOcupare: procentOcupare,
        crestereProcentuala: crestereProcentuala,
        isActive: isActive
    }
}

function calculCrestere(locuriOcupateInitial,locuriActuale){
    const crestere = locuriActuale - locuriOcupateInitial;
    const crestere_procentuala = Math.floor((crestere / locuriOcupateInitial) * 100);
    return crestere_procentuala;
}

function calculNumarLocuri(locuriOcupateInitial,locuriTotal){
    const procent_ocupare = randomNumber(0,10);
    const procent_eliberare = randomNumber(0,10);
    let rataOcupare = calculRataNumarLocuri(0,procent_ocupare);
    let rataEliberare = calculRataNumarLocuri(0,procent_eliberare);

    if(locuriOcupateInitial==0){
        rataEliberare = 0;
    }else if(locuriOcupateInitial==locuriTotal){
        rataOcupare = 0;
    }else if (locuriOcupateInitial - rataEliberare < 0){
        rataEliberare = locuriOcupateInitial;
    }else if (locuriOcupateInitial + rataOcupare > locuriTotal){
        rataOcupare = locuriTotal - locuriOcupateInitial;
    }

    const locuriActuale = locuriOcupateInitial - rataEliberare + rataOcupare;
    return {
        rataEliberare: rataEliberare,
        rataOcupare: rataOcupare,
        locuriActuale: locuriActuale
    }
}

function calculRataNumarLocuri(val_min,val_max){
    const locuri_max = Math.floor(config.locuriTotal*val_max/100);
    const locuri_min = Math.floor(config.locuriTotal*val_min/100);
    const numar_locuri = randomNumber(locuri_min,locuri_max);
    return numar_locuri;
}

function randomNumber(val_min,val_max){
    return Math.trunc(Math.random()*(val_max-val_min)+val_min);
}

function writeLocuriOcupateInitial(loc){
    let obj = {
        locuriOcupateInitial: loc
    }
    let toJSON = JSON.stringify(obj);
    fs.writeFileSync(locuriInitFile,toJSON);
}

function returnLocuriOcupateInitial(){
    let loc;
    try {
        if (fs.existsSync(locuriInitFilePath)){
            const jsonInit = fs.readFileSync(locuriInitFile);
            const locuriInit = JSON.parse(jsonInit);
            loc = locuriInit.locuriOcupateInitial;

        } else {
            loc = randomNumber(0,config.locuriTotal);
        }
        return loc;
    } catch(err){
        console.error(err);
    }
}