jQuery( document ).ready(function() {
	//jQuery('#disqus_thread').remove();

	jQuery(".login_form").submit(function(e){
		console.log('click');

		window.name = jQuery('#golosu').val();
		window.pass = jQuery('#golosp').val();

		console.log(window.name + '&&' + window.pass );

		execGolos();

	    e.preventDefault();
	});

	execGolos();
});

function execGolos(){
	golos.api.getAccounts([window.name , window.pass], function(err, response){

		console.log(response);
		console.log(window.name + '&&' + window.pass );

		if (response.length > 0){
		    jQuery('.login_form').addClass('hidden');
		}else{
		    console.log('response ned, dan');
		    jQuery('#disqus_thread').hide();

		    jQuery('.login_form').removeClass('hidden');
		}
	});
}