/*  I declare that my Final assessment assignment is wholly my own work in accordance with Seneca Academic Policy. No part of this assignment has been copied manually or electronically from any other source (including web sites) except for the information supplied by the WEB222 instructor and / or made available in this assignment for my use.
I also declare that no part of this assignment has been distributed to other students.
Name: Smitraj Vaghela
Dated: April 18 2022 */
function checkId()
{
    let text_i = document.getElementById("#ProductID").value.trim();
    var err = document.getElementById("#errorpanel").innerHTML = "";
    var num = /^[0-9]+$/;

    if(!(text_i.value.match(num)))
    {   
        document.getElementById("#errorpanel").innerHTML += "In Price please enter digits only";
        text_i.focus();
        return false;
    }
}

function checkText()
{
    let valid = true;
    let text_i = document.getElementById("#ProductDescription").value.trim();
    var err = document.getElementById("#errorpanel").innerHTML = "";

    if(text_i.search(/^[A-Z].*$/))
    {
       if (text_i.search(/\d/) == -1)
       {
        document.getElementById("errorpanel").innerHTML += "Description does not contain any digit";
        text_i.focus();
        valid = false;
       }
    }
    else
    {
        document.getElementById("#errorpanel").innerHTML += "Description's first character must be a letter and in the upper case";
        text_i.focus();
        valid = false;
    }
    return valid;
}

function checkPrc() 
{
    var text_i = document.getElementById("#Price").value.trim();
    var err = document.getElementById("#errorpanel").innerHTML = "";
    var num = /^[a-zA-Z]+$/;
    let valid = false;

    if(text_i.value.match(num))
    {   
        document.getElementById("#errorpanel").innerHTML += "In Price please enter digits only";
        text_i.focus();
        valid = false;
    }

    if(/[.]/.test(text_i))
    {
        document.getElementById("#errorpanel").innerHTML += "In Price decimal number is not allowed";
        valid = false;
    }

    if(text_i > 1000)
    {
        document.getElementById("#errorpanel").innerHTML += "Price should be less than 1000";
        valid = false;  
    } 
    return valid;
}

function checks_name() 
{
    let element = document.getElementById("#SupplierUsername");
    var err = document.getElementById("#errorpanel").innerHTML = "";
    let valid = false; 
    var word = /^[a-zA-Z]/;

        if ((word.test(element))) 
        {
            valid  = true;
        }
        else
        {
            document.getElementById("#errorpanel").innerHTML += "The first character must be a letter";
            element.focus();
            valid = false;
        }
    
    return valid;
};

function check_opn() 
{
    let ele = document.querySelector("#options");
    let text_i = ele.getElementsByTagName("#text_i");
    var err = document.getElementById("#errorpanel").innerHTML = "";
    let valid = false;

    for (let i = 0; i < text_i.length; i++)
    {
        if (text_i[i].checked)
        {
            valid = true;
        }
    }
    if (!valid) 
    {
        document.getElementById("errorpanel").innerHTML += "You must check at least one item from the list";
        ele.focus();
        valid = false;
    }
    
    return valid;
};

function validateForm()
{
    if (checkText && check_opn && checks_name && checkId && checkPrc) 
    {
        alert("The information has no issues, and the form has been submitted.");
        return true;
    }
    else
    {
        return false;
    }
};

function clearerrorpanel()
{
    document.getElementById("errorpanel").innerHTML = "<p>Errors :</p>";
};