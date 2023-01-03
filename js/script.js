window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabheader__item'),
    tabsParent = document.querySelector('.tabheader__items'),
    tabsContent = document.querySelectorAll('.tabcontent');

  const hideTabContent = () => {
    tabsContent.forEach((content) => {
      content.classList.add('hide');
      content.classList.remove('show', 'fade');
    });
    tabs.forEach((tab) => {
      tab.classList.remove('tabheader__item_active');
    });
  };

  const showTabContent = (i = 0) => {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  };

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
});
