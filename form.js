
function billingFunction(){
         if(same.checked == true) {
      x=document.getElementById("shippingName").value;
      y=document.getElementById("shippingZip").value;             
      document.getElementById("billingName").value=x;
      document.getElementById("billingZip").value=y;
                       }
  else{
  document.getElementById("billingName").value=null ;
  document.getElementById("billingZip").value=null;
 
     }
 }

