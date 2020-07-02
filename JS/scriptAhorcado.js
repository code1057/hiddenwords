var p1=document.getElementById("p1");
var p2=document.getElementById('p2');
var words=['anatomía','biodiversidad','aritmética','fotosíntesis','heterótrofos','autótrofos','átomo','astronomía','física','biología','química','geología'];

var hiddenWord;
var arrayHidden=[];
var stillHidden;
var intentos=0;

function begin(){
    intentos=0;
    document.getElementById('contator').style.opacity='1';
    document.getElementById('contator-num').innerHTML=intentos;
    document.getElementById('parr1').style.opacity='0';
    document.getElementById('parr2').style.opacity='0';
    document.getElementById('parr3').style.opacity='0';
    document.getElementById('int-content').style.transform='translateY(0)';
    arrayHidden=[];
    document.getElementById('img2').style.opacity='0';
    document.getElementById('img2').style.height='0';
    document.getElementById('img2').style.transform='scale(0)';
    document.getElementById("form-letter").style.display='flex';
    hiddenWord=words[Math.floor(Math.random()*words.length)];
    stillHidden=hiddenWord.length;

    if(hiddenWord==="fotosíntesis"){
        document.getElementById('parr1').style.opacity='1';
        document.getElementById('parr1').innerHTML='Pista n°1: '+palabra1.pista1;
        document.getElementById('parr2').innerHTML='Pista n°2: '+palabra1.pista2;
        document.getElementById('parr3').innerHTML='Pista n°3: '+palabra1.pista3;
    }else if(hiddenWord==="anatomía"){
        document.getElementById('parr1').style.opacity='1';
        document.getElementById('parr1').innerHTML='Pista n°1: '+palabra2.pista1;
        document.getElementById('parr2').innerHTML='Pista n°2: '+palabra2.pista2;
        document.getElementById('parr3').innerHTML='Pista n°3: '+palabra2.pista3;
    }else if(hiddenWord==="aritmética"){
        document.getElementById('parr1').style.opacity='1';
        document.getElementById('parr1').innerHTML='Pista n°1: '+palabra3.pista1;
        document.getElementById('parr2').innerHTML='Pista n°2: '+palabra3.pista2;
        document.getElementById('parr3').innerHTML='Pista n°3: '+palabra3.pista3;
    }else if(hiddenWord==="biodiversidad"){
        document.getElementById('parr1').style.opacity='1';
        document.getElementById('parr1').innerHTML='Pista n°1: '+palabra4.pista1;
        document.getElementById('parr2').innerHTML='Pista n°2: '+palabra4.pista2;
        document.getElementById('parr3').innerHTML='Pista n°3: '+palabra4.pista3;
    }else if(hiddenWord==="heterótrofos"){
        document.getElementById('parr1').style.opacity='1';
        document.getElementById('parr1').innerHTML='Pista n°1: '+palabra5.pista1;
        document.getElementById('parr2').innerHTML='Pista n°2: '+palabra5.pista2;
        document.getElementById('parr3').innerHTML='Pista n°3: '+palabra5.pista3;
    }else if(hiddenWord==="autótrofos"){
        document.getElementById('parr1').style.opacity='1';
        document.getElementById('parr1').innerHTML='Pista n°1: '+palabra6.pista1;
        document.getElementById('parr2').innerHTML='Pista n°2: '+palabra6.pista2;
        document.getElementById('parr3').innerHTML='Pista n°3: '+palabra6.pista3;
    }else if(hiddenWord==="átomo"){
        document.getElementById('parr1').style.opacity='1';
        document.getElementById('parr1').innerHTML='Pista n°1: '+palabra7.pista1;
        document.getElementById('parr2').innerHTML='Pista n°2: '+palabra7.pista2;
        document.getElementById('parr3').innerHTML='Pista n°3: '+palabra7.pista3;
    }else if(hiddenWord==="astronomía"){
        document.getElementById('parr1').style.opacity='1';
        document.getElementById('parr1').innerHTML='Pista n°1: '+palabra8.pista1;
        document.getElementById('parr2').innerHTML='Pista n°2: '+palabra8.pista2;
        document.getElementById('parr3').innerHTML='Pista n°3: '+palabra8.pista3;
    }else if(hiddenWord==="física"){
        document.getElementById('parr1').style.opacity='1';
        document.getElementById('parr1').innerHTML='Pista n°1: '+palabra9.pista1;
        document.getElementById('parr2').innerHTML='Pista n°2: '+palabra9.pista2;
        document.getElementById('parr3').innerHTML='Pista n°3: '+palabra9.pista3;
    }else if(hiddenWord==="biología"){
        document.getElementById('parr1').style.opacity='1';
        document.getElementById('parr1').innerHTML='Pista n°1: '+palabra10.pista1;
        document.getElementById('parr2').innerHTML='Pista n°2: '+palabra10.pista2;
        document.getElementById('parr3').innerHTML='Pista n°3: '+palabra10.pista3;
    }else if(hiddenWord==="química"){
        document.getElementById('parr1').style.opacity='1';
        document.getElementById('parr1').innerHTML='Pista n°1: '+palabra11.pista1;
        document.getElementById('parr2').innerHTML='Pista n°2: '+palabra11.pista2;
        document.getElementById('parr3').innerHTML='Pista n°3: '+palabra11.pista3;
    }else if(hiddenWord==="geología"){
        document.getElementById('parr1').style.opacity='1';
        document.getElementById('parr1').innerHTML='Pista n°1: '+palabra12.pista1;
        document.getElementById('parr2').innerHTML='Pista n°2: '+palabra12.pista2;
        document.getElementById('parr3').innerHTML='Pista n°3: '+palabra12.pista3;
    }else{
        document.getElementById('parr1').innerHTML='';
    }


    
    for(i=0;i<hiddenWord.length;i++){
        arrayHidden[i]="_";
    }
    p1.innerHTML='Quedan por adivinar: '+stillHidden+' letras.';    
    p2.innerHTML="Estado de la palabra: "+arrayHidden.join('  ');
    document.getElementById('btn-begin').innerHTML='Begin again';
    console.log(hiddenWord);
}


