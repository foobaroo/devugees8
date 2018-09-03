var UserComments= function () {
    /// <summary>Constructor function of the UserComments class.</summary>
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

			///<summary>
			///get users from the server .  
			///</summary>     
			///<returns type="user data" />   
			///<since>1.0.0</since> 
			loadUsers : function()
			{
				console.log("loadUsers...");

				jQuery.ajax({
					url:'http://35.156.88.18:3050/users',
					type:'GET',
					dataType: 'json',
					contentType: 'application/json; charset=utf-8',
					beforeSend: function(jqXHR,settings){
						jQuery('p.status-message-load').html('Processing, Please wait...');
					},
					success: function(data,textStatus,jQXhr)
					{
						console.log(data);
						if(jQXhr.status==200)
						{
							var userTable=UserComments.createUserTable(data);
							
							jQuery('#main').empty(); // jQuery('#main').html('');
							jQuery('p.status-message-load').empty();

							jQuery('#main').html(userTable);

							jQuery('#adduser').hide();
							jQuery('#addcomment').hide();

						}
						else
						{
							console.log("There is problem for loading data: status:"+jQXhr.status,",responseText:"+jQXhr.responseText);
							jQuery('p.status-message-load').text("There is problem for loading data...");
						}
					},
					error: function(jQXhr,textStatus,errorThrown)
					{
						console.log("Failed to get users! Message:"+jQXhr.statusText);
						console.log(`error: ${JSON.stringify(jQXhr)}, status: ${textStatus}, errorThrown:${errorThrown}`);
					},
					complete :function(jqXHR,textStatus)
					{
						//you can do anything if you need to do after complete
					}

				});
			},
			loadComments : function()
			{
				console.log("loadComments...");

				jQuery.ajax({
					url:'http://35.156.88.18:3050/comments',
					type:'GET',
					dataType: 'json',
					contentType: 'application/json; charset=utf-8',
					beforeSend: function(jqXHR,settings){
						jQuery('p.status-message-load').html('Processing, Please wait...');
					},
					success: function(data,textStatus,jQXhr)
					{
						console.log(data);
						if(jQXhr.status==200)
						{
							var commentTable=UserComments.createCommentTable(data);
							
							jQuery('#main').empty(); // jQuery('#main').html('');
							jQuery('p.status-message-load').empty();

							jQuery('#main').html(commentTable);

							jQuery('#adduser').hide();
							jQuery('#addcomment').hide();

						}
						else
						{
							console.log("There is problem for loading data: status:"+jQXhr.status,",responseText:"+jQXhr.responseText);
							jQuery('p.status-message-load').text("There is problem for loading data...");
						}
					},
					error: function(jQXhr,textStatus,errorThrown)
					{
						console.log("Failed to get comments! Message:"+jQXhr.statusText);
						console.log(`error: ${JSON.stringify(jQXhr)}, status: ${textStatus}, errorThrown:${errorThrown}`);
					},
					complete :function(jqXHR,textStatus)
					{
						//you can do anything if you need to do after complete
					}

				});
			},
			showUserForm : function()
			{
				jQuery('#main').empty();
				jQuery('#adduser').show();
				jQuery('#addcomment').hide();
			},
			addUser : function()
			{

				if(!UserComments.validateUserData())
					return;

				var params = {
					name: jQuery('#firstnameinput').val(),
					username:jQuery('#usernameinput').val(),
					email: jQuery('#emailinput').val()
				}
				//console.log(params);

				jQuery.ajax({
					url:'http://35.156.88.18:3050/users',
					type:'POST',
					data: JSON.stringify(params),
					dataType: 'json',
					contentType: 'application/json; charset=utf-8',
					beforeSend: function(jqXHR,settings){
						jQuery('p.status-message').html('Processing, Please wait...');
					},
					success: function(data,textStatus,jQXhr)
					{
						
						if(jQXhr.status==200)
						{
							
							jQuery('p.status-message').empty();
							jQuery('p.status-message').text('Successfully saved data');
							jQuery('p.status-message').addClass('success-green-message');

							jQuery('#user-form').trigger('reset');
					

						}
						else
						{
							console.log("There is problem for sending data: status:"+jQXhr.status,",responseText:"+jQXhr.responseText);
							jQuery('p.status-message').text("There is problem for sending data...");
						}
					},
					error: function(jQXhr,textStatus,errorThrown)
					{
						console.log("Failed to get users! Message:"+jQXhr.statusText);
						console.log(`error: ${JSON.stringify(jQXhr)}, status: ${textStatus}, errorThrown:${errorThrown}`);
					},
					complete :function(jqXHR,textStatus)
					{
						//you can do anything if you need to do after complete
					}

				});

				event.preventDefault(); //do not run the default action

			},
			showCommentForm : function()
			{
				jQuery('#main').empty();
				jQuery('#adduser').hide();
				jQuery('#addcomment').show();
			},
			addComment : function()
			{

				if(!UserComments.validateCommentData())
					return;

				var params = {
					name: jQuery('#commentnameinput').val(),
					email:jQuery('#commentmailinput').val(),
					body: jQuery('#commentbodyinput').val()
				}
				//console.log(params);

				jQuery.ajax({
					url:'http://35.156.88.18:3050/comments',
					type:'POST',
					data: JSON.stringify(params),
					dataType: 'json',
					contentType: 'application/json; charset=utf-8',
					beforeSend: function(jqXHR,settings){
						jQuery('p.status-message').html('Processing, Please wait...');
					},
					success: function(data,textStatus,jQXhr)
					{
						
						if(jQXhr.status==200)
						{
							
							jQuery('p.status-message').empty();
							jQuery('p.status-message').text('Successfully saved data');
							jQuery('p.status-message').addClass('success-green-message');

							jQuery('#comment-form').trigger('reset');
					

						}
						else
						{
							console.log("There is problem for sending data: status:"+jQXhr.status,",responseText:"+jQXhr.responseText);
							jQuery('p.status-message').text("There is problem for sending data...");
						}
					},
					error: function(jQXhr,textStatus,errorThrown)
					{
						console.log("Failed to get users! Message:"+jQXhr.statusText);
						console.log(`error: ${JSON.stringify(jQXhr)}, status: ${textStatus}, errorThrown:${errorThrown}`);
					},
					complete :function(jqXHR,textStatus)
					{
						//you can do anything if you need to do after complete
					}

				});

				event.preventDefault(); //do not run the default action

			},

		},

		createUserTable: function(data)
		{
			console.log("createUserTable...");
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

			jQuery.each(data,function(index,obj){

				html +="<tr><td>"+obj._id+"</td><td>"+obj.name+"</td><td>"+obj.username+"</td><td>"+obj.email+"</td></tr>";

			});

			html +="</tbody></table>";

			return html;

		},
		createCommentTable: function(data)
		{
			console.log("createCommentTable...");
			var html=`<table class="table">
						<thead>
						<tr>
						<th scope="col">#ID</th>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Body</th>
						</tr>
						</thead>
						<tbody>`;

			jQuery.each(data,function(index,obj){

				html +="<tr><td>"+obj._id+"</td><td>"+obj.name+"</td><td>"+obj.email+"</td><td>"+obj.body+"</td></tr>";

			});

			html +="</tbody></table>";

			return html;

		},
		validateUserData : function() {

			var flag=true;
			var name= jQuery('#firstnameinput');
			var username=jQuery('#usernameinput');
			var email= jQuery('#emailinput');
			jQuery('form#user-form input').removeClass('error-red-border');
			jQuery('form#user-form span').remove();

			//name 
			if(name.length > 0)
			{
				if(name.val().length===0)
				{
					name.addClass('error-red-border');
					name.focus();
					name.after('<span class="error-red-message">Please enter valid '+name.attr('placeholder')+'</span>');
					flag=false;
				}
				else
				{
					name.removeClass('error-red-border');
				}
			}
			//username 
			if(username.length > 0)
			{
				if(username.val().length===0)
				{
					username.addClass('error-red-border');
					username.focus();
					username.after('<span class="error-red-message">Please enter valid '+username.attr('placeholder')+'</span>');
					flag=false;
				}
				else
				{
					username.removeClass('error-red-border');
				}
			}

			//email 
			if(email.length > 0)
			{
				if(email.val().length===0)
				{
					email.addClass('error-red-border');
					email.focus();
					email.after('<span class="error-red-message">Please enter valid '+email.attr('placeholder')+'</span>');
					flag=false;
				}
				else
				{
					email.removeClass('error-red-border');
				}
			}

			
			return flag;

		},

		validateCommentData : function() {

			var flag=true;
			var name= jQuery('#commentnameinput');
			var email= jQuery('#commentmailinput');
			var body=jQuery('#commentbodyinput');
			jQuery('form#comment-form input').removeClass('error-red-border');
			jQuery('form#comment-form span').remove();

			//name 
			if(name.length > 0)
			{
				if(name.val().length===0)
				{
					name.addClass('error-red-border');
					name.focus();
					name.after('<span class="error-red-message">Please enter valid '+name.attr('placeholder')+'</span>');
					flag=false;
				}
				else
				{
					name.removeClass('error-red-border');
				}
			}
			//body 
			if(body.length > 0)
			{
				if(body.val().length===0)
				{
					body.addClass('error-red-border');
					body.focus();
					body.after('<span class="error-red-message">Please enter valid '+body.attr('placeholder')+'</span>');
					flag=false;
				}
				else
				{
					body.removeClass('error-red-border');
				}
			}

			//email 
			if(email.length > 0)
			{
				if(email.val().length===0)
				{
					email.addClass('error-red-border');
					email.focus();
					email.after('<span class="error-red-message">Please enter valid '+email.attr('placeholder')+'</span>');
					flag=false;
				}
				else
				{
					email.removeClass('error-red-border');
				}
			}

			
			return flag;

		},


		 
    } //enf of return	
}; //end of class

UserComments= UserComments();
jQuery(document).ready(function($) 
{
	UserComments.init();
});

