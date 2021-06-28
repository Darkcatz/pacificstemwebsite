document.addEventListener("scroll", function(){
  var scroll = document.documentElement.scrollTop
  var largestBoard = 1.5
  var smallestBoard = 1
  var mostBlur = 15
  var leastBlur = 0
  var scrollStart = 0
  var scrollStop = 300
  var largestTable = 2
  var smallestTable = 1
  var topLocation = 0
  var bottomLocation = -60
  if(scroll < scrollStop){
    document.getElementById("corkboard").style.transform = "scale("+((scroll * (largestBoard-smallestBoard)/(scrollStop-scrollStart)) + smallestBoard)+","+((scroll * (largestBoard-smallestBoard)/(scrollStop-scrollStart)) + smallestBoard)+")"
    document.getElementById("corkboard").style.filter = "blur("+(mostBlur - (scroll * (mostBlur-leastBlur)/(scrollStop-scrollStart)))+"px)"
    document.getElementById("table").style.transform = "scale("+((scroll * (largestTable-smallestTable)/(scrollStop-scrollStart)) + smallestTable)+","+((scroll * (largestTable-smallestTable)/(scrollStop-scrollStart)) + smallestTable)+")"
    document.getElementById("tableHold").style.bottom = (scroll * (bottomLocation-topLocation)/(scrollStop-scrollStart))+"vh"
  } else {
    document.getElementById("corkboard").style.transform = "scale("+largestBoard+","+largestBoard+")"
    document.getElementById("corkboard").style.filter = "blur(0px)"
    document.getElementById("table").style.transform = "scale("+largestTable+","+largestTable+")"
    document.getElementById("tableHold").style.bottom = bottomLocation+"vh"
  }

});

// 70 -> 100.  1 -> 1.5.   15 -> 0
// 0 -> 300.   0 -> 300

// (scroll * (1.5-1)/(300-0)) + 1

// 0 -> -40
// (scroll * (-40-0)/(300-0))
// 1 -> 2
// (scroll * (2-1)/(300-0)) + 1
