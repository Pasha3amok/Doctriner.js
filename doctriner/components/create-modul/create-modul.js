// $(document).ready(
// 	function () {
// 		$(".add_card_button").on("click", function() {
// 			$(".card-hat").css("background-color","black")
// 		})
// 	}
// )
// $(document).ready(
// 	function () {
// 		$(".red-btn").on("click", function() {
// 			$(".card-hat").css("background-color","red")
// 		})
// 	}
// )
// $(document).ready(
// 	function () {
// 		$(".yellow-btn").on("click", function() {
// 			$(".card-hat").css("background-color","yellow")
// 		})
// 	}
// )
// $(document).ready(
// 	function () {
// 		$(".black-btn").on("click", function() {
// 			$(".card-hat").css("background-color","black")
// 		})
// 	}
// )
$(document).ready(function () {
  // Функція для створення нового card
  function createCard() {
    const card = $(`
      <li class="card">
        <div class="card__body">
          <div class="card-hat"></div>
          <div class="card-base">
            <div class="input-list">
              <div class="term input-proprties">
                <input type="text" class="card__input" placeholder="Термін">
              </div>
              <div class="definition input-proprties">
                <input type="text" class="card__input" placeholder="Дефініція">
              </div>
            </div>
            <ul class="color-changer">
              <li>
                <button class="red-btn">
                  <div class="red-circle"></div>
                </button>
              </li>
              <li>
                <button class="yellow-btn">
                  <div class="yellow-circle"></div>
                </button>
              </li>
              <li>
                <button class="black-btn">
                  <div class="black-circle"></div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </li>
    `);

    // Додаємо обробники подій для зміни кольору тільки в новоствореній картці
    card.find('.red-btn').click(function () {
      card.find('.card-hat').css('background-color', 'red');
    });
    card.find('.yellow-btn').click(function () {
      card.find('.card-hat').css('background-color', 'yellow');
    });
    card.find('.black-btn').click(function () {
      card.find('.card-hat').css('background-color', 'black');
    });

    // Додаємо нову картку в список
    $('.cards-list').append(card);
  }

  // Обробник події для кнопки "add_card_button"
  $('.add_card_button').click(function () {
    createCard();
  });
});