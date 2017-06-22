var inspiredQuote = ['A diva is a female version of a hustla.', 'I see it, I want it, I work hard, I dream it, I grind \'til I own it.', 'I\'d put myself first and make the rules as I go.', 'My aspiration in life would be to be happy.', 'Some women were made, but me, myself? I like to think that I was created.', 'A little sweat ain\'t never hurt nobody.', 'I\'ma keep running \'cause a winner don\'t quit on themselves.', 'After all of the darkness and sadness soon comes happiness.', 'Wishing you the best. Pray that you are blessed. Much success, no stress, and lots of happiness.', 'It took me some time, But now I am strong. Because I realized I got me, myself and I.'];

var romanticQuote = ['I love you like xo.', 'Nobody sees what we see, they\'re just hopelessly gazing.', 'Down to ride \'til the very end.', 'Hold up, they dont love you like I love you.', 'Your love is bright as ever, even in the shadows.', 'Everywhere I\'m looking now, I\'m surrounded by your embrace.', 'We be all night.', 'Finally you put my love on top.', 'But I still dont understand how your love can do it, no one else can.', 'True love breathes salvation back into me.'];

var fierceQuote = ['I did not come to play with you hoes. I came to slay.', 'Always stay gracious, the best revenge is paper.', 'Okay ladies, now lets get in formation.', 'I dont wanna lose my pride but Imma fuck me up a bitch.', 'I am the dragon breathing fire.', 'If you got it flaunt it. Boy I know you want it.', 'You thought that I would die without you but I\'m living', 'I\'m known to walk along but I\'m alone for a reason. Sending me a drink ain\'t appeasing, believe me.', 'You know you that bitch when you cause all this conversation.', 'All them fives need to listen when a ten is talking.'];

var flawlessQuote = ['Okay ladies, now lets get in formation.', 'We flawless, ladies tell \'em. Say I look so good tonight. God damn. God damn. God damn.', 'I wake up looking this good, and I wouldn\'t change it if I could.', 'Respect that. Bow down bitches.', 'I\'m feeling myself.', 'I stop the world, male or female it makes no difference, I stop the world. World stop, carry on.', 'I sneezed on the beat and the beat got sicker.', 'I know the world and I know who I am, it\'s about time I show it.', 'Fresher than you.', 'My persuasion can build a nation.'];

var ruthlessQuote = ['You better call Becky with the good hair.', 'You don\'t deserve my tears, I guess thats why they ain\'t there.', 'Keep talking that mess that\'s fine, but could you walk and talk at the same time?', 'I am not the one to sit around and be played.', 'I ain\'t sorry.', 'And I\'m gonna always be the best thing you never had.', 'Ashes to ashes, dust to side chicks.', 'Middle fingers up. Put them hands high. Wave it in his face, tell him boy, bye.', 'If you thought I would wait for you, you thought wrong.', 'So sad, you\'re hurt, boo-hoo, oh, did you expect me to care?']

var confidentQuote = ['I know the world and I know who I am, it\'s about time I show it.' , 'You must not know \'bout me. I could have another you in a minute. And in fact, he\'ll be here in a minute.', 'We\'re smart enough to make these millions.', 'I hear you be the block but I\'m the lights that keep the streets on.', 'I\'m a survivor I\'m not gon\' give up, I\'m not gon\' stop, I\'m \'gon work harder.' , 'Some call it arrogant, I call it confident.', 'Oh boy, you\'re looking like you like what you see. Won\'t you come over and check up on it. I\'ma let you work up on it', 'I know you care!', 'Smack that, clap clap clap like you dont care.', 'I twirl on my haters.'];

$('#submit').click(function() {
	$('body').removeClass();
  $('h1').css('color', '#ffffff');

	if ($('#dropdown option:selected').val() == 'inspired') {
  		var inspiredLyric = inspiredQuote[Math.floor((Math.random() * 9) + 1)];
  		$('p').text(inspiredLyric);
  		$('body').addClass('inspiredstyle');
  		$('.shufflebtn').show();

  	} else if ($('#dropdown option:selected').val() == 'romantic') {
		var romanticLyric = romanticQuote[Math.floor((Math.random() * 9) + 1)]; 
		$('p').text(romanticLyric);
  		$('body').addClass('romanticstyle');
  		$('.shufflebtn').show();

  	} else if ($('#dropdown option:selected').val() == 'fierce') {
		var fierceLyric = fierceQuote[Math.floor((Math.random() * 9) + 1)]; 
		$('p').text(fierceLyric);
  		$('body').addClass('fiercestyle');
  		$('.shufflebtn').show();

  	} else if ($('#dropdown option:selected').val() == 'flawless') {
		var flawlessLyric = flawlessQuote[Math.floor((Math.random() * 9) + 1)]; 
		$('p').text(flawlessLyric);
  		$('body').addClass('flawlessstyle');
  		$('.shufflebtn').show();

  	} else if ($('#dropdown option:selected').val() == 'ruthless') {
		var ruthlessLyric = ruthlessQuote[Math.floor((Math.random() * 9) + 1)]; 
		$('p').text(ruthlessLyric);
  		$('body').addClass('ruthlessstyle');
  		$('.shufflebtn').show();

  	} else if ($('#dropdown option:selected').val() == 'confident'){
		var confidentLyric = confidentQuote[Math.floor((Math.random() * 9) + 1)]; 
		$('p').text(confidentLyric);
  		$('body').addClass('confidentstyle');
  		$('.shufflebtn').show();

  	} else {
  		$('p').text('');
  		$('body').removeClass();
      $('h1').css('color', '#E7BBD6');
  	}
})


$('.shufflebtn').click(function() {

if ($('#dropdown option:selected').val() == 'inspired') {
  		var inspiredLyric = inspiredQuote[Math.floor((Math.random() * 9) + 1)];
  		$('p').text(inspiredLyric);
  		$('.shufflebtn').show();

  	} else if ($('#dropdown option:selected').val() == 'romantic') {
		var romanticLyric = romanticQuote[Math.floor((Math.random() * 9) + 1)]; 
		$('p').text(romanticLyric);
  		$('.shufflebtn').show();

  	} else if ($('#dropdown option:selected').val() == 'fierce') {
		var fierceLyric = fierceQuote[Math.floor((Math.random() * 9) + 1)]; 
		$('p').text(fierceLyric);
  		$('.shufflebtn').show();

  	} else if ($('#dropdown option:selected').val() == 'flawless') {
		var flawlessLyric = flawlessQuote[Math.floor((Math.random() * 9) + 1)]; 
		$('p').text(flawlessLyric);
  		$('.shufflebtn').show();

  	} else if ($('#dropdown option:selected').val() == 'ruthless') {
		var ruthlessLyric = ruthlessQuote[Math.floor((Math.random() * 9) + 1)]; 
		$('p').text(ruthlessLyric);
  		$('.shufflebtn').show();

  	} else if ($('#dropdown option:selected').val() == 'confident'){
		var confidentLyric = confidentQuote[Math.floor((Math.random() * 9) + 1)]; 
		$('p').text(confidentLyric);
  		$('.shufflebtn').show();

  	} else {
  		$('.shufflebtn').hide();
  	}
})