const addStyle = (() => {
    var link  = document.createElement('link');
    link.rel  = "stylesheet";
    link.href = "style.css";
    return document.head.appendChild(link);  
})();
let form = document.createElement('form');
form.className = "mainform";
document.body.append(form);

inp = '<textarea name="nasa-experience" value="1" class="main_form" rows="10" cols="20" autofocus </textarea>'
document.querySelector('.mainform').innerHTML = inp;

let ford = document.createElement('form');
ford.className = "mainform2";
document.body.append(ford);
hui = '<input type="checkbox" class="dudu" </input>'
document.querySelector('.mainform2').innerHTML = hui;


const addDivKeyboard = (() => {
    let div = document.createElement('div');
    div.className = "keyboard";
    document.body.append(div);
})();

var big_cey =""
var litlle_key =""

    

let buttons = ["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","[","]","''","Delete","CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter","Shift","z","x","c","v","b","n","m",",",".","/","ArrowUp","ShiftRight","Control","Meta","Alt",' ',"AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"]
let makess = (() => {
    for(let i = 0; i < buttons.length; i++){
        if(buttons[i] === "Backspace" || buttons[i] === "CapsLock" || buttons[i] === "Enter" || buttons[i] === "Shift"){
            litlle_key += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
            big_cey += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
        }else if(buttons[i] === "AltRight"){
            litlle_key +='<div class="klaw-ru" data="'+buttons[i]+'">' + "Alt" + '</div>'
            big_cey += '<div class="klaw-ru" data="'+buttons[i]+'">' + "Alt" + '</div>'
        
        }else if(buttons[i] === "ShiftRight"){
            litlle_key += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + "Shift" + '</div>'
            big_cey += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + "Shift" + '</div>'
            
        }
        else if(buttons[i] === "ControlRight"){
            litlle_key += '<div class="klaw-ru" data="'+buttons[i]+'">' + "Control" + '</div>'
            big_cey += '<div class="klaw-ru" data="'+buttons[i]+'">' + "Control" + '</div>'
            
        }
        else if(buttons[i] === ' '){
            litlle_key += '<div class="realy_big_bat klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
            big_cey += '<div class="realy_big_bat klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
        }else if(buttons[i] === "ArrowUp"){
            litlle_key += '<div class="arrow_bat" data="'+buttons[i]+'">' + "↑" + '</div>'
            big_cey += '<div class="arrow_bat" data="'+buttons[i]+'">' + "↑" + '</div>'
        }else if(buttons[i] === "ArrowLeft"){
            litlle_key += '<div class="arrow_bat" data="'+buttons[i]+'">' + "←" + '</div>'
            big_cey += '<div class="arrow_bat" data="'+buttons[i]+'">' + "←" + '</div>'
        }else if(buttons[i] === "ArrowDown"){
            litlle_key +=   '<div class="arrow_bat" data="'+buttons[i]+'" >' + "↓" + '</div>'
            big_cey += '<div class="arrow_bat" data="'+buttons[i]+'" >' + "↓" + '</div>'
        }else if(buttons[i] === "ArrowRight"){
            litlle_key +=   '<div class="arrow_bat klaw-ru" data="'+buttons[i]+'">' + "→" + '</div>'
            big_cey += '<div class="arrow_bat klaw-ru" data="'+buttons[i]+'">' + "→" + '</div>'
        }
        else{
            litlle_key += '<div class="klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
            if(buttons[i].length < 2){
                big_cey += '<div class="klaw-ru" data="'+buttons[i].toUpperCase()+'">' + buttons[i].toUpperCase() + '</div>'
            }else{
                big_cey += '<div class="klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
            }
        
        }
    }

    document.querySelector('.keyboard').innerHTML = litlle_key;

})()
var p = ""

// document.addEventListener('keyup', function(event){
//     if (event.shiftKey && ['Alt'].includes(event.key) ) {
//              console.log('Нажаты Shift + F или Shift + f');
//         console.log(event)


//             if (p == "") {
//                 document.querySelector('.dudu').checked = "checked";
//                 p = "checked"
//             } else {
//                 document.querySelector('.dudu').checked = "";S
//                 p = ""
//             }
//     }
// });





