function nameValidation() {
    
    var Name=document.getElementById("name").value;
    
    
    var nameReg=/^[A-Z]{1}[a-z A-Z]{2,}$/;
    if (nameReg.test(Name)) {
       
        document.getElementById("name-error").innerHTML="";
        
    }
        else
        document.getElementById("name-error").innerHTML ="Name is Invalid";   
    
    
    }

    function numberValidation() {
        var phoneNumber=document.getElementById("phone").value;
        phoneReg=/([+]{1})*?([0-9]{2})*?^[1-9]{1}[0-9]{9}/;

        if (phoneReg.test(phoneNumber)) {
       
            document.getElementById("num-error").innerHTML="";
            
        }
            else
            document.getElementById("num-error").innerHTML ="Number is Invalid";   

    }

    function addressvalidation() {
        var address=document.getElementById("address").value;
        addressReg=/[A-Z a-z]{3,} /;
    if (addressReg.test(address)) {
        
        document.getElementById("add-error").innerHTML="";
        
    }
        else
        document.getElementById("add-error").innerHTML ="Address is Invalid";   


    
}


function resetvalues(){
    document.getElementById("myform").reset();
    

}

function submitData(){
    var Name=document.getElementById("name").value;
    var phoneNumber=document.getElementById("phone").value;
    var Address=document.getElementById("address").value;
    var City=document.getElementById("city").value;
    var State=document.getElementById("state").value;
    var zipcode=document.getElementById("zip").value;

    var addressBookData={
        "Name":Name,
        "Phone Number":phoneNumber,
        "Address":Address,
        "Zip Code":zipcode,
        "City":City,
        "State":State

    }



    alert(JSON.stringify(addressBookData))

}
