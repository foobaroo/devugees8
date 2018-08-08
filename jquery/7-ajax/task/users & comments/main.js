var UserComments= function () {
    /// <summary>Constructor function of the event UserComments class.</summary>
    /// <returns type="UserComments" />      
    return {

	    ///<summary>
        ///Initializes the UserComments .  
        ///</summary>     
        ///<returns type="initialization settings" />   
        ///<since>1.0.0</since> 
        init: function() 
        {
	  	    jQuery('#userlink').on('click', UserComments.actions.loadUsers); 
	  	    jQuery('#commentslink').on('click', UserComments.actions.loadComments); 	
	  	    jQuery('#adduserlink').on('click', UserComments.actions.showUserForm); 
	  	    jQuery('#addcommentlink').on('click', UserComments.actions.showCommentForm);   
	  	    jQuery('#adduserbutton').on('click', UserComments.actions.addUser); 
	  	    jQuery('#addcommentbutton').on('click', UserComments.actions.addComment);   	  
 	    }, 

 	    actions : {

 	    	loadUsers : function(event)
 	    	{
 	    		
 	    		jQuery('#main').html('');
 	    		jQuery('#adduser').hide();
 	    		jQuery('#addcomment').hide();

 	    		jQuery.ajax({
				        url: 'http://35.156.88.18:3050/users',
				        type: 'GET',
				        dataType: 'json',
				        contentType: 'application/json; charset=utf-8',
				        beforeSend: function(jqXHR, settings) 
			            {
			            	jQuery('p.status-message-load').html('Processing, Please wait...'); 
			            },
				        success: function(data, textStatus, jQxhr) {
				            
				            if (jQxhr.status== 200)
			                {
			                   	// var userObj =jQuery.parseJSON(data);
								var userTable = UserComments.createUserTable( data );
								console.log(userTable);
								jQuery('#main').html( userTable );			

								jQuery('p.status-message-load').html(''); 
								jQuery('#adduser').hide();
								jQuery('#addcomment').hide();
			                                 
			                }
			                else
			                {
			                	console.log("There is problem for loading data: status:"+jQxhr.status+", responseText:"+jQxhr.responseText);
			                	jQuery('p.status-message-load').text("There is problem for loading data...");
			                }

						},
						error: function(jqXhr, textStatus, errorThrown) {
					       console.log("Failed to get users! Message:" + jqXhr.statusText);
					       jQuery('p.status-message-load').html('There was an unexpected error...');
					    },			    
					    complete: function (jqXHR, textStatus) 
					    {			    
						 	//if you need to do anything after complete		    
					    }
				    });

 	    		event.preventDefault();  // Do not run the default action
 	    	},
 	    	loadComments : function(event)
 	    	{
 	    		jQuery('#main').html('');
 	    		jQuery('#adduser').hide();
 	    		jQuery('#addcomment').hide();

 	    		jQuery.ajax({
				        url: 'http://35.156.88.18:3050/comments',
				        type: 'GET',
				        dataType: 'json',
				        contentType: 'application/json; charset=utf-8',
				        beforeSend: function(jqXHR, settings) 
			            {
			            	jQuery('p.status-message-load').html('Processing, Please wait...'); 
			            },
				        success: function(data, textStatus, jQxhr) {
				            
				            if (jQxhr.status== 200)
			                {
			                   	 //var commentObj = jQuery.parseJSON( response );
								var commentTable = UserComments.createCommentTable( data );
								jQuery('#main').html( commentTable );	

								jQuery('p.status-message-load').html(''); 
								jQuery('#adduser').hide();
								jQuery('#addcomment').hide();
			                                 
			                }
			                else
			                {
			                	console.log("There is problem for loading data: status:"+jQxhr.status+", responseText:"+jQxhr.responseText);
			                	jQuery('p.status-message-load').text("There is problem for loading data...");
			                }

						},
						error: function(jqXhr, textStatus, errorThrown) {
					       console.log("Failed to get comments! Message:" + jqXhr.statusText);
					       jQuery('p.status-message-load').html('There was an unexpected error...');
					    },			    
					    complete: function (jqXHR, textStatus) 
					    {			    
						 	//if you need to do anything after complete		    
					    }
				    });

 	    		event.preventDefault();  // Do not run the default action
 	    	},
 	    	showUserForm : function()
 	    	{
 	    		jQuery('#main').html('');
 	    		jQuery('#adduser').show();
 	    		jQuery('#addcomment').hide();

 	    	},
 	    	addUser : function()
 	    	{

 	    		if(!UserComments.validateUserData())
 	    			return;

				var params = {
					name: jQuery('#firstnameinput').val(),
					username: jQuery('#usernameinput').val(),
					email: jQuery('#emailinput').val()
				};


 	    		jQuery.ajax({
				        url: 'http://35.156.88.18:3050/users',
				        type: 'POST',
				        data : JSON.stringify(params),
				        dataType: 'json',
				        contentType: 'application/json; charset=utf-8',
				        beforeSend: function(jqXHR, settings) 
			            {
			            	jQuery('p.status-message').html('Processing, Please wait...'); 
			            },
				        success: function(data, textStatus, jQxhr) {
				            
				            if (jQxhr.status== 200)
			                {
			                   	jQuery('p.status-message').text("Successfully saved data...");
			                   	jQuery('p.status-message').addClass('success-green-message');
			                   	jQuery("#user-form").trigger('reset');
			                                 
			                }
			                else
			                {
			                	console.log("There is problem for saving data: status:"+jQxhr.status+", responseText:"+jQxhr.responseText);
			                	jQuery('p.status-message').text("There is problem for saving data...");
			                }

						},
						error: function(jqXhr, textStatus, errorThrown) {
					       console.log("Failed to get users! Message:" + jqXhr.statusText);
					       jQuery('p.status-message').html('There was an unexpected error...');
					    },			    
					    complete: function (jqXHR, textStatus) 
					    {			    
						 	//if you need to do anything after complete		    
					    }

				    });

 	    		event.preventDefault();  // Do not run the default action

 	    	},
 	    	showCommentForm : function()
 	    	{
 	    		jQuery('#main').html('');
 	    		jQuery('#adduser').hide();
 	    		jQuery('#addcomment').show();

 	    	},
 	    	addComment : function()
 	    	{

 	    		if(!UserComments.validateCommentData())
 	    			return;

 	    		var params = {
					name: jQuery('#commentnameinput').val(),
					email: jQuery('#commentmailinput').val(),
					body: jQuery('#commentbodyinput').val()
				};


 	    		jQuery.ajax({
				        url: 'http://35.156.88.18:3050/comments',
				        type: 'POST',
				        data : JSON.stringify(params),
				        dataType: 'json',
				        contentType: 'application/json; charset=utf-8',
					    beforeSend: function(jqXHR, settings) 
			            {
			            	 jQuery('p.status-message').html('Processing, Please wait...'); 
			            },
				        success: function(data, textStatus, jQxhr) {
				            
				            if (jQxhr.status== 200)
			                {
			                   	jQuery('p.status-message').text("Successfully saved data...");
			                   	jQuery("#comment-form").trigger('reset');
			                                 
			                }
			                else
			                {
			                	console.log("There is problem for saving data: status:"+jQxhr.status+", responseText:"+jQxhr.responseText);
			                	jQuery('p.status-message').text("There is problem for saving data...");
			                }

						},
						error: function(jqXhr, textStatus, errorThrown) {
					       console.log("Failed to get users! Message:" + jqXhr.statusText);
					       jQuery('p.status-message').html('There was an unexpected error...');
					    },			    
					    complete: function (jqXHR, textStatus) 
					    {			    
						 	//if you need to do anything after complete		    
					    }
				    });

 	    		event.preventDefault();  // Do not run the default action

 	    	}

		},

		createUserTable : function(userArray)
		{
			console.log(userArray.length);
			var html=`<table class="table">
						<thead>
						    <tr>
						      <th scope="col">#ID</th>
						      <th scope="col">First Name</th>
						      <th scope="col">User Name</th>
						      <th scope="col">Email</th>
						    </tr>
						  </thead>
						  <tbody>`;
			for(var i=0; i<userArray.length;i++) {

					html +="<tr>";
					var j=1;
					for(key in userArray[i]) {

						html+="<td>" +userArray[i][key] + "</td>";
						if(j === 4)
							break;

						j++;
					}
					html+="</tr>";
					
				}
				html+="</tbody></table>";
			 return html;

		},
		createCommentTable : function(commentArray)
		{
			
			var html=`<table class="table">
						<thead>
						    <tr>
						      <th scope="col">#ID</th>
						      <th scope="col">Name</th>
						      <th scope="col">Email</th>
						      <th scope="col">Comment</th>
						    </tr>
						  </thead>
						  <tbody>`;
			for(var i=0; i<commentArray.length;i++) {

					html +="<tr>";
					var j=1;
					for(key in commentArray[i]) {

						html+="<td>" +commentArray[i][key] + "</td>";
						if(j === 4)
							break;

						j++;
					}
					html+="</tr>";
					
				}
				html+="</tbody></table>";
			 return html;

		},
		validateUserData : function()
		{
			var flag = true;
			var name= jQuery('#firstnameinput');
			var username=jQuery('#usernameinput');
			var email= jQuery('#emailinput');


			  //name 
			  if(name.length > 0)
			  {
				  if( name.val().length==0)
				  {     
				      name.addClass('error-red-border');
				      name.focus();
				      name.after('<span class="error-red-message">Please enter valid ' + name.attr('placeholder')+'</span>');
				      flag = false; 
				  }
			  }
			  else
			  {
			   	name.removeClass('error-red-border');   	
			  }

			  //username 
			  if(username.length > 0)
			  {
				  if( username.val().length==0)
				  {     
				      username.addClass('error-red-border');
				      username.focus();
				      username.after('<span class="error-red-message">Please enter valid ' + username.attr('placeholder')+'</span>');
				      flag = false; 
				  }
			  }
			  else
			  {
			   	username.removeClass('error-red-border');   	
			  }

			  //email 
			  if(email.length > 0)
			  {
				  if( email.val().length==0)
				  {     
				      email.addClass('error-red-border');
				      email.focus();
				      email.after('<span class="error-red-message">Please enter valid ' + email.attr('placeholder')+'</span>');
				      flag = false; 
				  }
			  }
			  else
			  {
			   	email.removeClass('error-red-border');   	
			  }


			 return flag;
	  	  	 event.preventDefault(); 


		},
		validateCommentData : function()
		{
			var flag = true;
			var commentname= jQuery('#commentnameinput');
			var commentemail=jQuery('#commentmailinput');
			var commentbody= jQuery('#commentbodyinput');

			  //commentname 
			  if(commentname.length > 0)
			  {
				  if( commentname.val().length==0)
				  {     
				      commentname.addClass('error-red-border');
				      commentname.focus();
				      commentname.after('<span class="error-red-message">Please enter valid ' + commentname.attr('placeholder')+'</span>');
				      flag = false; 
				  }
			  }
			  else
			  {
			   	commentname.removeClass('error-red-border');   	
			  }

			  //commentemail 
			  if(commentemail.length > 0)
			  {
				  if( commentemail.val().length==0)
				  {     
				      commentemail.addClass('error-red-border');
				      commentemail.focus();
				      commentemail.after('<span class="error-red-message">Please enter valid ' + commentemail.attr('placeholder')+'</span>');
				      flag = false; 
				  }
			  }
			  else
			  {
			   	commentemail.removeClass('error-red-border');   	
			  }

			   //commentbody 
			  if(commentbody.length > 0)
			  {
				  if( commentbody.val().length==0)
				  {     
				      commentbody.addClass('error-red-border');
				      commentbody.focus();
				      commentbody.after('<span class="error-red-message">Please enter valid ' + commentbody.attr('placeholder')+'</span>');
				      flag = false; 
				  }
			  }
			  else
			  {
			   	commentbody.removeClass('error-red-border');   	
			  }


			 return flag;
	  	  	 event.preventDefault(); 


		},


		 
    } //enf of return	
}; //end of class

UserComments= UserComments();
jQuery(document).ready(function($) 
{
   UserComments.init();
});