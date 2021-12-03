function swap(){
    var x=document.getElementById("nums1").className;
    var y=document.getElementById("nums2").className;
    if(x==y){
        document.getElementById("swap").innerHTML=nums1;
    }
    else{
        document.getElementById("nums1").innerHTML=nums2;
        document.getElementById("nums2").innerHTML=nums1;
    }
}