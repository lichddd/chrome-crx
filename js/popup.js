(function (){
  document.getElementById("searchbtn").addEventListener("click",function(e){

    window.open(chrome.extension.getURL('page/index.html'));


  });
})()
