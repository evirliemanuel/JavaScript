window.onload = function() {

      var y = 10;
      if (y > 5){
      let  y = 5;
        console.log(y);
      }
      console.log(y);

      var items = document.getElementsByTagName("li");
      // for(let x  = 0 ; x < items.length ; x++){
      for(let x  = 0 ; x < items.length ; x++){
        items[x].onclick = function(){
          console.log(x);

        }

      }
}
