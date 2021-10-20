
var currentIndex = 0
var previousIndex = 0;
function screenPlayer(index){
    if (index==100){
      index=currentIndex+1
    }
    document.querySelector('#controller').children[previousIndex].style.borderColor = 'transparent'
    var className = ['imageOne','imageTwo','imageThree']
    // var quotes =[
    //     'A photograph is the <br/>pause button of life',
    //     'photography is the story <br/>i fail to put into words',
    //     'photography is a love affair with life'
    // ]
    currentIndex = index
    if (currentIndex >2){
        currentIndex = 0;
    }
    className = 'screen-player ' + className[currentIndex]
    document.getElementById('home').className = className
    document.querySelector('#controller').children[currentIndex].style.borderColor = 'white'
    // document.getElementById('quotes').innerHTML = quotes[currentIndex]

    previousIndex=currentIndex
  }


  function openNav() {
    //   document.getElementById('nav-link-wrapper').style.display='None'
    document.getElementById("mySidenav").style.width = "min(45%,300px)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  const interval = setInterval(function() {
    screenPlayer(100)
  }, 6000);
  

  
