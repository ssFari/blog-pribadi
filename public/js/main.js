const menuItems = document.querySelectorAll('.s-navigation .s-ul .s-li');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    if (!item.classList.contains('s-active')) {
      menuItems.forEach(item => {
        item.classList.remove('s-active');
      });
      item.classList.add('s-active');
    }
  });
});
