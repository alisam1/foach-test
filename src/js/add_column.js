/* Добавление столбца */

let addColumn = document, newDiv;

addColumn.querySelector('.main__button').addEventListener('click', function () {
    newDiv = addColumn.createElement('div');
    newDiv.className = 'main__block main__block-add';
    newDiv.innerHTML = '<div class="main__block main__block-add"><div class="main__block-top"><div class="main__block-about"><div class="main__block-img"><img src="img/back_icon.svg" alt="Back"></div><h3 class="main__block-title">На доработку</h3></div><div class="main__block-action"><button class="main__block-edit"><img src="img/edit_icon.svg" alt=""></button><button class="main__block-delete" onclick="document.querySelector(`.main__block-add`).remove()"><img src="img/delete_icon.svg" alt=""></button></div></div><div class="main__block-bottom"><div class="block-card" draggable="true"><div class="block-card__left"><div class="block-card__img"><img src="img/user_first.svg" alt="User"><img src="img/user_second.svg" alt="User"></div><div class="block-card__icon"><img src="img/card_arrows.svg" alt="Arrows"></div></div><div class="block-card__right"><div class="block-card__text"><span>#20413:</span>Статистика по заявкам</div></div></div></div></div>';
    addColumn.querySelector('.main__content').appendChild(newDiv);
}, false);
