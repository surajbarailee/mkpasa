
var currentIndex = 0
var previousIndex = 0;
function screenPlayer(index){
    console.log('clicked')
    document.querySelector('#controller').children[previousIndex].style.borderColor = 'transparent'
    var className = ['imageOne','imageTwo','imageThree']
    var quotes =[
        'Grow old with me! <br/>The best is yet to be.',
        'Love is a smoke made with<br/> the fume of sighs.',
        'If I get married, <br/>I want to be very married.'
    ]
    currentIndex = index
    if (currentIndex >2){
        currentIndex = 0;
    }
    className = 'screen-player ' + className[currentIndex]
    document.getElementById('home').className = className
    document.querySelector('#controller').children[currentIndex].style.borderColor = 'white'
    document.getElementById('quotes').innerHTML = quotes[currentIndex]

    previousIndex=currentIndex
  }


  function openNav() {
    //   document.getElementById('nav-link-wrapper').style.display='None'
    document.getElementById("mySidenav").style.width = "min(45%,300px)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

