console.log('Loaded!');
var marginLeft=0;
var img=document.getElementById('madi');
function moveRight()
{
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick=function(){
    var interval=setInterval(moveRight,10);
};

var button=document.getElementById('counter');
button.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange =function(){
      if(request.readyState===XMLHttpRequest.DONE)
      {
          if(request.status===200)
          {
              var counter=request.responseText;
              var count =document.getElementById('count');
              count.innerHTML=counter.toString();
          }
      }
    };
    request.open('GET','http://abhijith-rajan.imad.hasura-app.io/counter',true);
    request.send(null);
};

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange =function(){
      if(request.readyState===XMLHttpRequest.DONE)
      {
          if(request.status===200)
          {
              var names=request.responseText;
              names=JSON.parse(names);
              var list='';
              for(var i=0;i<names.length;i++)
              {
                  list +='<li>' + names[i] + '</li>';
              }
              var ul= document.getElementById("namelist");
              ul.innerHTML=list;

          }
      }
    };
    var nameInput=document.getElementById("name");
    name=nameInput.value;
    request.open('GET','http://abhijith-rajan.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
}