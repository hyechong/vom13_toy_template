const stickyHeader = () => {
  const scry = window.scrollY;
  console.log(scry);
};

window.addEventListener('scroll', stickyHeader);
