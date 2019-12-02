window.onload = function(){
    var x = document.getElementsByTagName("input");
    for(var i = 0; i < x.length; i++){
        if(x[i].type = "text"){
            x[i].value = "";
        }
    }
    document.getElementById("output").value = "";
  }

  function popup(){
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    window.onclick = function(event){
      if(event.target == modal){
        modal.style.display = "none";
      }
    }
  }
  
