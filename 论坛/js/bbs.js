function post(){
	document.getElementById("post").style.display="block";
}

var tou=new Array("tou01.jpg","tou02.jpg","tou03.jpg","tou04.jpg");
function postSuccess(){
	var newLi=document.createElement("li");
	var iNum=Math.floor(Math.random()*4);
	var touDiv=document.createElement("div");
	var touImg=document.createElement("img");
	touImg.setAttribute("src","images/"+tou[iNum]);
	touDiv.appendChild(touImg);
	
	var titleH1=document.createElement("h1");
	var title=document.getElementById("title").value;
	 titleH1.innerHTML=title;
	
	var newP=document.createElement("p");
	var secName=document.createElement("span");
	var secSelect=document.getElementById("sec").value;
	secName.innerHTML="板块："+secSelect;
	var myDate=new Date();
	var currentDate=myDate.getFullYear()+"-"+parseInt(myDate.getMonth()+1)+"-"+myDate;
	var timeSpan=document.createElement("span");
	timeSpan.innerHTML="发表时间："+currentDate;
	newP.appendChild(secName);
	newP.appendChild(timeSpan);
	
	newLi.appendChild(touDiv);
	newLi.appendChild(titleH1);
	newLi.appendChild(newP);
	var postList=document.getElementById("postList");
	postList.insertBefore(newLi,postList.firstChild);
	
	document.getElementById("title").value="";
	document.getElementById("content").value="";
	
	document.getElementById("post").style.display="none";
}