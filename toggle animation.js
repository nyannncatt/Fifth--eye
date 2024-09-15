document.getElementById('changeButton').addEventListener('click', function() {
    var body = document.body;
    var h1 = document.getElementsByTagName('h1')[0];
    var h2 = document.getElementsByTagName('h2')[0];
    var currentBackground = getComputedStyle(body).backgroundImage;


    if (currentBackground.includes('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWs4bjNqM290eXB2MXY4YWRtb2ZpZGU4ZmlycXd1bTJiYnN2ZTJnNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tdC6N1RKNp4swre2JY/giphy.webp')) {
      body.style.backgroundImage = 'url("https://i.gifer.com/NPVr.gif")';

      
    } else {
      body.style.backgroundImage = 'url("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWs4bjNqM290eXB2MXY4YWRtb2ZpZGU4ZmlycXd1bTJiYnN2ZTJnNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tdC6N1RKNp4swre2JY/giphy.webp")';

    
      
    }


});


