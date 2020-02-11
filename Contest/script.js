window.onload = () => {

    var areWeReady = false;

    setTimeout(() => {
        areWeReady = true;
    }, 5000);

    document.querySelector('body').addEventListener('click',() => {
         if(areWeReady){
            let main = document.querySelector('.main-container');
            document.querySelector('.startup-page').style.display= 'none';
            setTimeout(() => {
                main.style.display= 'block';
            }, 100);   
         }
    })

    let deadline = document.getElementById("deadline");
    let finalTime = new Date("Feb 10 2020 24:00:00").getTime();
    let intervalId = setInterval(function() {
    let now = new Date().getTime();
    let t = finalTime - now;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    deadline.innerHTML = days +' D / '+ hours + ' H / '+ minutes + ' M / ' + seconds + ' S';
  if (t < 0) {
      clearInterval(intervalId);
      deadline.innerHTML="Expired.";
      document.querySelector('.clock').style.backgroundColor = 'red';
      alert('⚠ Attention:\n Submission is closed now ⛔📴❌');
  }
}, 1000);
    
};