

async function getData(url){
    let res=await fetch(url);
    let data=await res.json();

    return data;

}

function append2(data,container){

  data.forEach((ele) => {
    let div=document.createElement("div");
      div.setAttribute("id", "itemData");
      div.addEventListener("click",function(){
        ChangePage(ele);
      })
    let img=document.createElement("img");
    let h4=document.createElement("h2");
     img.src=ele.strMealThumb;
     img.style.width="100%";
     h4.innerText=`Meal name : ${ele.strMeal}`;
     h4.style.color="white";

    div.append(img,h4);

    container.append(div);
    
  });

}

function ChangePage(ele){
  let x=[];
  x.push(ele);
  localStorage.setItem("data",JSON.stringify(x));
  window.location.href="SearchMeal.html";
}



function append(data,container){

  data.forEach((ele) => {

    let div=document.createElement("div");
      div.setAttribute("id", "itemData");
    let img=document.createElement("img");
    let h4=document.createElement("h2");
    let details=document.createElement("p");
    let catagory=document.createElement("h4");
    catagory.innerText=`Catagory : ${ele.strCategory}`
    
    
    let data=document.createElement("h4");
    data.innerText="Indrigates:"

       let indrigets=document.createElement("h4");
       indrigets.innerText=` ${ele.strIngredient1}: ${ele.strMeasure1}`;
       let indrigets2=document.createElement("h4");
       indrigets2.innerText=` ${ele.strIngredient2}: ${ele.strMeasure2}`;
       let indrigets3=document.createElement("h4");
       indrigets3.innerText=` ${ele.strIngredient3}: ${ele.strMeasure3}`;
       let indrigets4=document.createElement("h4");
       indrigets4.innerText=` ${ele.strIngredient4}: ${ele.strMeasure4}`
       

    
    
     img.src=ele.strMealThumb;
     img.style.width="100%";
     h4.innerText=`Meal name : ${ele.strMeal}`;
     details.innerText=`Prepairation : ${ele.strInstructions}`

    div.append(img,h4,catagory,data,indrigets,indrigets2,indrigets3,indrigets4,details);

    container.append(div);
    
  });


}


export { getData, append,append2}  ;