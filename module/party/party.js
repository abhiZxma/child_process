const functionUtil = require("../../utilities/functions")

process.on('message', async (msg) => {
    console.log('Message from Index JS in Child 1:', msg);
    if(msg == 'start_party_v1'){
        console.log('Message from Index JS in Child 1:', msg);
        let data = await getParty()        
        process.send(data);
    }
    if(msg == 'start_party_v2'){
        console.log('Message from Index JS in Child 1:', msg);
        let data = await getPartyV2()        
        process.send(data);
    }
});

async function getParty(){
    let data = functionUtil.longComputation('V1')
    return data
}

async function getPartyV2(){
    let data = functionUtil.longComputation('V2')
    return data
}
