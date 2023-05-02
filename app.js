const addStyle = (() => {
    var link  = document.createElement('link');
    link.rel  = "stylesheet";
    link.href = "style.css";
    return document.head.appendChild(link);  
})();





let form = document.createElement('form');
form.className = "mainform";
document.body.append(form);


inp = '<textarea name="nasa-experience" value="1" class="main_form" rows="10" cols="20" autofocus> Еще не доделал смена языка SHIFT ALT установи у себя Английский маленький и перезагрузи</textarea>'
document.querySelector('.mainform').innerHTML = inp;

let ford = document.createElement('form');
ford.className = "mainform2";
document.body.append(ford);
hui = '<input type="checkbox" class="dudu" /input>'
document.querySelector('.mainform2').innerHTML = hui;


const addDivKeyboard = (() => {
    let div = document.createElement('div');
    div.className = "keyboard";
    document.body.append(div);
})();

var big_cey =""
var litlle_key =""
var ru_lit = ""
var ru_big = ""
var position
let rubat =   ["ё","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","/","Delete","CapsLock","ф","ы","в","а","п","р","о","л","д","ж","э","Enter","ShiftLeft","я","ч","с","м","и","т","ь","б","ю",".","ArrowUp","ShiftRight","Control","Meta","Alt",' ',"AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"]
let i = 0
let buttons = ["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","[","]","/","Delete","CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter","ShiftLeft","z","x","c","v","b","n","m",",",".","/","ArrowUp","ShiftRight","Control","Meta","Alt",' ',"AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"]
let makess = (() => {
    
    for(let i = 0; i < buttons.length; i++){
        if(buttons[i] === "Backspace" || buttons[i] === "CapsLock" || buttons[i] === "Enter" || buttons[i] === "Shift"){
            litlle_key += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
            big_cey += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
            ru_lit += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
            ru_big += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
        }else if(buttons[i] === "AltRight"){
            litlle_key +='<div class="klaw-ru" data="'+buttons[i]+'">' + "Alt" + '</div>'
            big_cey += '<div class="klaw-ru" data="'+buttons[i]+'">' + "Alt" + '</div>'
            ru_lit +='<div class="klaw-ru" data="'+buttons[i]+'">' + "Alt" + '</div>'
            ru_big +='<div class="klaw-ru" data="'+buttons[i]+'">' + "Alt" + '</div>'
        }else if(buttons[i] === "ShiftRight"){
            litlle_key += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + "Shift" + '</div>'
            big_cey += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + "Shift" + '</div>'
            ru_lit += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + "Shift" + '</div>'
            ru_big += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + "Shift" + '</div>'
        }
        else if(buttons[i] === "ShiftLeft"){
            litlle_key += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + "Shift" + '</div>'
            big_cey += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + "Shift" + '</div>'
            ru_lit += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + "Shift" + '</div>'
            ru_big += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + "Shift" + '</div>'
            
        }
        else if(buttons[i] === "ControlRight"){
            litlle_key += '<div class="klaw-ru" data="'+buttons[i]+'">' + "Control" + '</div>'
            big_cey += '<div class="klaw-ru" data="'+buttons[i]+'">' + "Control" + '</div>'
            ru_lit += '<div class="klaw-ru" data="'+buttons[i]+'">' + "Control" + '</div>'
            ru_big += '<div class="klaw-ru" data="'+buttons[i]+'">' + "Control" + '</div>'
            
        }
        else if(buttons[i] === ' '){
            litlle_key += '<div class="realy_big_bat klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
            big_cey += '<div class="realy_big_bat klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
            ru_lit += '<div class="realy_big_bat klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
            ru_big += '<div class="realy_big_bat klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
        }else if(buttons[i] === "ArrowUp"){
            litlle_key += '<div class="arrow_bat" data="'+buttons[i]+'">' + "↑" + '</div>'
            big_cey += '<div class="arrow_bat" data="'+buttons[i]+'">' + "↑" + '</div>'
            ru_lit += '<div class="arrow_bat" data="'+buttons[i]+'">' + "↑" + '</div>'
            ru_big += '<div class="arrow_bat" data="'+buttons[i]+'">' + "↑" + '</div>'
        }else if(buttons[i] === "ArrowLeft"){
            litlle_key += '<div class="arrow_bat" data="'+buttons[i]+'">' + "←" + '</div>'
            big_cey += '<div class="arrow_bat" data="'+buttons[i]+'">' + "←" + '</div>'
            ru_lit += '<div class="arrow_bat" data="'+buttons[i]+'">' + "←" + '</div>'
            ru_big += '<div class="arrow_bat" data="'+buttons[i]+'">' + "←" + '</div>'
        }else if(buttons[i] === "ArrowDown"){
            litlle_key +=   '<div class="arrow_bat" data="'+buttons[i]+'" >' + "↓" + '</div>'
            big_cey += '<div class="arrow_bat" data="'+buttons[i]+'" >' + "↓" + '</div>'
            ru_lit += '<div class="arrow_bat" data="'+buttons[i]+'" >' + "↓" + '</div>'
            ru_big += '<div class="arrow_bat" data="'+buttons[i]+'" >' + "↓" + '</div>'
        }else if(buttons[i] === "ArrowRight"){
            litlle_key +=   '<div class="arrow_bat klaw-ru" data="'+buttons[i]+'">' + "→" + '</div>'
            big_cey += '<div class="arrow_bat klaw-ru" data="'+buttons[i]+'">' + "→" + '</div>'
            ru_lit +='<div class="arrow_bat klaw-ru" data="'+buttons[i]+'">' + "→" + '</div>'
            ru_big +='<div class="arrow_bat klaw-ru" data="'+buttons[i]+'">' + "→" + '</div>'
        }
        else{
            litlle_key += '<div class="klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
            ru_lit += '<div class="klaw-ru" data="'+rubat[i]+'">' + rubat[i] + '</div>'
            if(buttons[i].length < 2){
                big_cey += '<div class="klaw-ru" data="'+buttons[i].toUpperCase()+'">' + buttons[i].toUpperCase() + '</div>'
                ru_big += '<div class="klaw-ru" data="'+rubat[i].toUpperCase()+'">' + rubat[i].toUpperCase() + '</div>'
            }else{
                big_cey += '<div class="klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
                ru_big += '<div class="klaw-ru" data="'+rubat[i]+'">' + rubat[i] + '</div>'
            }
        
        }
    }
    document.querySelector('.keyboard').innerHTML = litlle_key ;
    position = 1
})()



