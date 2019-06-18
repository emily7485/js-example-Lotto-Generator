var myArr = new Array(6);
for (var i = 0; i < 6; i++) {
	var input = prompt("내가 선택한 번호: " + myArr.join(' ')
			+ "\n로또 번호를 입력해 주세요(1~45)");
	if (input > 45 || input < 1) {
		alert("Again, Out of range");
		i--;
	} else {
		myArr[i] = input;
		for (var j = 0; j < i; j++) {
			if (myArr[i] == myArr[j]) {
				alert("숫자가 중복됩니다. 다시 입력해주세요")
				myArr = myArr.slice(0, i);
				i--;
			}
		}
	}
}
/*
 * testarr = myArr.join(' '); alert(testarr);
 */

/* 테이블 생성 */

document.write("<h2>로또는 해로워요<h2>");
document.write("<table>");
var num = 1;
for (var i = 0; i < 7; i++) {
	document.write("<tr>");
	for (var j = 0; j < 7; j++) {
		if (num <= 45)
			document.write("<td>" + num + "</td>");
		else
			document.write("<td>" + " " + "</td>");
		num++;
	}
	document.write("</tr>");
}
document.write("</table>");

/* 랜덤 수 7개 생성 */

var arr = new Array(7);
for (var i = 0; i < 7; i++) {
	arr[i] = parseInt((Math.random() * 45) + 1);
	for (var j = 0; j < i; j++) {
		if (arr[i] == arr[j]) {
			i--;
		}
	}
}

function start() {
	document.getElementById('result').value = myArr.join(' ');
	document.getElementById('result').readOnly = true;
	
}

/* 버튼과 랜덤값을 비교한 배경 변경 */

function first() {
	var num = arr[0];
	document.getElementsByTagName('td')[num - 1].id = 'first';

//	document.getElementById('result').value = myArr.join(' ');
//	document.getElementById('result').readOnly = true;

}
function second() {
	var num = arr[1];
	document.getElementsByTagName('td')[num - 1].id = 'second';
}
function third() {
	var num = arr[2];
	document.getElementsByTagName('td')[num - 1].id = 'third';
}
function fourth() {
	var num = arr[3];
	document.getElementsByTagName('td')[num - 1].id = 'fourth';
}
function fifth() {
	var num = arr[4];
	document.getElementsByTagName('td')[num - 1].id = 'fifth';
}
function sixth() {
	var num = arr[5];
	document.getElementsByTagName('td')[num - 1].id = 'sixth';
}

function bonus() {
	var num = arr[6];
	display();
	document.getElementsByTagName('td')[num - 1].id = 'bonus';
}
function display() {
	var carry = arr.slice(0, 6)
	document.getElementById('display').value = carry.join(' ') + " + " + arr[6]
			+ "(보너스)";
	document.getElementById('display').readOnly = true;
}
function isEqual() {
	var cnt = 0;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < myArr.length; j++) {
			if (arr[i] == myArr[j]) {
				cnt++;
			}
		}
	}
	alert(cnt + "개의 숫자가 같습니다.");
}
