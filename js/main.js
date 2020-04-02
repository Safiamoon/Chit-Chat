var chat = document.querySelector("#chat");
var zoneMsgs = document.querySelector("#chat>section");
//chat 2 états
var header = document.querySelector("#chat>header");
header.onclick=function(){
    chat.className=(chat.className=="open")?"":"open";
};

//envoi du message
var input = document.querySelector("#chat>footer>input");
input.onkeyup=function(e){
    //si entrée
    if(e.keyCode==13){
        
        //mon msg
        ajouterMsg("me",input.value);

        //réponse auto
        ajouterMsg("answer","Lorem ipsum");       
        
        input.value="";
        zoneMsgs.scrollTop = zoneMsgs.scrollHeight;

    }
}

function ajouterMsg(classe,msg){
    var myMsg = document.createElement("p");
    myMsg.className=classe;
    myMsg.innerHTML=msg;
    zoneMsgs.appendChild(myMsg);
}
