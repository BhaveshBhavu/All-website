console.log('Hello World!');



for (var o = 0; o < 16; o++) {

var img = new Array('img/1.jpg', 'img/2.jpg','img/3.jpeg', 'img/4.png', 'img/5.jpg','img/6.jpg','img/7.jpeg', 'img/8.jpg','img/9.jpg', 'img/10.jpg', 'img/11.jpg','img/12.jpg','img/13.jpg','img/14.jpg','img/15.jpg','img/16.png');

var a = new Array('https://bhaveshbhavu.github.io/Doremon/', 'https://bhaveshbhavu.github.io/password-N/','https://bhaveshbhavu.github.io/LET-S-TRAVEL/', 'https://bhaveshbhavu.github.io/YOU-TUBE/', 'https://bhaveshbhavu.github.io/May-play/','https://bhaveshbhavu.github.io/food/','https://bhaveshbhavu.github.io/Loki/', 'https://bhaveshbhavu.github.io/img/','https://bhaveshbhavu.github.io/HDJum.Com/', 'https://bhaveshbhavu.github.io/Colors/', 'https://bhaveshbhavu.github.io/RATHORE-BHAVESH/','https://bhaveshbhavu.github.io/-_-/','https://bhaveshbhavu.github.io/Hamster/','https://bhaveshbhavu.github.io/Free-g/','https://bhaveshbhavu.github.io/Download-/','https://github.com/');

for (var i = 0; i < 1; i++) {
  
 var box = document.querySelector('.img_box');
  

 box.innerHTML += `<img src="${img[o]}" onclick="window.open('${a[o]}')"/>`;
  
 
  }
  
}


//bridhdjdhd
