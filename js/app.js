
function main()
{
   const txtNum1 = document.querySelector("#firstNum");
   const txtNum2= document.querySelector("#secondNum");


   const calculateButton  = document.querySelector("button");

   /*
   console.log(txtNum1);
   console.log(txtNum2);
   console.log(calculateButton);
   */

   calculateButton.addEventListener("click",function(){


    const sum = parseInt(txtNum1.value) + parseInt(txtNum2.value);

    alert(`The sum of ${txtNum1.value} + ${txtNum2.value} = ${sum}`);
      

   })

}

main();