// if(p == ""){
//     document.querySelector('.keyboard').innerHTML = litlle_key;
// }else{
//     document.querySelector('.keyboard').innerHTML = ru_lit;
// }
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
    textarea.focus();
    console.log(e)
    
    if (e.key === "Alt")  {
        e.preventDefault()
    }
     if (e.code === "Tab") {
    e.preventDefault()
    document.querySelector('.keyboard [data="'+ e.code +'"]').classList.add('active')

    textarea.setRangeText(
      '  ',
      textarea.selectionStart,
      textarea.selectionStart,
      'end'
    )
  }if(e.code === "ShiftRight" || e.code === "AltRight" || e.code === "ControlRight"  ||  e.code ===   "ShiftLeft"){
    document.querySelector('.keyboard [data="'+ e.code +'"]').classList.add('active')
  }
    if (e.code ===   "ShiftLeft" && e.repeat == false || e.key == "ShiftRight" && e.repeat == false) {
        document.querySelector('.keyboard [data="'+ e.code +'"]').classList.add('active')
        console.log(position);    
        if(position == 1){
            position = 2
            document.querySelector('.keyboard').innerHTML = big_cey
        }else if(position == 2){
            position = 1
            document.querySelector('.keyboard').innerHTML = litlle_key;
        }else if(position == 3){
            position = 4
            document.querySelector('.keyboard').innerHTML = ru_big;

        }else if(position == 4){
            position = 3
            document.querySelector('.keyboard').innerHTML =  ru_lit;

        }
  }
  else{
    document.querySelector('.keyboard [data="'+ e.key +'"]').classList.add('active')
    document.querySelector(".main_form").target = "_blank";

  
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
    if(e.code === "AltRight" || e.code === "ControlRight") {
        document.querySelector('.keyboard [data="'+ e.code +'"]').classList.remove('active')
        
    }else if(e.code === "ShiftRight" || e.code ===   "ShiftLeft"){
        document.querySelector('.keyboard [data="'+ e.code +'"]').classList.remove('active')
        if(position == 1){
            position = 2
            document.querySelector('.keyboard').innerHTML = big_cey
        }else if(position == 2){
            position = 1
            document.querySelector('.keyboard').innerHTML = litlle_key;
        }else if(position == 3){
            position = 4
            document.querySelector('.keyboard').innerHTML = ru_big;
    
        }else if(position == 4){
            position = 3
            document.querySelector('.keyboard').innerHTML =  ru_lit;
    
        }

    }
    else{
        document.querySelector('.keyboard [data="'+ e.key+'"]').classList.remove('active')
    }
})
// window.addEventListener('keydown', (e) => {
//     if (e.key === "Shift")  {
//         console.log(e)
//         document.querySelector('.keyboard').innerHTML = big_cey;
//         document.querySelector('.keyboard [data="'+ e.code+'"]').classList.add('active')
        
