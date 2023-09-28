// BASIC FUNCTION
const boshqalar = (boshqa)=>{
    document.querySelector(`.section-center .question:nth-child(${boshqa})`).classList.remove("questionOpened");
    document.querySelector(`.section-center .question:nth-child(${boshqa}) .question-text`).classList.remove("open");
    document.querySelector(`.section-center .question:nth-child(${boshqa}) .plus-icon`).classList.remove("hidden");
    document.querySelector(`.section-center .question:nth-child(${boshqa}) .minus-icon`).classList.add("hidden");
}
const closed = (bosilyotgan,boshqa1,boshqa2)=>{
    document.querySelector(`.section-center .question:nth-child(${bosilyotgan})`).classList.toggle("questionOpened");
    document.querySelector(`.section-center .question:nth-child(${bosilyotgan}) .question-text`).classList.toggle("open");
    document.querySelector(`.section-center .question:nth-child(${bosilyotgan}) .plus-icon`).classList.toggle("hidden");
    document.querySelector(`.section-center .question:nth-child(${bosilyotgan}) .minus-icon`).classList.toggle("hidden") ;
    boshqalar(boshqa1); 
    boshqalar(boshqa2); 
}
//  ON CLICK
document.querySelector(".section-center .question:nth-child(1) .question-btn").addEventListener("click",()=>{
    closed(1,2,3);
})
document.querySelector(".section-center .question:nth-child(2) .question-btn").addEventListener("click",()=>{
    closed(2,1,3);
})
document.querySelector(".section-center .question:nth-child(3) .question-btn").addEventListener("click",()=>{
    closed(3,1,2);
})