console.log("testing");

var view = {};

var controller = {
    init : function(){
        // first thing I need to do is get the cookie
        // what I want to try now is getting and printing out the cookie
/* I was using cookies but it doesn't work with localhost
        let cookies = document.cookie.split(";");
        let cookie_found = false;
        let i = 0;
        while ((!cookie_found)&&(i < cookies.length)){
            if(cookies[i].includes("job_user")){
                let hash = cookies[i].split("=")[1];
                cookie_found = true;
                // now I need to make the request
                console.log(hash);                
            }
            i += 1;
        }
*/
        
        let user=localStorage.getItem('job_user');
        console.log(user);
        
        
        // then I need to send a request to the server to get just the user info
        // and add the user info to the user div
        // then I need to send a request with the cookie and get the company info
        // or maybe I only need 1 request.
        
        
    }
    
};

controller.init();