document.addEventListener("scroll", function(){
  var scroll = document.documentElement.scrollTop
  var largestBoard = 1.5
  var smallestBoard = 1
  var mostBlur = 15
  var leastBlur = 0
  var scrollStart = 0
  var scrollStop = 300
  if(scroll < 300){
    console.log((scroll * (largestBoard-smallestBoard)/(scrollStop-scrollStart)) + smallestBoard)
    console.log(document.getElementById("corkboard").style)
    document.getElementById("corkboard").style.transform = "scale("+((scroll * (largestBoard-smallestBoard)/(scrollStop-scrollStart)) + smallestBoard)+","+((scroll * (largestBoard-smallestBoard)/(scrollStop-scrollStart)) + smallestBoard)+")"

    document.getElementById("corkboard").style.filter = "blur("+(mostBlur - (scroll * (mostBlur-leastBlur)/(scrollStop-scrollStart)))+"px)"
  } else {
    document.getElementById("corkboard").style.transform = "scale("+largestBoard+","+largestBoard+")"
    document.getElementById("corkboard").style.filter = "blur(0px)"
  }
});

// 70 -> 100.  1 -> 1.5.   15 -> 0
// 0 -> 300.   0 -> 300

// (scroll * (1.5-1)/(300-0)) + 1