window.onload = function() {

  // var ninja = {
  //   name: "Ryu",
  //   chop(x){
  //   var _this =   this;
  //     window.setInterval(function() {
  //       if(x > 0){
  //         console.log(_this.name + " chopped the enemy");
  //         x--;
  //       }
  //     }, 1000);
  //   }
  // };
  // ninja.chop(5);


  var ninja = {
    name: "Ryu",
    chop(x){
      window.setInterval(()=> {
        if(x > 0){
          console.log(this.name + " chopped the enemy");
          x--;
        }
      }, 1000);
    }
  };
  ninja.chop(5);
}
