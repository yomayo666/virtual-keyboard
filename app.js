const addStyle = (() => {
    var link  = document.createElement('link');
    link.rel  = "stylesheet";
    link.href = "style.css";
    return document.head.appendChild(link);  
})();
let form = document.createElement('form');
form.className = "mainform";
document.body.append(form);

inp = '<input type="textarea" name="nasa-experience" value="1" class="main_form">'
document.querySelector('.mainform').innerHTML = inp;

const addDivKeyboard = (() => {
    let div = document.createElement('div');
    div.className = "keyboard";
    document.body.append(div);
})();





let buttons = ["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","[","]","''","Delete","CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter","Shift","z","x","c","v","b","n","m",",",".","/","ArrowUp","Shift","Control","Meta","Alt",' ',"Alt","ArrowLeft","ArrowDown","ArrowRight","Control"]
let makess = (() => {
    let klawa = '';
    for(let i = 0; i < buttons.length; i++){
        if(buttons[i] === "Backspace" || buttons[i] === "CapsLock" || buttons[i] === "Enter" || buttons[i] === "Shift"){
            klawa += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
        }else if(buttons[i] === ' '){
            klawa += '<div class="realy_big_bat klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
        }else if(buttons[i] === "ArrowUp"){
            klawa += '<div class="arrow_bat" data="'+buttons[i]+'">' + "↑" + '</div>'
        }else if(buttons[i] === "ArrowLeft"){
            klawa += '<div class="arrow_bat" data="'+buttons[i]+'">' + "←" + '</div>'
        }else if(buttons[i] === "ArrowDown"){
            klawa += '<div class="arrow_bat" data="'+buttons[i]+'">' + "↓" + '</div>'
        }else if(buttons[i] === "ArrowRight"){
            klawa += '<div class="arrow_bat klaw-ru" data="'+buttons[i]+'">' + "→" + '</div>'
        }
        else{
        klawa += '<div class="klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
        }
    }
    document.querySelector('.keyboard').innerHTML = klawa;

})()


let = ['keydown', 'keyup'].forEach(function(event) {
    window.addEventListener(event, function(event){
        if (event.type == 'keydown') {
            document.querySelector('.keyboard [data="'+ event.key+'"]').classList.add('active')
            console.log('Зажали...');
            console.log(event);
            document.querySelector('.main_form').value += event.key;
            //event.preventDefault()
        }
        else{
          console.log('Отжали');
          document.querySelector('.keyboard [data="'+ event.key+'"]').classList.remove('active')
        }
    }); 
  });

//   document.querySelectorAll('.keyboard .klaw-ru').forEach(function(element){
//     element.addEventListener('keydown', function(event){
//         if (!['0','1','Backspace','Delete','Tab'].includes(event.key)) {
//             console.log("sdasd")
//             document.querySelectorAll('.keyboard .klaw-ru').forEach(function(element){
//                             element.classList.remove('active')
//                    })
//       }
//     });
//   });
// document.querySelectorAll('.keyboard .klaw-ru').forEach(function(element){
//     element.onclick = function(element){
//         document.querySelectorAll('.keyboard .klaw-ru').forEach(function(element){
//             element.classList.remove('active')
//         })
//         let code = this.getAttribute('data')
//         this.classList.add('active')
//         console.log(code)
//     }
// })



document.addEventListener('keyup', function(event){
    if (event.shiftKey && ['F','f'].includes(event.key) ) {
        console.log('Нажаты Shift + F или Shift + f');
    }
});
