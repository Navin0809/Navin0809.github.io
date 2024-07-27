
let arr=[];
let l='';
let html='';

document.querySelector('.output').innerHTML=l;



function array(){
  let text1=document.querySelector('.input').value;
  document.querySelector('.input').value='';

  let date1=document.querySelector('.date').value;
  document.querySelector('.date').value='';
  let a={
    text:'',
    date:''};
  a.text=text1;
  a.date=date1;  
  arr.push(a);  
  row();




}


function row(){
  l='';
  for(let i=0;i<arr.length;i++){
      let a=arr[i];
      console.log(a.text);

      html=
      ` <div>${i+1}. ${a.text}</div>
        <div>${a.date}</div>
        <div><button style="
        background-color:red;
        color:white;
        margin-left:18px;
        border: none;
        border-radius: 15px;
        padding:5px;"onclick="
            arr.splice(${i},1);
            row();"
            >delete</button>
        </div>`;

    l+=html;
    

  }
  document.querySelector('.output').innerHTML=l;



}