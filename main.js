/* 
1) Création d'un tableau avec des phrases dedans

2) Création d'une fonction qui lance un nombre random
	sur la base de la longueur du tableau.

3) Création d'une fonction qui mets une des phrase du tableau
	dans la balise p au click sur le bouton.
	Le chiffre random sert d'index pour la tableau.

4) Création d'un écouteur d'evenement qui va lancer la fonction random
	qui elle même lance la fonction text.

5) Changement de la couleur des phrases au click, même étapes que pour 
	le tableau des phrases.
*/
window.onload = function(){
	var phrases = ['Alice au pays des merveilles : Et la reine répondit: «Nous courons pour rester à la même place.»',
					"Albert Einstein : Il n'existe que deux choses infinies, l'univers et la bêtise humaine... mais pour l'univers, je n'ai pas de certitude absolue",
					'Albert Einstein : Le monde ne sera pas détruit par ceux qui font le mal, mais par ceux qui regardent faire.',
					'Albert Einstein : L’imagination est plus importante que le savoir.',
					'Petit prince : On ne voit bien qu\'avec le coeur. L\'essentiel est invisible pour les yeux.',
					"Coluche : Certains ont l'air honnête, mais quand ils te serrent la main, tu as intérêt à recompter tes doigts.",
					'Coluche : Quand j’étais petit à la maison, le plus dur c’était la fin du mois... Surtout les trente derniers jours !',
					"Coluche : La différence qu'il y a entre les oiseaux et les hommes politiques, c'est que de temps en temps les oiseaux s'arrêtent de voler !",
					'Desproges : Plus je connais les hommes, plus j’aime mon chien. Plus je connais les femmes, moins j’aime ma chienne.',
					'Sigmund Freud : Si tu veux pouvoir supporter la vie, sois prêt à accepter la mort !',
					'Bob Marley : Ne vis pas pour que ta présence se remarque, mais pour que ton absence se ressente.',
					'Oscar Wilde : Démocratie : l’oppression du peuple par le peuple pour le peuple.',
					"Oscar Wilde : Autant viser la lune, car même en cas d'échec on finit dans les étoiles.",
					'Charles de Gaulle : La guerre, c\'est comme la chasse, sauf qu\'à la guerre les lapins tirent.',
					"Pierre Dac : L'avenir, c'est du passé en preparation",
					"Pierre Dac : Il vaut mieux ne rien avoir que d'avoir des choses qui ne servent à rien.",
					"Gustave Parking : Des fois, il vaut mieux vaut ne rien dire et passer pour un con que de l'ouvrir et ne laisser aucun doute à ce sujet.",
					"Aristote:L'ignorant affirme, le savant doute, le sage réfléchit"];
	var color = ['#000','#333','#17ca95','#555','#7f8bfd','#2d3692','#ccc','#309251','#ca8717','#086327',];
	console.log(phrases.length);
	console.log(color.length);

	//var random = phrases[Math.floor(Math.random()*phrases.length)];
	//console.log(random);

	//var colorrandom = color[Math.floor(Math.random()*color.length)]

	//console.log(colorrandom);

	//var selecteur = document.querySelector('#conteneur > p').innerHTML= random;
	//console.log(selecteur);

	var btn = document.querySelector('#conteneur > button');
	console.log(btn);


	btn.addEventListener("click",function(){

		var random = phrases[Math.floor(Math.random()*phrases.length)];
		var selecteur = document.querySelector('#conteneur > p').innerHTML= random;
		var colorrandom = color[Math.floor(Math.random()*color.length)];
		var selecteur = document.querySelector('#conteneur > p').style.color= colorrandom;

	});




};