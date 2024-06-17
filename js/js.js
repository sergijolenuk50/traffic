console.log("hello");
const root = document.getElementById("root");
// const btn = document.getElementsByClassName('btn');
// const btn = document.getElementById("btn");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
btn.onclick = () => {
    let div = document.createElement('div');
    
    // div.innerHTML = "TEST";
    div.style.backgroundColor = getRandomColor();
    div.classList.add('super');
    div.ondblclick = ()=>{
        // console.log("test111111");
        div.remove();
    }
    root.append(div);
}

let col1 =document.querySelector('.col1');
let col2 =document.querySelector('.col2');
let col3 =document.querySelector('.col3');
let count =1;
btn1.onclick = () => {
    if(count ==1)
    {
        col1.style.backgroundColor = "red";
        col2.style.backgroundColor = "gray"
        col3.style.backgroundColor = "gray";
        count +=1;
    }
    else if(count ==2)
    {
        col1.style.backgroundColor = "gray";
        col2.style.backgroundColor = "yellow"
        col3.style.backgroundColor = "gray";
        count +=1;

    }
    else if(count ==3)
    {
        col1.style.backgroundColor = "gray";
        col2.style.backgroundColor = "gray";
        col3.style.backgroundColor = "green";
        
count=1;
    }
  
    // }
        // let div = document.createElement('div');
        
        // // div.innerHTML = "TEST";
        // div.style.backgroundColor = getRandomColor();
        // div.classList.add('super');
        // div.ondblclick = ()=>{
        //     // console.log("test111111");
        //     div.remove();
        // }
}