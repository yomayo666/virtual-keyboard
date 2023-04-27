let style = (() => {
    var link  = document.createElement('link');
    link.rel  = "stylesheet";
    link.href = "style.css";
    return document.head.appendChild(link);  
})();

let div = document.createElement('div');
div.className = "keyboard";
document.body.append(div);

let buttons = ["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","Delete","CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter","Shift","z","x","c","v","b","n","m",",",".","/","ArrowUp","Shift","Control","Meta","Alt"," ","Alt","ArrowLeft","ArrowDown","ArrowRight","Control"]
function make(){
    let klawa = '';
    for(let i = 0; i < buttons.length; i++){
        if(buttons[i] === "Backspace" || buttons[i] === "CapsLock" || buttons[i] === "Enter" || buttons[i] === "Shift"){
            klawa += '<div class="big-bat" >' + buttons[i] + '</div>'
        }else if(buttons[i] === " "){
            klawa += '<div class="realy_big_bat" >' + buttons[i] + '</div>'
        }else if(buttons[i] === "ArrowUp"){
            klawa += '<div class="arrow_bat" >' + "↑" + '</div>'
        }else if(buttons[i] === "ArrowLeft"){
            klawa += '<div class="arrow_bat" >' + "←" + '</div>'
        }else if(buttons[i] === "ArrowDown"){
            klawa += '<div class="arrow_bat" >' + "↓" + '</div>'
        }else if(buttons[i] === "ArrowRight"){
            klawa += '<div class="arrow_bat" >' + "→" + '</div>'
        }
        else{
        klawa += '<div class="klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
    }
    }
    document.querySelector('.keyboard').innerHTML = klawa;

}
make();
 let g = document.addEventListener('keydown', function(event){
    console.log(event.key)
});


// document.addEventListener('keydown', function(event){
//     console.log(event);
//     if (event.shiftKey && ['F','f'].includes(event.key) ) {
//         console.log('Нажаты Shift + F или Shift + f');
//     }
// });