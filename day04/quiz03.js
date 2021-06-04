var num;

num=prompt("숫자를 입력하시오.");


if(num !== null){
  if(num%4==0){
    document.write("<div>");
    document.write(num+"은/는 4의 배수입니다.")
   
  }
  else{
    document.write("4의 배수가 아닙니다.");
  }
  document.write("</div>");
  
}