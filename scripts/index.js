let url = "https://www.themealdb.com/api/json/v1/1/Categories.php";

let showData= async ()=>{
  try {
    let res =await fetch(url);
    let data = await res.json();
    append(data.categories)
    console.log(data.categories);


  } catch (error) {
    console.log(error);
  }
}
showData();

let append = (data) =>{
  let categories = document.getElementById("categories");
  
  data.forEach(function(el) {
    
    let div= document.createElement("div");

    let h3=document.createElement("h3");
    h3.innerText=el.strCategory;

    let img=document.createElement("img");
    img.src=el.strCategoryThumb;

    let desc = document.createElement("p");
    desc.innerText=el.strCategoryDescription;

    div.append(h3,img,desc);

    categories.append(div);
  });
}

let search =async () =>{

  let res =document.getElementById("categories");
  res.innerHTML=null;
  try {
      let query = document.getElementById("query").value;
      let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=348002ae&app_key=b18be945e527bddb447dc08799533a54`;
      let res = await fetch(url);

      let data = await res.json();
      

      append2(data.hits);
      
  } catch (error) {
      console.log(error);
  }
}
search();

let append2 = (data)=>{
  let results = document.getElementById("results");
  results.innerHTML=null;
  data.forEach(function(el) {
     
      let div=document.createElement("div");

      let name= document.createElement("h3");
      name.innerText=el.recipe.label;

      let img = document.createElement("img");
      img.src=el.recipe.image;

      div.append(name,img);

      results.append(div);

  });
}
