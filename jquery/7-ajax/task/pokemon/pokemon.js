  
var Pokemon =  function () {
    /// <summary>Constructor function of the Pokemon class.</summary>
    /// <returns type="Pokemon" />  


    console.log("Pokemon....");

    var pokemonLimit=15;
    var species =[];

     
   

	return {

	     init: function()
	     {
	         console.log("Application has started...");
	         jQuery('#chain-container').hide();
	         jQuery('#details-view').hide();
	         
	         jQuery('#main-view').on('click', Pokemon.actions.clickedAction); 
	  	    
	         Pokemon.displaySpeciesList();
	     },

	     actions : {

	     	  clickedAction : function(e)
			  {
			  		console.log("clickedAction....");
					if(e.target && e.target.nodeName == "BUTTON") 
					{
						var id=e.target.id.replace("btn-", "");
						//console.log("List item ", id, " was clicked!");
						Pokemon.getEvolutionChain(id);
					}
					if(e.target && e.target.nodeName == "DIV") 
					{
						var id=e.target.id.replace("details-", "");
						Pokemon.showDetails(id);
					}
					if(e.target && e.target.nodeName == "SELECT") 
					{
						//var value=e.target.value;

						//get current selected sort by value
						var sortBy = jQuery("#sort-by");
						var sortByValue = sortBy.options[sortBy.selectedIndex].value;
						species.sort(Pokemon.actions.compareValues(sortByValue));

						//get current selected order by value
						var orderBy = jQuery("#order-by");
						var orderByValue = orderBy.options[orderBy.selectedIndex].value;
						if(orderByValue=='desc')
							species.reverse();

						jQuery('#pokemon-list-view').empty();

						species.forEach(function(currentValue,index,array) {
						  Pokemon.showSpecies(currentValue);
						});
					}
					e.preventDefault();
			  },

			  compareValues : function (propName, order='asc') 
			  {

			  	  console.log("compareValues...");

				  return function(a, b) 
				  {
				  	//check if property exist or not, if property doesn't exist then return now.
				    if(!a.hasOwnProperty(propName) || !b.hasOwnProperty(propName)) 
				    {
				        return 0; 
				    }

				 	//convert string in same case so prevent errors
				    const varA = (typeof a[propName] === 'string') ? a[propName].toUpperCase() : a[propName];
				    const varB = (typeof b[propName] === 'string') ? b[propName].toUpperCase() : b[propName];

				    let comparison = 0;
				    if (varA > varB) {
				      comparison = 1;
				    } else if (varA < varB) {
				      comparison = -1;
				    }

				    return comparison;

				  };

				},
	     },

	     displaySpeciesList : function()
	     {

	     	console.log("displaySpeciesList....");
	     	
	     	for(var id=1; id<=pokemonLimit; id++)
			{
				Pokemon.getSpecies(id);		
			} 

	     },

	     getSpecies : function(id)
		 {
		 		console.log("getSpecies...");

		 		jQuery('#pokemon-list-view').empty();
		 		jQuery('#pokemon-list-view').append('<p class="status-message-load"></p>');



				jQuery.ajax({
					url:'https://pokeapi.co/api/v2/pokemon/'+id,
					type:'GET',
					async: true,
					dataType: 'json',
					contentType: 'application/json; charset=utf-8',
					beforeSend: function(jqXHR,settings){
						jQuery('p.status-message-load').html('Processing, Please wait...');
					},
					success: function(data,textStatus,jQXhr)
					{
						//console.log(data);
						if(jQXhr.status==200)
						{
								//var newItem=new Species(data);

								var newItem = {

									 	id : data.id,
									    name : data.name,
									    sprite : data.sprites.front_default,
									    type : data.types[0].type.name
								};
								species[newItem.id]=newItem;
								Pokemon.showSpecies(newItem);
								jQuery('p.status-message-load').empty();

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

		  showSpecies : function(newItem)
		  {
		  	//add dynamic pokemon list to main container
			var newHtml=`<div class="pokemon-cell" >
							<div class="pokemon-id">
								# ${newItem.id}
							</div>

							<div class="pokemon-sprite-container">
								<img class="pokemon-sprite" src="${newItem.sprite}" >
								<div class="details-container">
									<div class="details-hover" id="details-${newItem.id}">Click here for more details</div>
								</div>
							</div>
												          
							<div class="pokemon-name">
								${newItem.name}
							</div>
							<button id="btn-${newItem.id}" class="btn-chain">Show Evolution Chain</button>
						</div>`;
			 jQuery('#pokemon-list-view').append(newHtml);
		  },

		 getEvolutionChain : function(id)
		 {
		 		console.log("showEvolutionChain...");

		 		var newHtml,hasChain;
		 		jQuery('#chain-container').show();
		 		jQuery('#evolution-chain-view').empty();
		 		jQuery('#evolution-chain-view').append('<p class="status-message-chain"></p>');

		 		jQuery.ajax({
					url:'https://pokeapi.co/api/v2/evolution-chain/'+id,
					type:'GET',
					async: true,
					dataType: 'json',
					crossOrigin: true,
					contentType: 'application/json; charset=utf-8',
					beforeSend: function(jqXHR,settings){
						jQuery('p.status-message-chain').html('Processing, Please wait...');
					},
					success: function(data,textStatus,jQXhr)
					{
						console.log(data);
						if(jQXhr.status==200)
						{
								
								Pokemon.showEvolutionChain(data);
								jQuery('p.status-message-chain').empty();
						}
						else
						{
							console.log("There is problem for loading data: status:"+jQXhr.status,",responseText:"+jQXhr.responseText);
							jQuery('p.status-message-chain').text("There is problem for loading data...");
						}
					},
					error: function(jQXhr,textStatus,errorThrown)
					{
						console.log("Failed to get chain! Message:"+jQXhr.statusText);
						console.log(`error: ${JSON.stringify(jQXhr)}, status: ${textStatus}, errorThrown:${errorThrown}`);
					},
					complete :function(jqXHR,textStatus)
					{
						//you can do anything if you need to do after complete
					}

				});

		 	
		 },
		 showEvolutionChain : function(data)
		 {
		 		
		 		

		 		var evoChain = [];
				var evoData = data.chain;
				hasChain=false;

								do {

								  var evoDetails = evoData['evolution_details'][0];
								  var url=evoData.species.url;
								  var id = url.split("pokemon-species/");
								  id=id[1].replace('/', '');

								  if(species[id]!=undefined)
								  {
								  	
								  	hasChain=true;

					             	newHtml=`<div class="pokemon-cell" >
								          <div class="pokemon-id">
								            # ${species[id].id}
								          </div>
								          <img  class="pokemon-sprite" src="${species[id].sprite}">
								          <div class="pokemon-name">
								           ${species[id].name}
								          </div>
								          <button id="btn-${species[id].id}" class="btn-chain">Show Evolution Chain</button>
								        </div>`;
            						jQuery('#evolution-chain-view').append(newHtml);
            					  }

            					 //stored evolution data chain
								 evoChain.push({
								  	"id" : id,
								    "species_name": evoData.species.name,
								    "url" : url,
								    "min_level": !evoDetails ? 1 : evoDetails.min_level,
								    "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
								    "item": !evoDetails ? null : evoDetails.item
								  });

								  evoData = evoData['evolves_to'][0];
								} while (!!evoData && evoData.hasOwnProperty('evolves_to'));

								//all evoluation chain data
								//console.log(evoChain);

								if(!hasChain)
									jQuery('p.status-message-chain').append('Sorry this species not have evoluation chain!');

		 },

		 showDetails : function(id)
		 {
		 		console.log("showDetails...");

		 		jQuery('#details-view').show();
		 		jQuery('#details-view').empty();
		 		jQuery('#details-view').append('<h3>Pokémon Species Details</h3>');
		 		jQuery('#details-view').append('<p class="status-message-details"></p>');


			jQuery.ajax({
					url:'https://pokeapi.co/api/v2/pokemon-species/'+id,
					type:'GET',
					async: true,
					dataType: 'json',
					contentType: 'application/json; charset=utf-8',
					beforeSend: function(jqXHR,settings){
						jQuery('p.status-message-details').html('Processing, Please wait...');
					},
					success: function(data,textStatus,jQXhr)
					{
						//console.log(data);
						if(jQXhr.status==200)
						{
								
								var newHtml=`<div class="details-data" >
												ID: ${id} <br>
												Name: ${data.name} <br>
												Capture Rate: ${data.capture_rate} <br>
												Base Happiness: ${data.base_happiness} <br>
												Color: ${data.color.name} <br>
												Shape: ${data.shape.name} <br>	          
											</div>`;
								
				            	jQuery('#details-view').append(newHtml);
				            	jQuery('p.status-message-details').empty();
								

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

		 testing : function () 
		 {
		 	console.log("testing...");
        	console.log(species);
    	 }
	

    } //enf of return	
}; //end of class

Pokemon= Pokemon();
jQuery(document).ready(function($) 
{
	Pokemon.init();
});












