function swap(){
  var obj1 = document.getElementById('nums1').value;
  var obj2 = document.getElementById('selected').value;

  var temp = obj1;
  obj1 = obj2;
  obj2 = temp;
  
  // Save the swapped values to the input element.
  document.getElementById('nums1').value = obj1;
  document.getElementById('selected').value = obj2;
}

function calcBin(){
  var input= Number(document.getElementById("num").value);
  var input1= (document.getElementById("num").value);
  
  
    //de base octal para qualquer outra base
     if(document.getElementById("nums1").value=='8' && document.getElementById("selected").value=='2'){
      for(var i = input1.length-1; i>= 0; i--){
        if(input1[i] != 1 && input1[i] != 2 && input1[i] != 3 && input1[i] != 4 && input1[i] != 5 && input1[i] != 6 && input1[i] != 7){
            return document.getElementById("result").innerHTML = "Repare que não está a inserir um número octal correto, o máximo é 7!";
        }
      }
    input=parseInt(input,8);
    document.getElementById("result").innerHTML = "Binário: "+input.toString(2);
    }
     else if (document.getElementById("nums1").value=='8' && document.getElementById("selected").value=='8'){
      for(var i = input1.length-1; i>= 0; i--){
        if(input1[i] != 1 && input1[i] != 2 && input1[i] != 3 && input1[i] != 4 && input1[i] != 5 && input1[i] != 6 && input1[i] != 7){
            return document.getElementById("result").innerHTML = "Repare que não está a inserir um número octal correto, o máximo é 7!";
        }
      }
      document.getElementById("result").innerHTML = "Octal: "+input;
    }
     else if (document.getElementById("nums1").value=='8' && document.getElementById("selected").value=='10'){
      for(var i = input1.length-1; i>= 0; i--){
        if(input1[i] != 1 && input1[i] != 2 && input1[i] != 3 && input1[i] != 4 && input1[i] != 5 && input1[i] != 6 && input1[i] != 7){
            return document.getElementById("result").innerHTML = "Repare que não está a inserir um número octal correto, o máximo é 7!";
        }
      }
       input=parseInt(input,8);
       document.getElementById("result").innerHTML = "Decimal: "+input.toString(10);
    }
     else if(document.getElementById("nums1").value=='8' && document.getElementById("selected").value=='16'){
      for(var i = input1.length-1; i>= 0; i--){
        if(input1[i] >= 'a' && input1[i] <= 'z' || input1[i] >= 'A' && input1[i] <= 'Z' || input1[i] != 1 && input1[i] != 2 && input1[i] != 3 && input1[i] != 4 && input1[i] != 5 && input1[i] != 6 && input1[i] != 7){
            return document.getElementById("result").innerHTML = "Repare que não está a inserir um número octal correto, o máximo é 7!";
       }
     }
      input=parseInt(input,8);
      document.getElementById("result").innerHTML = "Hexadecimal: "+input.toString(16).toUpperCase();
    }
     //de base decimal para qualquer outra base
     else if(document.getElementById("nums1").value=='10' && document.getElementById("selected").value=='2'){
      for(var i = input1.length-1; i>= 0; i--){
        if(input1[i] >= 'a' && input1[i] <= 'z' || input1[i] >= 'A' && input1[i] <= 'Z'){
            return document.getElementById("result").innerHTML = "Repare que não está a inserir um número decimal correto, só pode inserir números!";
       }
      }
       document.getElementById("result").innerHTML ="Binário: "  + input.toString(2);
     }
      else if(document.getElementById("nums1").value=='10' && document.getElementById("selected").value=='8'){
        for(var i = input1.length-1; i>= 0; i--){
          if(input1[i] >= 'a' && input1[i] <= 'z' || input1[i] >= 'A' && input1[i] <= 'Z'){
              return document.getElementById("result").innerHTML = "Repare que não está a inserir um número decimal correto, só pode inserir números!";
        }
       }
        document.getElementById("result").innerHTML ="Octal: "  + input.toString(8);
     }
      else if(document.getElementById("nums1").value=='10' && document.getElementById("selected").value=='10'){
        for(var i = input1.length-1; i>= 0; i--){
          if(input1[i] >= 'a' && input1[i] <= 'z' || input1[i] >= 'A' && input1[i] <= 'Z'){
              return document.getElementById("result").innerHTML = "Repare que não está a inserir um número decimal correto, só pode inserir números!";
        }
       }
        document.getElementById("result").innerHTML ="Decimal: "  + input;
     }
    else if(document.getElementById("nums1").value=='10' && document.getElementById("selected").value=='16'){
      for(var i = input1.length-1; i>= 0; i--){
        if(input1[i] >= 'a' && input1[i] <= 'z' || input1[i] >= 'A' && input1[i] <= 'Z'){
            return document.getElementById("result").innerHTML = "Repare que não está a inserir um número decimal correto, só pode inserir números!";
        }
       }
      var input2=parseInt(input1,10);
      document.getElementById("result").innerHTML ="Decimal: "  + input2.toString(16).toUpperCase();
     }
    //de base hexadecimal para qualquer outra base
    else if(document.getElementById("nums1").value=='16' && document.getElementById("selected").value=='2'){
      for(var i = input1.length-1; i>= 0; i--){
        if(input1[i] != 'a' && input1[i] != 'b' && input1[i] != 'c' && input1[i] != 'd' && input1[i] != 'e' && input1[i] != 'f' && input1[i] != 'A' && input1[i] != 'B' && input1[i] != 'C' && input1[i] != 'D' && input1[i] != 'E' && input1[i] != 'F' && input1[i] != 0 && input1[i] != 1 && input1[i] != 2 && input1[i] != 3 && input1[i] != 4 && input1[i] != 5 && input1[i] != 6 && input1[i] != 7 && input1[i] != 8 && input1[i] != 9){
            return document.getElementById("result").innerHTML = "Repare que não está a inserir um número hexadecimal";
        }
       }
      var input2=parseInt(input1,16);
      document.getElementById("result").innerHTML = "Binário: "+input2.toString(2);
     }
    else if(document.getElementById("nums1").value=='16' && document.getElementById("selected").value=='8'){
      for(var i = input1.length-1; i>= 0; i--){
        if(input1[i] != 'a' && input1[i] != 'b' && input1[i] != 'c' && input1[i] != 'd' && input1[i] != 'e' && input1[i] != 'f' && input1[i] != 'A' && input1[i] != 'B' && input1[i] != 'C' && input1[i] != 'D' && input1[i] != 'E' && input1[i] != 'F' && input1[i] != 0 && input1[i] != 1 && input1[i] != 2 && input1[i] != 3 && input1[i] != 4 && input1[i] != 5 && input1[i] != 6 && input1[i] != 7 && input1[i] != 8 && input1[i] != 9){
            return document.getElementById("result").innerHTML = "Repare que não está a inserir um número hexadecimal";
        }
       }
      var input2=parseInt(input1,16);
      document.getElementById("result").innerHTML = "Decimal: "+input2.toString(8);
     }
    else if(document.getElementById("nums1").value=='16' && document.getElementById("selected").value=='10'){
    for(var i = input1.length-1; i>= 0; i--){
      if(input1[i] != 'a' && input1[i] != 'b' && input1[i] != 'c' && input1[i] != 'd' && input1[i] != 'e' && input1[i] != 'f' && input1[i] != 'A' && input1[i] != 'B' && input1[i] != 'C' && input1[i] != 'D' && input1[i] != 'E' && input1[i] != 'F' && input1[i] != 0 && input1[i] != 1 && input1[i] != 2 && input1[i] != 3 && input1[i] != 4 && input1[i] != 5 && input1[i] != 6 && input1[i] != 7 && input1[i] != 8 && input1[i] != 9){
          return document.getElementById("result").innerHTML = "Repare que não está a inserir um número hexadecimal correto";
        }
       }
      var input2=parseInt(input1,16);
      document.getElementById("result").innerHTML ="Decimal: "  + input2.toString(10);
     }
    else if(document.getElementById("nums1").value=='16' && document.getElementById("selected").value=='16'){
      for(var i = input1.length-1; i>= 0; i--){
         input2 = input1.toUpperCase();
        if(input1[i] != 'a' && input1[i] != 'b' && input1[i] != 'c' && input1[i] != 'd' && input1[i] != 'e' && input1[i] != 'f' && input1[i] != 'A' && input1[i] != 'B' && input1[i] != 'C' && input1[i] != 'D' && input1[i] != 'E' && input1[i] != 'F' && input1[i] != 0 && input1[i] != 1 && input1[i] != 2 && input1[i] != 3 && input1[i] != 4 && input1[i] != 5 && input1[i] != 6 && input1[i] != 7 && input1[i] != 8 && input1[i] != 9){
            return document.getElementById("result").innerHTML = "Repare que não está a inserir um número hexadecimal";
        }
       }
      document.getElementById("result").innerHTML ="Hexadecimal: "  + input2.toUpperCase();
     }
    //de base binaria para qualquer outra base
    else if(document.getElementById("nums1").value=='2' && document.getElementById("selected").value=='8'){
      for(var i = input1.length-1; i>= 0; i--){
        if(input1[i] != 1 && input1[i] != 0) {
            return document.getElementById("result").innerHTML = "Repare que não está a inserir um número binário, porfavor insira um número que contenha apenas '0' e '1'";
        }
       }
      input2=parseInt(input1,2);
      return document.getElementById("result").innerHTML = "Octal: "+input2.toString(8);
     }
    else if(document.getElementById("nums1").value=='2' && document.getElementById("selected").value=='10'){
      for(var i = input1.length-1; i>= 0; i--){
        if(input1[i] != 1 && input1[i] != 0) {
            return document.getElementById("result").innerHTML = "Repare que não está a inserir um número binário, porfavor insira um número que contenha apenas '0' e '1'";
        }
       }
      input1=parseInt(input1,2);
      return document.getElementById("result").innerHTML = "Decimal: "+input1;
     }

    else if(document.getElementById("nums1").value=='2' && document.getElementById("selected").value=='16'){
      for(var i = input1.length-1; i>= 0; i--){
        if(input1[i] != 1 && input1[i] != 0) {
            return document.getElementById("result").innerHTML = "Repare que não está a inserir um número binário, porfavor insira um número que contenha apenas '0' e '1'";
        }
       }
      input1=parseInt(input1,2);
      return document.getElementById("result").innerHTML = "Hexadecimal: "+input1.toString(16).toUpperCase();
     }

    else if(document.getElementById("nums1").value=='2' && document.getElementById("selected").value=='2'){
      for(var i = input1.length-1; i>= 0; i--){
        if(input1[i] != 1 && input1[i] != 0){
            return document.getElementById("result").innerHTML = "Repare que não está a inserir um número binário, porfavor insira um número que contenha apenas '0' e '1'";
        }
       }  
    document.getElementById("result").innerHTML ="Binário: "  + input1;
     }
  }   
