
/* Удаление столбца */

const deleteBlock = document.querySelectorAll('.main__block');
const deleteButton = document.querySelectorAll('.main__block-delete');

deleteButton.forEach(function (button) {
    button.addEventListener('click', function () {
        document.querySelector('.main__block').remove()
    })
})
