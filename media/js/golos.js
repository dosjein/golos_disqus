jQuery( document ).ready(function() {
	//jQuery('#disqus_thread').remove();

	$("#cpa-form").submit(function(e){
	    e.preventDefault();
	});

	golos.api.getAccounts([window.name , window.pass], function(err, response){

		if (response.lenght > 0){
		    jQuery('.login_form').addClass('hidden');
		}else{
		    console.log('response ned, dan');
		    jQuery('#disqus_thread').hide();

		    jQuery('.login_form').removeClass('hidden');
		}
	});
});