console.log("testing");

var view = { // need to add a logout button which clears everything from local storage and returns to login page
    me_div : document.getElementById("me"),
    company_info_div : document.getElementById("company"),
    employee_listing_div : document.getElementById("employees"),
    navigation_div : document.getElementById("navigation")
};

var controller = {
    init : function(){
        // here's a question,should I check to see if local storage has a page_number value
        // if not, set it to 1, if so get it bc you will need it for the request
        // then for navigation, instead of just adjusting data, you reload page
        // could also see if total number is in local storage
        // 
        let userHash=localStorage.getItem('job_user');
        console.log(userHash);
        
        // send a request to get the company domain so you can add the logo
        
        let page = localStorage.getItem("job_page");
        let request_required = false;        
        if  (!page){
            page = "1";
            localStorage.setItem("job_page",page);
        }
        let last_checked = localStorage.getItem("job_date");
        if (!last_checked){
            last_checked = new Date();
            localStorage.setItem("job_date",last_checked);
            request_required = true;
        }
        if (Date.parse(new Date())-Date.parse(last_checked)>86000000){request_required=true;}
        let num_employees = localStorage.getItem("job_totals");
        if (!num_employees) {request_required=true;}
        if (request_required){
           /*
           sends a request for the number of employees
           at the persons company
           updates the job_date and job_totals values in local storage
           */
           
        }
        
       // can update the nav first based on the page and number of employees
       // now you need to get your info and the employee info (based on page)
        
    }
    
};

controller.init();