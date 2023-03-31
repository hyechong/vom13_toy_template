// go top button
const goTop = document.querySelector('.top');

window.addEventListener('scroll', function () {
  const scrY = window.scrollY;
  //console.log(scrY);
  if (scrY > 50) {
    goTop.style.display = 'flex';
  } else {
    goTop.style.display = 'none';
  }
});

goTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
