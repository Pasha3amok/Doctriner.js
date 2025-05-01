import {loadCards, saveCards, createCard} from "/js/model/CardManager.js";
$(document).ready(function () {

	loadCards();

	$('.add_card_button').click(function () {
	createCard();
	saveCards();
	});
});