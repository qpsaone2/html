console.log("hello");
var heading = document.querySelector("#heading");
heading.onclick = function () {
  heading.style.color = "red";
  // var reply = confirm("저장하시겠습니까?")
  // console.log(reply);
  var name = prompt("이름을 입력하세요","이상철");
  console.log(name);
  document.write("<h1>"+ name+ "님 접속을 환영합니다."+"</h1>");
};
// alert("안녕하세요");