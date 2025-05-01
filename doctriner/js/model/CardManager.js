  export function loadCards() {
    const savedCards = localStorage.getItem('cards');
    if (savedCards) {
      const cards = JSON.parse(savedCards);
      cards.forEach(cardData => {
        createCard(cardData);
      });
    }
  }
  export function saveCards() {
    const cardsData = [];
    $('.card').each(function () {
      const term = $(this).find('.term input').val();
      const definition = $(this).find('.definition input').val();
      const color = $(this).find('.card-hat').css('background-color');
	  console.log(term);
	  console.log(definition);
	  console.log(color);
      cardsData.push({ term, definition, color });
    });
    localStorage.setItem('cards', JSON.stringify(cardsData));
  }
  export function createCard(data = {}) {
    const card = $(`
      <li class="card">
        <div class="card__body">
          <div class="card-hat" style="background-color: ${data.color || 'red'};"><i class="fa-regular fa-trash-can"></i></div>
          <div class="card-base">
            <div class="input-list">
              <div class="term input-proprties">
                <input type="text" class="term card__input" placeholder="Термін" value="${data.term || ''}">
              </div>
              <div class="definition input-proprties">
                <input type="text" class="definition card__input" placeholder="Дефініція" value="${data.definition || ''}">
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
			  <li>
              </li>
            </ul>
          </div>
        </div>
      </li>
    `);
    // Додаємо обробники подій для зміни кольору тільки в новоствореній картці
    card.find('.red-btn').click(function () {
      card.find('.card-hat').css('background-color', 'red');
	  saveCards();
    });
    card.find('.yellow-btn').click(function () {
      card.find('.card-hat').css('background-color', 'yellow');
	  saveCards();
    });
    card.find('.black-btn').click(function () {
      card.find('.card-hat').css('background-color', 'black');
	  saveCards();
    });
	

	card.find('.card__input').on('input', saveCards);

    // Додаємо нову картку в список
    $('.cards-list').append(card);
  }
