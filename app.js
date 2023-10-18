const container = document.getElementById("container");
const win = document.getElementById('win')
const winner= document.getElementById("winner")

let n = 12;
let m = 12;
 
for (let i = 0; i < n; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < m; j++) {
    const cell = document.createElement("input");
    cell.type = "text";
    cell.classList.add("cell");
    cell.setAttribute("readOnly", "true");
    cell.id = "b" + i.toString() + j.toString();
    row.append(cell);
    cell.onclick = function () {
      myFunc(i, j);
    };
  }

  container.append(row);
}
flag = 1;
function myFunc(x, y) {
  
  if (flag == 1) {
    // debugger;
    document.getElementById("b" + x.toString() + y.toString()).value = "X";
    document.getElementById("b" + x.toString() + y.toString()).disabled = true;
    let sx = countScore(x, y, "X");
    
    document.getElementById("count").innerHTML = sx;
    flag = 0;
  } else {
    document.getElementById("b" + x.toString() + y.toString()).value = "0";
    document.getElementById("b" + x.toString() + y.toString()).disabled = true;
    let so = countScore(x, y, "0");
    document.getElementById("count").innerHTML = so;
    flag = 1;
  }
}

function countScore(y, x, val) {
  let count = 1;
  
  // Horizon
  for (let i = x - 1; i >= 0; i--) {
    let asa = document.getElementById("b" + y + i).value;
    if ( asa === val) {
      count ++;
       victory(count, val)
     } else{
        break;
    } 
  }
  for(let i=x+1; i<=12; i++){
    let axz=document.getElementById("b" + y + i).value;
    if(axz===val){
        // debugger;
        count++;
        victory(count, val)
    }else{
        break
    }
  }
  
  // Vertical
  for(let i=y-1; i>=0; i--){
    let vermi=document.getElementById('b'+i+x).value;
    if(vermi===val){
        count++;
        victory(count, val)
    }else break;
  }

  for(let i=y+1; i<=12; i++){
    if(document.getElementById('b'+i+x).value===val){
       count++;
        victory(count, val)
    }else{
        break
    }
  }


  // slash
  for(i=y-1, j=x+1; i>=0 && j<=12; i--, j++){
    if(document.getElementById('b'+i+j).value===val){
      count++;
      victory(count, val)
  }else break;
 }
 for(i=y+1, j=x-1; i<=12 && j>=0; i++, j--){
  if(document.getElementById('b'+i+j).value===val){
    count++;
    victory(count, val)
  }else break;
 }

 // back slash
 for(i=y-1, j=x-1; i>=0 && j>=0; i--, j-- ){
  // debugger;
  if(document.getElementById('b'+i+j).value===val){
    
    count++;
    victory(count, val)
  }else break;
 }

 for(i=y+1, j=x+1; i<=12 && j<=12; i++, j++){
  if(document.getElementById('b'+i+j).value===val){
    count++;
    victory(count, val)
  }else break;
 }
return count;
}
function victory(count, val){
  if(count===5){
    win.style.display='block'
    winner.innerHTML=val
  }
}

