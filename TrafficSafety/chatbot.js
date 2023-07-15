var data= {
    chatinit:{
        title: ["Hello ","I am A simple chatbot","Which traffic safety Aspect would you like to know more about?"],
        options: ["Vihecle","Driver","Road"]
    },
    vihecle: {
        title:["Please select a feature"],
        options:['Airbags','Fluid level','Tires pressures'],
        url : {
            
        }
    },
    driver: {
        title:["The driver is the most effective factor in traffic safety , so they must be alert and be ready to take action at any time"],
        options:["Back to menu","Exit"],
        url : {
        }
    },
    road: {
        title:["Road safety is the actions performed to lower the risk of fatalities and injuries from traffic accidents."],
        options:["Back to menu","Exit"],
        url : {  
        }
    },
    airbags: {
        title: ["An airbag is a vehicle occupant-restraint system using a bag designed to inflate extremely quickly, then quickly deflate during a collision."],
        options:["Back to menu","Exit"],
        url: {

        }
    },
    fluid: {
        title: ["You have to check the following six fluid regurlay:"+
        "Engine oil, Coolant (Antifreeze), Power steering fluid, Brake fluid, Transmission fluid (in an automatic transmission vehicle, not a manual), and Windshield washer fluid"],
        options:["Back to menu","Exit"],
        url: {

        }
    },
    tires: {
        title: ["Each vehicle has its own specifications for tire pressure, but most fall between 28 and 36 PSI"],
        options:["Back to menu","Exit"],
        url: {

        }
    },
    back: {
        title:["Which traffic safety Aspect would you like to know more about?"],
        options: ["Vihecle","Driver","Road"],
        url : {
        }
    },
    exit: {
        title:["Thanks for your response","I hope I helped you","see you again!"],
        options:[],
        url : {
        }
    },
}

document.getElementById("chatbotToggler").addEventListener("click",showChatBot);
var chatbot= document.getElementById("chatBox");

var dataLen= data.chatinit.title.length;

function showChatBot(){
    console.log(this.getAttribute('name'));
    if(this.getAttribute('name')=='1'){
        document.getElementById('test').style.display='block';
        initChat();
    }
    else{
        closeing();
    }
}
function closeing(){
    document.getElementById('test').style.display='none';
}
function initChat(){
    j=0;
    chatbot.innerHTML='';
    for(var i=0;i<dataLen;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((dataLen+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    chatbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    if(options.length==0){
        handleScroll();
    }
    else{
        for(var i=0;i<options.length;i++){
            var opt= document.createElement("span");
            var inp= '<div>'+options[i]+'</div>';
            opt.innerHTML=inp;
            opt.setAttribute("class","opt");
            opt.addEventListener("click", handleOpt);
            chatbot.appendChild(opt);
            handleScroll();
        }
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    chatbot.appendChild(elm);
    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        chatbot.appendChild(elm);
}

function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
    }
    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }
    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500) 
    }

}

function handleScroll(){
    var elem= document.getElementById('chatBox');
    elem.scrollTop= elem.scrollHeight*100;
}
const chatbotCloseBtn = document.querySelector(".close-btn");
const chatbotToggler = document.querySelector("#chatbotToggler");


