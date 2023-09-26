(function(){
    const pictures = ["1","2","3","4","5","6","7"];
    const buttons = document.querySelectorAll(".btn");
    console.log(buttons);
    const imgDiv = document.querySelector(".img-container")

    let counter = 0
  buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        console.log(button);
        if(button.classList.contains('btn-left')){
            counter--;
            if(counter<0){
                counter=pictures.length - 1
            }
            imgDiv.style.background=`url('./img/${pictures[counter]}.jpg')`
            imgDiv.style.backgroundSize="cover";
            imgDiv.style.backgroundRepeat="no-repeat";
        }
        if(button.classList.contains('btn-right')){
            counter++;
            if(counter>pictures.length - 1){
                counter=0;
            }
            imgDiv.style.background=`url('./img/${pictures[counter]}.jpg')`;
            imgDiv.style.backgroundSize="cover";
            imgDiv.style.backgroundRepeat="no-repeat";
        }
    })
  })
})()