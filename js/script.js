  //console.log( document.all);
  //document.write("Hello");
  // getElementByID, 
  // getElementsByTagName, 
  // getElementsByClassName,
  // querySelector
  //querySelectorAll
/*
  const ptags=document.getElementsByTagName("p");
  //console.log(ptags[0]);
  //console.log(ptags[0].innerHTML);
ptags[0].innerHTML="<b>Hi</b>";


    */
   
//   const element=document.getElementById("pContent");
  // element.innerText="Hi";
   //element.setAttribute("","")
const elements=document.querySelectorAll(".x");
console.log(elements);
elements.forEach(function(item){

  //  item.style.backgroundColor="red";
  item.classList.add("format");


})

function test()
{
    alert("Hello");

}
const bigImage=document.querySelector("#bigImage");

function changeImage(img)
{
    console.log(this);

    bigImage.src=img.src;
}


   //element=10;

//document.querySelectorAll("div.x");
