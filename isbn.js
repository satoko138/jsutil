function getIsbn10(isbn) {
  var isbn10 = "";
  
  if(String(isbn).substring(0,1) == "0"){
    isbn10 = String(isbn).slice(3, 13);
    
  }else if(String(isbn).substring(0,1) == "B"){
    isbn10 = isbn;
    
  }else{
    var degit1 = String(isbn).slice(3, 12);
    var degit2 = 11- (Number(degit1.slice(0,1))*10 + Number(degit1.slice(1,2))*9 + Number(degit1.slice(2,3))*8 + Number(degit1.slice(3,4))*7 
    + Number(degit1.slice(4,5))*6 + Number(degit1.slice(5,6))*5 + Number(degit1.slice(6,7))*4 + Number(degit1.slice(7,8))*3 + Number(degit1.slice(8,9))*2) % 11;
    var degit3 = String(degit2);
    if(degit2 == 11) {
      degit3 = "0";
    }else if(degit2 == 10){
      degit3 = "X";
    }
    isbn10 = degit1.concat(degit3)
  }
  
  return isbn10;
}
