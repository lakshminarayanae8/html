var t1name=document.getElementById("tname")

function mainf(){
    var mname = document.getElementsBy('fname').value;
    if(mname==0){
        t1name.innerHTML='name is requeired'
        return false
    }
    if(!mname.match(/^[A-Za-Z]*\s{1}[A-Za-z]*&/)){
        t1name.innerHTML="writing full name"
        return false
    }
t1name.innerHTML ="valid"
}