function scopeExample() {
  var a = "I'm var";      
  let b = "I'm let";      
  const c = "I'm const";  

  if (true) {
    var a = "var re-declared in block";   
    let b = "new let inside block";     
    const c = "new const inside block";   
    console.log("Inside if block:");
    console.log(a); 
    console.log(b); 
    console.log(c); 
  }

  console.log("Outside if block:");
  console.log(a); 
  console.log(b); 
  console.log(c);
}


scopeExample();
