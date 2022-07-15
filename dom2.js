var filter=document.getElementById("filter");
filter.addEventListener('keyup',searchItem,false);
function searchItem(e){
    var text=e.target.value.toLowerCase();
    var items=document.getElementsByClassName("lis");
    Array.from(items).forEach((item)=>{
      itemValue=item.firstChild.textContent;
      if(itemValue.toLowerCase().indexOf(text)!=-1){
        item.style.display="block";
      }
      else{
        item.style.display="none";
      }
    })}