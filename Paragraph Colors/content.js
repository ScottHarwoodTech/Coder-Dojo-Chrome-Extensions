console.log("All your paragraphs belong to me")

var paragraphs = document.getElementsByTagName('p');

var colors = ["#9400D3","#4B0082","#0000FF","#FFFF00","#FF7F00","FF0000"];
for (var i =0;i < colors.length ; i++)
{
  var l = Math.floor((Math.random()*colors.length));
  paragraphs[i].style["background-color"] = colors[l];
}
