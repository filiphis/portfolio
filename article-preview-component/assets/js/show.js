const $shareBtn = document.querySelector('[data-share]');
const $shareBtnActive = document.querySelector('[data-shareActive]');
const $articleShare = document.querySelector('.article__share');


$shareBtn.addEventListener('click', () => {
  $articleShare.classList.toggle('active');
});

$shareBtnActive.addEventListener('click', () => {
  $articleShare.classList.remove('active');
});