function letterType(){
    
    var letter=document.getElementById('letter').value;
    if(letter==""){
        document.getElementById('errorMsg').style.color='red';
        document.getElementById('errorMsg').innerHTML="ERROR!: No ingresaste ninguna letra!";
    }else if(letter.length!==1){
        document.getElementById('errorMsg').style.color='red';
        document.getElementById('errorMsg').innerHTML="ERROR!: Solo debes ingresar una letra"; 
    }else{
        intentos++;
        document.getElementById('contator-num').innerHTML=intentos;
        console.log(intentos);
        document.getElementById('errorMsg').innerHTML='';
        for(i=0;i<arrayHidden.length;i++){
            if(hiddenWord[i]===letter){
                arrayHidden[i]=letter;
                stillHidden--;
                p1.innerHTML='Quedan por adivinar: '+stillHidden+' letras.';    
                p2.innerHTML="Estado de la palabra: "+arrayHidden.join(' ');
            }          
        }
        if(stillHidden >= hiddenWord.length/2 && intentos===3){
            console.log('Segunda pista desbloqueada');
            document.getElementById('parr2').style.opacity='1';
        }else if(stillHidden>=1 && intentos===5){
            console.log('Tercera pista desbloqueada');
            document.getElementById('parr3').style.opacity='1';
            
        }
    }
    
    if(stillHidden===0){
        document.getElementById('btn-begin').innerHTML='Begin again';
        document.getElementById('errorMsg').innerHTML='';
        document.getElementById('form-letter').style.display='none';
        p2.innerHTML='Palabra: '+arrayHidden.join('');
        p1.innerHTML='¡CONGRATITULATIONS!';
        
    }
}




