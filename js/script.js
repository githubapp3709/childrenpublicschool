function displayData(category,year){
  let galleryContainer=document.querySelector("#galleryContainer")
let innerItems=""

    let filterData=data.filter((ele)=>{
        return ele.category==category && ele.year==year
        
    })

    filterData.map((ele)=>{
        if(ele.category=="img"){
        innerItems+=`<div class="card border border-0 mb-3" style="width: 36rem">
        <img
          src="${ele.path}"
          class="card-img-top"
          alt="..."
        />
      </div>` 
        }
        else{
           
            innerItems+=`
            <div class="mb-3">
            <iframe height="450rem"
                src="${ele.path}"
                allowfullscreen
              ></iframe>
              </div>
          `
        }

        
    })

    galleryContainer.innerHTML=innerItems

    
}


function getFilterOptions(){
   let category= document.querySelector('#fileType');
   let year=document.querySelector('#year')
   displayData(category.value,year.value)
   
}


// Navbar Active Styling

function navMenuActive(item){
  let menuItems=document.querySelectorAll(".navMenuActive")
  
  menuItems.forEach(element => {
   if(element.innerHTML==item.innerHTML){
    element.classList.add("activeItem")

   
   }
   else{
    element.classList.remove("activeItem")
   
   }
  });
}