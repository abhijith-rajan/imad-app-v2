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
      if(request.readystate==XMLhttpRequest.DONE)
      {
          if(request.status==200)
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