console.log("testing");
var view = {
    username : document.getElementById("username"),
    pwd : document.getElementById("pwd"),
    pwd_check : document.getElementById("pwd_check"),
    pwd_mismatch : document.getElementById("pwd_mismatch"),
    gender : document.getElementById("gender"),
    email : document.getElementById("email"),
    role : document.getElementById("role"),
    salary : document.getElementById("salary"),
    pay_period : document.getElementById("pay_period"),
    experience : document.getElementById("experience"),
    time_unit : document.getElementById("time_unit"),
    submit_button : document.getElementById("submit"),
    invalid_user : document.getElementById("invalid_user")
};
var controller = {
    init : function(){ // this is done
        // add the event listener to the pwd_check field and submit button
        console.log("initated");
        view.submit_button.addEventListener("click",this.submit_pressed);
        view.pwd_check.addEventListener("keyup",this.check_pwd);
        
    },
    submit_pressed : function(){
        console.log("submit pressed");
        if (!model.pwd_match) {return;}
        let experience = view.experience.value;
        // if model pwd match is true
        // need to get all the values
        if (view.time_unit.value=="years"){experience = experience * 12;}
        const data = {
            "username" : view.username.value,
            "password" : view.pwd.value,
            "gender": view.gender.value,
            "email":view.email.value,
            "role":view.role.value,
            "salary":view.salary.value,
            "pay_period":view.pay_period.value,
            "experience":experience
        }
        
        // send a post request
        const Http = new XMLHttpRequest();
        Http.open("POST","http://127.0.0.1:8000/create/");
        Http.setRequestHeader("Content-type","application/json;charset=UTF-8");
        Http.send(JSON.stringify(data));
        Http.onreadystatechange = function() {
            if ((this.readyState==4)&&(this.status==200)) {
                // if the response is blank, it means the account exists
                // can check this through username or email address
                // if time will want to see which exists username or email
                hash = Http.responseText.replaceAll('"','');
                if (hash==""){
                    view.invalid_user.textContent = "An account exists for either this username or email";
                    return;                    
                }

                // get the hash back and save it in a cookie
                // redirect to my_company page
                localStorage.setItem('job_user',hash);
                window.location.href = "my_company.html";                
                
                
            }}         
        


    },
    check_pwd : function(){  // this is done
        console.log("checking passwords");
        // get the pwd and pwd_check values
        // if it does match clear the pwd_mismatch text
        // and set pwd_match to True

        if (view.pwd.value==view.pwd_check .value){
            model.pwd_match = true;
            view.pwd_mismatch.textContent = "";
        }
        else{
            model.pwd_match = false;
            view.pwd_mismatch.textContent = "Passwords must match";
        }
        // if it doesn't match update the pwd_match textContent to passwords must match
    }
};

var model = {
  pwd_match : false  
};

controller.init();