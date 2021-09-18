function boocl() {
    for (var i = 1000;i>10; i=i-2){
       var h1 = document.createElement('h1')
       h1.innerHTML='The element '+ i
       document.getElementById('iddiv')
           .appendChild(h1)
   }
}