console.log("testing");

var view = {
    login : document.getElementById("username"),
    pwd : document.getElementById("password"),
    incorrect_p : document.getElementById("incorrect_password"),
    submit_button: document.getElementById("submit")
};
var controller = {
    init : function(){
        view.submit_button.addEventListener("click",this.submit_pressed);
    },
    submit_pressed : function(){
        console.log("submit pressed");
        
        // get the username and password
        const data = {
            "username": view.login.value,
            "pwd": view.pwd.value
        };

        // send a post request to check the password and return a hash
        // right now I'm just outputting the string to make sure it works
        const Http = new XMLHttpRequest();
        Http.open("POST","http://127.0.0.1:8000/login/");
        Http.setRequestHeader("Content-type","application/json;charset=UTF-8");
        Http.send(JSON.stringify(data));
        Http.onreadystatechange = function() {
            if ((this.readyState==4)&&(this.status==200)) {
                
                let hash = Http.responseText.replaceAll('"', '');
                console.log(hash);
                //here I need to check the response, if it's an empty string it will not have been found
                // 
                if (hash==""){
                    view.incorrect_p.textContent = "Please check your username or password";
                    return;
                    }
                // if the password doesn't exist say so in the incorrect_p paragraph
                // else save the hash to a cookie, then redirect to my_company.html
                // also, first, be sure to clear incorrect_p paragraph
                
                // as I'm doing this locally cookies don't work with localhost so I need to use local storage
                //let date = new Date();
                //let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
                //let expires = " expires=" + tomorrow.toGMTString()+";";
                //let cookie_str = "job_user="+hash+";"+expires+" path=/;";
                localStorage.setItem('job_user',hash);
                window.location.href = "my_company.html";
            }}        


    }    
};

controller.init();