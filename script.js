const faq1 = document.querySelector('.one');
const faq2 = document.querySelector('.two');
const faq3 = document.querySelector('.three');
const faq4 = document.querySelector('.four');
const faq5 = document.querySelector('.five');
const faq6 = document.querySelector('.six');

faq1.addEventListener('click', (e)=>{
    if(document.querySelector('.ans1').classList[2] == "close"){
        document.querySelector('.ans1').classList = "faq-answer ans1 open";
        document.querySelector(".one1").classList = "fa fa-plus one1 close";
        document.querySelector(".one12").classList = "fa fa-close one12 open";
    }
    else{
        document.querySelector('.ans1').classList = "faq-answer ans1 close";
        document.querySelector(".one1").classList = "fa fa-plus one1 open";
        document.querySelector(".one12").classList = "fa fa-close one12 close";
    }
});
faq2.addEventListener('click', (e)=>{
    if(document.querySelector('.ans2').classList[2] == "close"){
        document.querySelector('.ans2').classList = "faq-answer ans2 open";
        document.querySelector(".two2").classList = "fa fa-plus two2 close";
        document.querySelector(".two22").classList = "fa fa-close two22 open";
    }
    else{
        document.querySelector('.ans2').classList = "faq-answer ans2 close";
        document.querySelector(".two2").classList = "fa fa-plus two2 open";
        document.querySelector(".two22").classList = "fa fa-close two22 close";
    }
});
faq3.addEventListener('click', (e)=>{
    if(document.querySelector('.ans3').classList[2] == "close"){
        document.querySelector('.ans3').classList = "faq-answer ans3 open";
        document.querySelector(".three3").classList = "fa fa-plus three3 close";
        document.querySelector(".three32").classList = "fa fa-close three32 open";
    }
    else{
        document.querySelector('.ans3').classList = "faq-answer ans3 close";
        document.querySelector(".three3").classList = "fa fa-plus three3 open";
        document.querySelector(".three32").classList = "fa fa-close three32 close";
    }
});
faq4.addEventListener('click', (e)=>{
    if(document.querySelector('.ans4').classList[2] == "close"){
        document.querySelector('.ans4').classList = "faq-answer ans4 open";
        document.querySelector(".four4").classList = "fa fa-plus four4 close";
        document.querySelector(".four42").classList = "fa fa-close four42 open";
    }
    else{
        document.querySelector('.ans4').classList = "faq-answer ans4 close";
        document.querySelector(".four4").classList = "fa fa-plus four4 open";
        document.querySelector(".four42").classList = "fa fa-close four42 close";
    }
});
faq5.addEventListener('click', (e)=>{
    if(document.querySelector('.ans5').classList[2] == "close"){
        document.querySelector('.ans5').classList = "faq-answer ans5 open";
        document.querySelector(".five5").classList = "fa fa-plus five5 close";
        document.querySelector(".five52").classList = "fa fa-close five52 open";
    }
    else{
        document.querySelector('.ans5').classList = "faq-answer ans5 close";
        document.querySelector(".five5").classList = "fa fa-plus five5 open";
        document.querySelector(".five52").classList = "fa fa-close five52 close";
    }
});
faq6.addEventListener('click', (e)=>{
    if(document.querySelector('.ans6').classList[2] == "close"){
        document.querySelector('.ans6').classList = "faq-answer ans6 open";
        document.querySelector(".six6").classList = "fa fa-plus six6 close";
        document.querySelector(".six62").classList = "fa fa-close six62 open";
    }
    else{
        document.querySelector('.ans6').classList = "faq-answer ans6 close";
        document.querySelector(".six6").classList = "fa fa-plus six6 open";
        document.querySelector(".six62").classList = "fa fa-close six62 close";
    }
});
