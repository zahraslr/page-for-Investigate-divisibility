const first = document.querySelector ("#first-num") ;
const second = document.querySelector ("#second-num") ;
const third = document.querySelector ("#third-num") ;
const firstShow = document.querySelector ("#first-show") ;
const secondShow = document.querySelector ("#second-show") ;
const thirdShow = document.querySelector ("#third-show") ;
const show = document.querySelector ("#show") ;
const show2 = document.querySelector ("#show2") ;
const submit = document.querySelector ("#submit") ;

submit.addEventListener("click", funcSub);

function funcSub(event){
    event.preventDefault();
    const x = first.value;
    const y = second.value;
    const z = third.value;

    if (x == 0){
        firstShow.innerText = "0 برتمامی اعداد بخشپذیر است";
    }else if (y == 0){
        secondShow.innerText =  "حاصل تقسیم عدد بر 0 بینهایت است ";
    }else if (z == 0){
        thirdShow.innerText =  "حاصل تقسیم عدد بر 0 بینهایت است ";
    }
    
    if (x || y == 0 ){
        show.innerText = "لطفا مقادیر را درست وارد کنید";
    }else if (x%y === 0) {
        show.innerText =`${x}بر ${y} بخشپذیر است` ;
    }else{
        show.innerText =`${x}بر ${y} بخشپذیر نیست` ;
    };

    if (x || z == 0 ){
        show2.innerText = "لطفا مقادیر را درست وارد کنید";
    }else if (x%z === 0) {
        show2.innerText =`${x}بر ${z} بخشپذیر است` ;
    }else{
        show2.innerText =`${x}بر ${z} بخشپذیر نیست` ;
    };
};
