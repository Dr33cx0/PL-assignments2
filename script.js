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
  
    if(document.getElementById("nums1").value=='16' && document.getElementById("selected").value=='10'){
    var input2=parseInt(input1,16);
    document.getElementById("result").innerHTML = "Decimal: "+input2.toString(10);
  }
    //de base octal para qualquer outra base
    else if(document.getElementById("nums1").value=='8' && document.getElementById("selected").value=='2'){
      input=parseInt(input,8);
      document.getElementById("result").innerHTML = "Binário: "+input.toString(2);
     }
     else if (document.getElementById("nums1").value=='8' && document.getElementById("selected").value=='8'){
       document.getElementById("result").innerHTML = "Octal: "+input;
     }
     else if (document.getElementById("nums1").value=='8' && document.getElementById("selected").value=='10'){
       input=parseInt(input,8);
       document.getElementById("result").innerHTML = "Decimal: "+input;
     }
     else if(document.getElementById("nums1").value=='8' && document.getElementById("selected").value=='16'){
       input=parseInt(input,8);
      document.getElementById("result").innerHTML = "Hexadecimal: "+input.toString(16);
     }
     //de base decimal para qualquer outra base
     else if(document.getElementById("nums1").value=='10' && document.getElementById("selected").value=='2'){
       document.getElementById("result").innerHTML =("Binário: "  + input.toString(2));
     }
      else if(document.getElementById("nums1").value=='10' && document.getElementById("selected").value=='8'){
      document.getElementById("result").innerHTML =("Octal: "  + input.toString(8));
    }
      else if(document.getElementById("nums1").value=='10' && document.getElementById("selected").value=='10'){
      document.getElementById("result").innerHTML =("Decimal: "  + input);
    }
    else if(document.getElementById("nums1").value=='10' && document.getElementById("selected").value=='16'){
      document.getElementById("result").innerHTML =("Decimal: "  + input.toString(16));
    }
//de base hexadecimal para qualquer outra base
    else if(document.getElementById("nums1").value=='16' && document.getElementById("selected").value=='2'){
      var input2=parseInt(input1,16);
    document.getElementById("result").innerHTML = "Decimal: "+input2.toString(2);
    }
    else if(document.getElementById("nums1").value=='16' && document.getElementById("selected").value=='8'){
      var input2=parseInt(input1,16);
    document.getElementById("result").innerHTML = "Decimal: "+input2.toString(8);
    }
    else if(document.getElementById("nums1").value=='16' && document.getElementById("selected").value=='10'){
      var input2=parseInt(input1,16);
    document.getElementById("result").innerHTML = "Decimal: "+input2.toString(10);
    }
    else if(document.getElementById("nums1").value=='16' && document.getElementById("selected").value=='16'){
      document.getElementById("result").innerHTML =("Hexadecimal: "  + input);
    }
    //de base binaria para qualquer outra base
    else if(document.getElementById("nums1").value=='2' && document.getElementById("selected").value=='8'){
      const test = ~0x01
      for(var i=input1.length-1; i>=0; --i){
        if(test & input1[i]){ return document.getElementById("result").innerHTML =("Binario: Repare que não está a inserir um número binário"); }
      }
      input1=parseInt(input1,2);
      return document.getElementById("result").innerHTML = "Octal: "+input1.toString(8);
      
    }
    else if(document.getElementById("nums1").value=='2' && document.getElementById("selected").value=='10'){
      const test = ~0x01
      for(var i=input1.length-1; i>=0; --i){
        if(test & input1[i]){ return document.getElementById("result").innerHTML =("Binario: Repare que não está a inserir um número binário"); }
      }
      input1=parseInt(input1,2);
      return document.getElementById("result").innerHTML = "Decimal: "+input1;
    }

    else if(document.getElementById("nums1").value=='2' && document.getElementById("selected").value=='16'){
      const test = ~0x01
      for(var i=input1.length-1; i>=0; --i){
        if(test & input1[i]){ return document.getElementById("result").innerHTML =("Binario: Repare que não está a inserir um número binário"); }
      }
      input1=parseInt(input1,2);
      return document.getElementById("result").innerHTML = "Hexadecimal: "+input1.toString(16);
    }

    else if(document.getElementById("nums1").value=='2' && document.getElementById("selected").value=='2'){
      const test = ~0x01
      for(var i=input1.length-1; i>=0; --i){
        if(test & input1[i]){ return document.getElementById("result").innerHTML =("Binario: Repare que não está a inserir um número binário"); }
      }
      return document.getElementById("result").innerHTML = "Binario: "+input;
    }
    else{
      document.getElementById("result").innerHTML =("Algo correu mal");
    }
  }
