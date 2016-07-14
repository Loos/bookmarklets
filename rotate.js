// rotates a page

javascript:(function(){ style = document.createElement("style"); style.appendChild(document.createTextNode(" body{ -moz-animation:50s rotateClockwise infinite linear; -webkit-animation:50s rotateClockwise infinite linear; } @-moz-keyframes rotateClockwise{ 0%{ -moz-transform:rotate(0deg); -moz-transform-origin:50% 50%; } 100%{ -moz-transform:rotate(360deg); } } @-webkit-keyframes rotateClockwise{ 0%{ -webkit-transform:rotate(0deg); -webkit-transform-origin:50% 50%; } 100%{ -webkit-transform:rotate(360deg); } } ")); document.head.appendChild(style); }())

javascript:(function(){
style = document.createElement("style")
style.appendChild(document.createTextNode(
"
  body{
    -moz-animation:50s rotateClockwise infinite linear;
    -webkit-animation:50s rotateClockwise infinite linear;
    }

  @-moz-keyframes rotateClockwise{
    0%{ -moz-transform:rotate(0deg); -moz-transform-origin:50% 50%; }
    100%{ -moz-transform:rotate(360deg); }
    }

  @-webkit-keyframes rotateClockwise{
      0%{ -webkit-transform:rotate(0deg); -webkit-transform-origin:50% 50%; }
      100%{ -webkit-transform:rotate(360deg); }
  }
"
))
document.head.appendChild(style)
}())

