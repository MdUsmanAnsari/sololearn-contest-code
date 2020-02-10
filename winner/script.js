window.onload = function(){

    const btnHold = document.querySelector('.btn-red');
    const btnText = document.querySelector('.btn-red__text');
    var frame = document.querySelector('.winner-container');
    var btn = document.querySelectorAll('.btn');
    var position = document.querySelector('.position');
    var winner=document.querySelector('.winner-name');
    var rating = document.querySelector('.rating');
    var star = document.getElementsByClassName('rating-5');
    var moreTab = document.querySelector('.more-winners');
    document.getElementById('btn-1').classList.add('btn-active');


    var winnerList = [
        {
            name:'Abhinaya',
            profileId:'12006051',
            codeLink:'https://code.sololearn.com/W4yIvoMBqp3N/?ref=app',
            positionColor:'linear-gradient(to bottom left, #fff0ad, #ae933c)'
        },
        {
            name:'Sudeep Jaiswal',
            profileId:'8843885',
            codeLink:'https://code.sololearn.com/Wkb2x5T25qKp/?ref=app',
            positionColor:'linear-gradient(to bottom left, #fcfcfc, #959595)'
        },
        {
            name:'Ankit Yadav',
            profileId:'14891719',
            codeLink:'https://code.sololearn.com/Wy9xITsASAl2/?ref=app',
            positionColor:'linear-gradient(to bottom left, #ecc9a3, #af7243)'
        },
        {
            name:'{ Ëkwîbrîum }"',
            profileId:'17091656',
            codeLink:'https://code.sololearn.com/W7n6wcaAGZu3/?ref=app',
            positionColor:'linear-gradient(to bottom left, #e19245, #910f00)'
        },
        {
            name:'ALhama',
            profileId:'14713652',
            codeLink:'https://code.sololearn.com/WhH7xjK8KbgL/?ref=app',
            positionColor:'linear-gradient(to bottom left, #e9f5e1, #939f89)'
        }
    ];

     var imgUrl =''; 
     addingStar(); 
     addImage();
    
      
      
    btnHold.addEventListener('click',function(){
            btnText.remove();
            btnHold.classList.add('btn-red__click');
            setTimeout(function(){
                    document.querySelector('.starter-page').remove();
                    document.querySelector('main').style.display = 'block';
            },1200);   
    });


    document.querySelector('.btn-box').addEventListener('click',function(e){
        var index = e.target.text;
        var id = e.target.id;
        if(e.target.className == 'btn-box' || position.innerHTML === index)
        return;
       // navigator.vibrate(500);
        //Btn-Begin
        for(var i = 0 ; i < btn.length ; i++){
            btn[i].classList.remove('btn-active');
        }
        document.getElementById(id).classList.add('btn-active'); 
        frame.classList.add('winner-container--inactive');
        setTimeout(function(){
            frame.classList.remove('winner-container--inactive');
            frame.classList.add('winner-container--active');
            for(var i= 0 ; i < 5 ; i++){
                rating.removeChild(star[0]);
            }
            addingStar(index);
            addImage(index);
        },1000)         
    })


frame.addEventListener('click',function(){
        window.open(imgUrl);
})
    


function addImage(index = 1){
    var imgSrc = 'https://api.sololearn.com/Uploads/Avatars/'+winnerList[index-1].profileId+'.jpg';
    document.querySelector('.user-img').src = imgSrc;
    position.style.backgroundImage = winnerList[index-1].positionColor;
    winner.innerHTML = winnerList[index-1].name;
    position.innerHTML = index;
    imgUrl = winnerList[index-1].codeLink;
}

function addingStar(index = 1){
    for(var i = 0 ; i < 5; i++){
        var html;
        if(i < 6 - index)
           html = '<i class="fa fa-star rating-5" aria-hidden="true" ></i>'
        else
           html ='<i class="fa fa-star-o rating-5" aria-hidden="true"></i>'
           rating.insertAdjacentHTML('beforeend',html);
           star[i].style.backgroundImage = winnerList[index-1].positionColor;
    }
}


moreTab.addEventListener('click',function(){

    if(moreTab.style.top !=='8vh')
    // navigator.vibrate(400);  
     moreTab.style.top = '8vh';
     moreTab.style.overflow = 'scroll';
     setTimeout(function(){
        document.querySelector('body').style.background = '#dcdde1';
     },500)
     
})

document.querySelector('.winner-box').addEventListener('click',function(){
    moreTab.style.top = '90vh';
    moreTab.style.overflow = 'hidden';
    moreTab.scrollTop = 0;
    document.querySelector('body').style.background = '#f5f6fa';
})



}