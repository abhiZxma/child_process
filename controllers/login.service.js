module.exports={
    getsum
}
process.on('message', (msg) => {
    console.log('msg:', msg);
    console.log('process_id:', process.pid);
    if(msg.id==1){
        return getsum()
    }
    if(msg.id==2){
        return getsum2()
    }
    process.exit(1)
  });
async function getsum(){
    return "abc"
}
async function getsum2(){
    return "abc2"
}