document.addEventListener('keyup', function(event){
    if (event.altKey && event.key=='Shift') {
        console.log('Нажаты Shift + F или Shift + f');
        console.log(event)
        if (p == "") {
            document.querySelector('.dudu').checked = "checked";
            p = "checked"
        } else {
            document.querySelector('.dudu').checked = "";
            p = ""
        }
    }else if(event.shiftKey && event.key=='Alt') {
        console.log('Нажаты Shift + F или Shift + f');
        console.log(event)
        if (p == "") {
            document.querySelector('.dudu').checked = "checked";
            p = "checked"
        } else {
            document.querySelector('.dudu').checked = "";
            p = ""
        }
    }
});
// document.addEventListener('keyup', function(event){
//     if (event.altKey && ['Alt'].includes(event.key) ) {
//              console.log('Нажаты Shift + F или Shift + f');
//         console.log(event)
//     }})
// document.addEventListener('keyup', function(event){
//     if (event.shiftKey && event.ctrlKey) {
//         console.log('Нажаты Shift + F или Shift + f');
//     }
// });
// document.addEventListener('keyup', function(event){
//     if (['F','f'].includes(event.key)&& event.shiftKey) {
//         console.log('Нажаты Shift + F или Shift + f');
//     }
// });

 const textarea = document.querySelector('textarea')

window.addEventListener('keydown', (e) => {
    console.log(e)
    /* if (e.key === "Shift")  {
        document.querySelector('.keyboard').innerHTML = big_cey;
    } */
     if (e.code === "Tab") {
    e.preventDefault()
    document.querySelector('.keyboard [data="'+ e.code +'"]').classList.add('active')

    textarea.setRangeText(
      '  ',
      textarea.selectionStart,
      textarea.selectionStart,
      'end'
    )
  }if(e.code === "ShiftRight" || e.code === "AltRight" || e.code === "ControlRight"){
    document.querySelector('.keyboard [data="'+ e.code +'"]').classList.add('active')
  }else{
    document.querySelector('.keyboard [data="'+ e.key +'"]').classList.add('active')
  }
})

// document.addEventListener('keydown', (e) =>{
//     if (e.code === "ShiftRight") {
        
//         document.querySelector('.keyboard').innerHTML = big_cey;

//     }else{
//         document.querySelector('.keyboard').innerHTML = litlle_key;
//     }
// });

window.addEventListener('keyup', (e) => {
    if(e.code === "ShiftRight" || e.code === "AltRight" || e.code === "ControlRight"){
        document.querySelector('.keyboard [data="'+ e.code +'"]').classList.remove('active')
    }else{
        document.querySelector('.keyboard [data="'+ e.key+'"]').classList.remove('active')
    }
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Shift")  {
        document.querySelector('.keyboard').innerHTML = big_cey;
        document.querySelector('.keyboard [data="'+ e.key +'"]').classList.add('active')
    }
})
window.addEventListener('keyup', (e) => {
    if(e.key === "Shift"){
        document.querySelector('.keyboard').innerHTML = litlle_key;}
        ocument.querySelector('.keyboard [data="'+ e.key+'"]').classList.remove('active')
})

// let = ['keydown', 'keyup'].forEach(function(event) {
//     window.addEventListener(event, function(event){
//      if (event.type == 'keydown') {
//             console.log('Зажали...');
//             console.log(event)
//             document.querySelector('.keyboard [data="'+ event.key +'"]').classList.add('active')
//             document.querySelector('.main_form').elem.focus()
           
//         }if(event.code === "ShiftRight" || event.code === "AltRight" || event.code === "ControlRight"){
//             document.querySelector('.keyboard [data="'+ event.code +'"]').classList.add('active')
//           }
//         else{ 
//           console.log('Отжали');
//           document.querySelector('.keyboard [data="'+ event.key+'"]').classList.remove('active')
//         }
//     }); 
//   });





/* 
  let = ['keydown', 'keyup'].forEach(function(event) {
    window.addEventListener(event, function(event){
        event.preventDefault()
        if (event.type == 'keydown') {
            console.log('Зажали...');
            document.querySelector('.keyboard [data="'+ event.key +'"]').classList.add('active')
            if(event.key.length === 1){
                document.querySelector('.main_form').value += event.key;
            }else{
                console.log("fofo")
               
            }
        }
        else{ 
          console.log('Отжали');
          document.querySelector('.keyboard [data="'+ event.key+'"]').classList.remove('active')
        }
    }); 
  }); */

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
document.querySelectorAll('.keyboard .klaw-ru').forEach(function(element){
    element.onclick = function(element){
        document.querySelectorAll('.keyboard .klaw-ru').forEach(function(element){
            element.classList.remove('active')
        })
        let code = this.getAttribute('data')
        this.classList.add('active')
        console.log(code)
    }
})

// document.addEventListener('keyup', function(event){
//     if (event.shiftKey && ['F','f'].includes(event.key) ) {
//         console.log('Нажаты Shift + F или Shift + f');
//     }
// });

// document.addEventListener('keyup', function(event){
//     if (event.shiftKey && ['F','f'].includes(event.key) ) {
//         console.log('Нажаты Shift + F или Shift + f');
//     }
// });
