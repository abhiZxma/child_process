function func1() {
    process.on("message", function (message) {
        console.log("message",message)
        let num=Number(message)
        for (let index = 0; index < 22222222; index++) {
            num=num+index
        } 
         });
}
func1()
function func2() {
    let num=0
    for (let index = 0; index < 111111111; index++) {
        num=num+index
    }
    process.send("abhishek")
}
func2()

function func3() {
    let num=0
    for (let index = 0; index < 111111111; index++) {
        num=num+index
    }
    console.log("num",num)
}
module.exports={func3}