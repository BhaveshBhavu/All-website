console.log('Hello World!');



for (var o = 0; o < 18; o++) {

var img = new Array('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXltevQNZhS9wFgnb_lb3nK8VovW__leLL-Q&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjOy24GD89HAkvuWWBq3wyJi3pWs9HGqvyKQMjG0d2i4239g-ZuaObj5x&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWsCqc1FvnqwOJLUQ5XhmNOk7bCALvv7zkGw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrKsREEtqBw9dvhdXihlHYCUAiRfxBxpdrA&usqp=CAU', 'https://whatsappstatuszone.com/wp-content/uploads/2021/04/Romantic-love-song-nobita-shizuka-HD-status-%F0%9F%92%AB%F0%9F%92%93-%F0%9F%94%B7%F0%9F%94%B7Cute-Whatsapp-Status-Doremon-status-life%F0%9F%94%B7%F0%9F%94%B7.mp4.Still001-1.jpg','https://i.pinimg.com/736x/a3/55/43/a355438528dc074fddd710a3dae9559d.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXltevQNZhS9wFgnb_lb3nK8VovW__leLL-Q&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjOy24GD89HAkvuWWBq3wyJi3pWs9HGqvyKQMjG0d2i4239g-ZuaObj5x&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWsCqc1FvnqwOJLUQ5XhmNOk7bCALvv7zkGw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrKsREEtqBw9dvhdXihlHYCUAiRfxBxpdrA&usqp=CAU', 'https://whatsappstatuszone.com/wp-content/uploads/2021/04/Romantic-love-song-nobita-shizuka-HD-status-%F0%9F%92%AB%F0%9F%92%93-%F0%9F%94%B7%F0%9F%94%B7Cute-Whatsapp-Status-Doremon-status-life%F0%9F%94%B7%F0%9F%94%B7.mp4.Still001-1.jpg','https://i.pinimg.com/736x/a3/55/43/a355438528dc074fddd710a3dae9559d.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwC69ODZ62TfF7RMU90URX9uqOV591-KsjvtoAlxjbExQhS-AJRdzIkbOQ&s=10','https://i.pinimg.com/736x/8f/3a/63/8f3a6370e072a3624e8b92077c525fd8.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQ40aDQgjB2LeW4ynHQvX27tQGkaEwycAXQ&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjOy24GD89HAkvuWWBq3wyJi3pWs9HGqvyKQMjG0d2i4239g-ZuaObj5x&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWsCqc1FvnqwOJLUQ5XhmNOk7bCALvv7zkGw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrKsREEtqBw9dvhdXihlHYCUAiRfxBxpdrA&usqp=CAU');



for (var i = 0; i < 1; i++) {
  

  
      var box = document.querySelector('.img_box');
  
 // onclick="${f}" //


 box.innerHTML += `<img src="${img[o]}" onclick="window.open('${img[o]}')"/>`;
  
 
    }
  
  }



