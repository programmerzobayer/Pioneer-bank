const loginBtn = document.getElementById('loginBtn');
const loginArea = document.getElementById('loginArea');
const accountDetiels = document.getElementById('accountDetiels');
loginBtn.addEventListener("click" , function(){
  loginArea.style.display= "none";
  accountDetiels.style.display= "block";
})

const depositBtn =document.getElementById('depositBtn');
depositBtn.addEventListener("click", function(){
    const depInput = inputBtnClick("depInput");
    showDollar("curentDeposit",depInput);
    showDollar("curentBalance",depInput);
    document.getElementById('depInput').value= "";  
})
const withdrawBtn =document.getElementById('withdrawBtn');
withdrawBtn.addEventListener("click", function(){
    const withInput = inputBtnClick("withInput");
    showDollar("curentWithdraw",withInput);
    showDollar("curentBalance",-1* withInput);
    document.getElementById('withInput').value= "";  
})

function inputBtnClick(id){
    const depInput =document.getElementById(id).value;
    const depInputConvertNumber= parseFloat(depInput);
   return depInputConvertNumber ;
}
function showDollar(id,depInput){
    const curentDollerVeiw= document.getElementById(id).innerText;
    const cdvConvert = parseFloat(curentDollerVeiw);
    const total = depInput + cdvConvert ;
    document.getElementById(id).innerText = total;
}