jQuery( document ).ready(function() {
	//jQuery('#disqus_thread').remove();

	jQuery("#goloslogout").click(function(){
		window.name = 'meh';
		execGolos();
	});

	jQuery('.btn post-action__button').click(function(){
		golos.broadcast.comment(wif, parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata, function(err, result) {
		console.log(err, result);
		});
	});

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
	golos.api.getAccounts([window.name], function(err, response){

		golos.api.login(window.name, window.pass , function(err, result) {

			console.log('login code');
			console.log(result);

			if (result.length > 0){
			    jQuery('.login_form').addClass('hidden');
			    jQuery('#disqus_thread').show();
			}else{
			    console.log('response ned, dan');
			    jQuery('#disqus_thread').hide();
			    jQuery('.login_form').removeClass('hidden');
			}
		});

	});
}