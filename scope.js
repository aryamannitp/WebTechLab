var x=7;      // global variable 
 console.log("global:message="+x);
function a()
{
    var x=15;    //local variable of x in function a
     console.log("a:message="+x);
    b();
   
}
function b()
{
    console.log("b:message="+x);
}
a();