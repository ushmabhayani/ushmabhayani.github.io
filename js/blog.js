function newblog(){
    var bloghead= document.querySelector(".heading").value;
    var publishername= document.querySelector(".publisher").value;
    var blog = document.querySelector(".content").value;
    var headerr = document.querySelector("#headerr");
    var nameerr = document.querySelector("#nameerr");
    var contenteerr = document.querySelector("#contenteerr");
    var nameregex = /^[a-zA-Z]{3,15}$/;

    if(bloghead<5 || bloghead == "" || bloghead == null){
        document.getElementById("headerr").innerHTML = "Enter A Valid Heading";
        return false;
    } if(publishername < 3 || publishername =="" || publishername== null){
        document.getElementById("nameerr").innerHTML = "Enter A Valid Name";
        return false;
    } if(blog =="" || blog== null){
        document.getElementById("contenteerr").innerHTML = "Enter Blog Content";
        return false;
    }

    document.getElementById("bt").innerHTML = bloghead;
    document.getElementById("pn").innerHTML = publishername;
    document.getElementById("pc").innerHTML = blog;

    alert("Blog Successfully Printed");
    return true;

    

}


