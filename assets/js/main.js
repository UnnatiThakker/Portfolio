"use strict";

//Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


/* Vanilla RSS - https://github.com/sdepold/vanilla-rss */

	const rss = new RSS(
	    document.querySelector("#rss-feeds"),
	    //Change this to your own rss feeds
        "https://medium.com/feed/@unnati.thakker.raval",
	    {
		     // how many entries do you want?
		    // default: 4
		    // valid values: any integer
		    limit: 3,
		    
		    
		    // will request the API via https
			// default: false
			// valid values: false, true
			ssl: true,
		  
			 // outer template for the html transformation
			// default: "<ul>{entries}</ul>"
			// valid values: any string
			layoutTemplate: "<div class='items'>{entries}</div>",
		
			// inner template for each entry
			// default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
			// valid values: any string
			entryTemplate: '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>',
		    
	    }
	);
	rss.render();


	function validate(event){
		var name = document.getElementById("name").value;
		var subject = document.getElementById("subject").value;
		var email = document.getElementById("email").value;
		var message = document.getElementById("message").value;
		var error_message = document.getElementById("error_message");
		
		error_message.style.padding = "10px";
		
		var text;
		if(name.length < 5){
		  text = "Please Enter valid Name";
		  error_message.innerHTML = text;
		  return false;
		}
		if(subject.length < 5){
		  text = "Please Enter Correct Subject";
		  error_message.innerHTML = text;
		  return false;
		}
		if(email.indexOf("@") == -1 || email.length < 6){
		  text = "Please Enter valid Email";
		  error_message.innerHTML = text;
		  return false;
		}
		if(message.length <= 50){
		  text = "Please Enter Message in More Than 50 Characters";
		  error_message.innerHTML = text;
		  return false;
		}
		if(!error_message.innerHTML){
			sendEmail(event);
			return true;
		}
	  }


	async function sendEmail(event) { 
		event.preventDefault();
		var status = document.getElementById("success_message");
		var errorMsg = document.getElementById("error_message");
		var data = new FormData(event.target);
		fetch(event.target.action, {
			method: form.method,
			body: data,
			headers: {
				'Accept': 'application/json'
			}
		}).then(response => {
			status.innerHTML = "Thank you for contacting me. I will get back to you as soon as possible.";
			form.reset()
		}).catch(error => {
			errorMsg.innerHTML = "Oops! There was a problem submitting your form."
		});
	} 
    
	/* Bind sendEmail event on submit button */
	var form = document.getElementById("contact-me");
	form.addEventListener("submit", validate);

    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    new GitHubCalendar("#github-graph", "UnnatiThakker", { responsive: true });