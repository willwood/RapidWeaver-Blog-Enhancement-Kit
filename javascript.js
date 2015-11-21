/*
RAPIDWEAVER BLOG ENHANCEMENT KIT v1.0.0.
Invented and coded by Will Woodgate (willwoodgate.com).
Borrows some opensource code and scripts from other developers. Released as opensource software under the MIT license.
Search online for 'rapidweaver blog enhancement kit' for more detailed documentation. 
*/

$ThemeFlood(document).ready(function() {

	// Variables for things you can customise (like text labels).
	var sharelabel = 'Share this post:';
	var readtimelabel = 'Estimated reading time: ';
	var wordcountlabel = 'Word count: ';
	var wordslabel = ' words';
	var additionalcontent = 'Additional content goes here';
	var muutcode = '<a class="muut" href="https://muut.com/i/username/comments" type="dynamic">username</a>';
	
	// Determine what sort of blog page we're dealing with here
	if ( $ThemeFlood('.blog-archive-entries-wrapper').length ) {
		$ThemeFlood('body').addClass('blog-body-page');
	} else {
		$ThemeFlood('body').addClass('blog-summary-page');
	}
	
	// Variables (this is where we collect information about the blog)
	var pageurl = window.location;
	var bodyarticle = $ThemeFlood('.blog-archive-entries-wrapper');
	var blogentry = $ThemeFlood('.blog-archive-entries-wrapper .blog-entry-body');
	var blogentrydate = $ThemeFlood('.blog-archive-entries-wrapper .blog-entry-date');
	var mainimage = $ThemeFlood(".blog-body-page img[src$='main.jpg'], .blog-body-page img[src$='main.png']");
	
	// Muut commenting, delete or un-comment the link below if commenting is not required.
	$ThemeFlood(muutcode).insertAfter(blogentry);
	
	// Social sharing buttons, delete this hunk of code if social sharing buttons are not needed
	$ThemeFlood('<div id="BEK-shareButtons">' +sharelabel+ '&nbsp;<a href="#" class="twitterHelper"><i class="fa fa-twitter-square" style="font-size:24px; padding:6px;"></i></a><a href="#" class="facebookHelper"><i class="fa fa-facebook-square" style="font-size:24px; padding:6px;"></i></a><a href="#" class="googleplusHelper"><i class="fa fa-google-plus-square" style="font-size:24px; padding:6px;"></i></a><a href="#" class="linkedinHelper"><i class="fa fa-linkedin-square" style="font-size:24px; padding:6px;"></i></a><a href="#" class="emailHelper"><i class="fa fa-envelope-square" style="font-size:24px; padding:6px;"></i></a></div>').insertAfter(blogentry);
	$ThemeFlood("#BEK-shareButtons .emailHelper").click(function(e){
		e.preventDefault();
		window.location = 'mailto:?&body='+pageurl;
	});
	$ThemeFlood("#BEK-shareButtons .facebookHelper").click(function(e){
		e.preventDefault();
		window.open('https://www.facebook.com/sharer/sharer.php?u='+pageurl);
	});
	$ThemeFlood("#BEK-shareButtons .googleplusHelper").click(function(e){
		e.preventDefault();
		window.open('https://plus.google.com/share?url='+pageurl);
	});
	$ThemeFlood("#BEK-shareButtons .linkedinHelper").click(function(e){
		e.preventDefault();
		window.open('http://www.linkedin.com/shareArticle?mini=true&url='+pageurl);
	});
	$ThemeFlood("#BEK-shareButtons .twitterHelper").click(function(e){
		e.preventDefault();
		window.open('http://twitter.com/share?url='+pageurl);
	});
	
	// Reading time and word count, delete this hunk of code if reading times or word counts are not needed
	// Developed by Michael Lynch (http://michaelynch.com), licensed under the MIT license
	!function(e){e.fn.readingTime=function(n){var t={readingTimeTarget:".eta",wordCountTarget:null,wordsPerMinute:270,round:!0,lang:"en",lessThanAMinuteString:"",prependTimeString:"",prependWordString:"",remotePath:null,remoteTarget:null,success:function(){},error:function(){}},i=this,r=e(this);i.settings=e.extend({},t,n);var a=i.settings;if(!this.length)return a.error.call(this),this;if("it"==a.lang)var s=a.lessThanAMinuteString||"Meno di un minuto",l="min";else if("fr"==a.lang)var s=a.lessThanAMinuteString||"Moins d'une minute",l="min";else if("de"==a.lang)var s=a.lessThanAMinuteString||"Weniger als eine Minute",l="min";else if("es"==a.lang)var s=a.lessThanAMinuteString||"Menos de un minuto",l="min";else if("nl"==a.lang)var s=a.lessThanAMinuteString||"Minder dan een minuut",l="min";else if("sk"==a.lang)var s=a.lessThanAMinuteString||"Menej než minútu",l="min";else if("cz"==a.lang)var s=a.lessThanAMinuteString||"Méně než minutu",l="min";else if("hu"==a.lang)var s=a.lessThanAMinuteString||"Kevesebb mint egy perc",l="perc";else var s=a.lessThanAMinuteString||"Less than a minute",l="min";var u=function(n){if(""!==n){var t=n.trim().split(/\s+/g).length,i=a.wordsPerMinute/60,r=t/i;if(a.round===!0)var u=Math.round(r/60);else var u=Math.floor(r/60);var g=Math.round(r-60*u);if(a.round===!0)e(a.readingTimeTarget).text(u>0?a.prependTimeString+u+" "+l:a.prependTimeString+s);else{var o=u+":"+g;e(a.readingTimeTarget).text(a.prependTimeString+o)}""!==a.wordCountTarget&&void 0!==a.wordCountTarget&&e(a.wordCountTarget).text(a.prependWordString+t),a.success.call(this)}else a.error.call(this,"The element is empty.")};r.each(function(){null!=a.remotePath&&null!=a.remoteTarget?e.get(a.remotePath,function(n){u(e("<div>").html(n).find(a.remoteTarget).text())}):u(r.text())})}}($ThemeFlood);
	$ThemeFlood(blogentrydate).append('<div id="blogEntryStats">'+readtimelabel+'<div id="eta" style="display:inline;"></div> | '+wordcountlabel+'<div id="wrd" style="display:inline;"></div>'+wordslabel+'</div>');
	$ThemeFlood(blogentry).readingTime({
		readingTimeTarget: '#eta',
		wordCountTarget: '#wrd',
		lang: 'en' // Can be one of en, fr, de, es, nl, sk or cz
	});
	
	// Append any image named 'main.jpg' or 'main.png' to the theme FreeStyle banner container (on blog body page only), delete this hunk if not required.
	$ThemeFlood(mainimage).appendTo('#freeStyle');
	if ( $ThemeFlood(mainimage).length ) {
		$ThemeFlood("#freeStyle img:first").hide(); // If a main image is found, remove the default image to prevent duplciates showing
	}
	
	// Convert MP3 links into audio players, delete this hunk if not required.
	$ThemeFlood('.blog-archive-entries-wrapper .blog-entry a[href$="mp3"]').each(function(){
		var audioURL = $ThemeFlood(this).attr('href');
		$ThemeFlood(this).after('<br><audio class="nativePlayer" controls src="'+audioURL+'" type="audio/mpeg" preload="auto" style="width:100%"></audio>');
	});
	
	// Convert MP4 links into video players, delete this hunk if not required.
	$ThemeFlood('.blog-archive-entries-wrapper .blog-entry a[href$="mp4"]').each(function(){
		var videoURL = $ThemeFlood(this).attr('href');
		$ThemeFlood(this).after('<br><video class="nativePlayer" controls src="'+videoURL+'" type="video/mpeg" preload="auto" style="width:100%"></video>');
	});
	
	// Append additional content after each blog article, delete this hunk if not required.
	$ThemeFlood(blogentry).append('<div id="additionalContent">'+additionalcontent+'</div>');
	
});
