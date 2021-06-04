// var j;

// for (j=1; j<=9; j++)
// document.write("5 *"+j+"=" + 5*j + "<br>");

var i,j;

for(i=1; i<=9; i++){
  if(i%2===1) continue;
  document.write("<div>");
  document.write("<h1>" + i + "단</h1>");
  for(j=1;j<=9;j++){
    document.write(i+"*"+j + "=" + i*j + "<br>")
  }
  document.write("</div>")

  if(i===3) break;
}

