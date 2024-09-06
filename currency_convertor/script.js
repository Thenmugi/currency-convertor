fetch('https://api.frankfurter.app/currencies')
.then((res)=>(res.json()))
.then((res)=>dropdownlist(res))
let select=document.querySelectorAll('.currency')
let select1=document.getElementById('Currency1')
let select2=document.getElementById('Currency2')
let input=document.getElementById('input')
let result=document.getElementById('result')
let err=document.getElementById('error')

function dropdownlist(res){
    let curr=Object.entries(res);
    for(let i=0;i<curr.length;i++){
        let opt=`<option value="${curr[i][0]}" class="font-semibold">${curr[i][0]}</option>`
        select1.innerHTML+=opt;
        select2.innerHTML+=opt;
    }
}
let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    let Currency1=select1.value;
    let Currency2=select2.value;
    let inputval=input.value;
    if(Currency1===Currency2){
        err.innerHTML="Please choose the different currencies :)"
    }
    else{
        err.innerHTML="                                    ";
    }
    convert(Currency1,Currency2,inputval);
})
function convert(Currency1,Currency2,inputval){

    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputval}&from=${Currency1}&to=${Currency2}`)
    .then(resp => resp.json())
    .then((data) => {
        document.getElementById('result').value=Object.values(data.rates)[0];
    });
}