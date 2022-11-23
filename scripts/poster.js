var index=0;
    var imgs=["images/sportPic2.webp","images/sportPic3.webp","images/sportPic4.webp","images/sportPic5.webp"]; //posters src
    function scrollPic(){
        document.getElementById("img").src=imgs[index];
        index++;
        if(index > 2){
            index=0;    
        }
    }
  setInterval("scrollPic()",3000);  //run qiehuan() every 3 seconds