//     }
// })
// window.addEventListener('keyup', (e) => {
//     if(e.key === "Shift"){
//         document.querySelector('.keyboard').innerHTML = litlle_key;}
//         ocument.querySelector('.keyboard [data="'+ e.code+'"]').classList.remove('active')
// })



var p = ""
document.addEventListener('keyup', function(event){
    if (event.altKey && event.key =='Shift') {
        if(position == 1){
            position = 3
            document.querySelector('.keyboard').innerHTML = ru_lit
        }else if(position == 2){
            position = 4
            document.querySelector('.keyboard').innerHTML = big_cey;
        }else if(position == 3){
            position = 1
            document.querySelector('.keyboard').innerHTML = litlle_key;
        }else if(position == 4){
            position = 2
            document.querySelector('.keyboard').innerHTML =  ru_big;

        }
    }else if(event.shiftKey && event.key=='Alt') {
        if(position == 1){
            position = 3
            document.querySelector('.keyboard').innerHTML = ru_lit
        }else if(position == 2){
            position = 4
            document.querySelector('.keyboard').innerHTML = big_cey;
        }else if(position == 3){
            position = 1
            document.querySelector('.keyboard').innerHTML = litlle_key;
        }else if(position == 4){
            position = 2
            document.querySelector('.keyboard').innerHTML =  ru_big;

        }
       
    }
});








var a = 1

document.addEventListener('keydown', function(event){
    if (event.key === "CapsLock" && event.repeat == false) {
        console.log(position);    
        if(position == 1){
            position = 2
            document.querySelector('.keyboard').innerHTML = big_cey
        }else if(position == 2){
            position = 1
            document.querySelector('.keyboard').innerHTML = litlle_key;
        }else if(position == 3){
            position = 4
            document.querySelector('.keyboard').innerHTML = ru_big;

        }else if(position == 4){
            position = 3
            document.querySelector('.keyboard').innerHTML =  ru_lit;

        }
    } else {
        console.log('повторное срабатывание');
    }
});
var g = p

textarea.focus()

const m = (() => {
    if(g === "checked"){
        console.log(g)
        document.querySelector('.keyboard').innerHTML = ru_big;
    }
})();
textarea.focus()
// window.addEventListener('keydown', (e) => {
//     if (e.key === "CapsLock")  {
//         document.querySelector('.keyboard').innerHTML = big_cey;
//         document.querySelector('.keyboard [data="'+ e.code+'"]').classList.add('active')
//         document.querySelector(".main_form").target = "_blank";
//     }
// })
// window.addEventListener('keyup', (e) => {
//     if(e.key === "Shift"){
//         document.querySelector('.keyboard').innerHTML = litlle_key;}
//         ocument.querySelector('.keyboard [data="'+ e.code+'"]').classList.remove('active')
// })

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
