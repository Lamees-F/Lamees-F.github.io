let index = 0,
score = 0,
wrong = 0;

let question = quiz.sort(function(){
    return 0.5 -Math.random();
});
let totalQuestion = question.length ;



$(function(){
   let totalTime = 300;
   let min = 0;
   let sec = 0;
   let counter = 0;
   let timer = setInterval(function(){
        counter++;
        min = Math.floor((totalTime - counter) / 60);
        sec = totalTime - min * 60 - counter ;
        
        $(".timer-box span").text(min +":"+ sec);

        if(counter == totalTime){
            alert("انتهى الوقت ! اضغط موافق لعرض النتيجة");
            result();
            clearInterval(timer);
        }
   },1000);

   printQuestion(index);

});

function printQuestion(i){
     
    $(".q-box").text(question[i].question);
    $(".option-box span").eq(0).text(question[i].option[0]);
    $(".option-box span").eq(1).text(question[i].option[1]);
    $(".option-box span").eq(2).text(question[i].option[2]);
    $(".option-box span").eq(3).text(question[i].option[3]);

}

function checkAns(option){
    
    let optionClicked = $(option).data("opt");

    if(optionClicked == question[index].answer){
         $(option).addClass("right");
         score++;
    }else{
         $(option).addClass("wrong");
         wrong++;
    }

    $(".score-box span").text(score);
    $(".option-box span").attr("onclick","");
    if(score == 3){
        $(".next").hide();
        $(".win").show();
    }

}

function showNext(){

    if(index >= (question.length - 1)){
        if(score == 3){
            showResult();
        }else{
            result();
            return;
        }
    }else{

    index++;

    $(".option-box span").removeClass();

    $(".option-box span").attr("onclick","checkAns(this)");

    printQuestion(index);
    }
}

function showResult(){
    $("#questionScreen").hide();
    $("#winningScreen").show();
}

function result(){
    $("#questionScreen").hide();
    $("#resultScreen").show();

    $("#total-q").text(totalQuestion);  
    $("#corrcet-answer").text(score);
    $("#wrong-answer").text(wrong);
}
