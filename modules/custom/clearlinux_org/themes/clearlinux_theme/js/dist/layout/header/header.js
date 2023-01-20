/**
 * @file
 */

(function($) {

  $('body').on('tap', '#header a', _closeMainNav);
  $('body').on('click', '#header a', _closeMainNav);

  $('body').on('tap', '.header__menu_list_parent__icon', menuItemAction);
  $('body').on('click', '.header__menu_list_parent__icon', menuItemAction);
  $('body').on('mouseleave', '.header__menu_list_parent', _closeCollapsedChildren);

  $('body').on('tap', '.header__search_cancel', _cancelSearch);
  $('body').on('click', '.header__search_cancel', _cancelSearch);

  $('body').on('tap', '.header__menu_mobile', mobileMenuControlAction);
  $('body').on('click', '.header__menu_mobile', mobileMenuControlAction);

  $('body').on('click', '.header__search_icon', searchFormAction);
  $('body').on('tap', '.header__search_icon', searchFormAction);
  $('body').on('blur', '.header__search_form__input', _cancelSearch);

  $(document).keyup(function(event) {
    /* escape key maps to keycode 27 */
     if (event.keyCode == 27) {
      _closeMainNav();
      _cancelSearch();
    }
  });

  function searchFormAction(event) {
    _closeMainNav();
    $('.header__search_icon').toggleClass('visible hidden');
    $('.header__search_form').toggleClass('visible hidden');
    $('.header__search_form__input').first().focus();
    $('.header__search').toggleClass('active');
    $('.header__menu').addClass('search');
  }

  function menuItemAction(event) {
    $(this).parent().toggleClass('collapsed');
    $(this).parent().find('ul').toggleClass('collapsed');
    $(this).parent().find('i').toggleClass('fa-caret-down fa-caret-up');
  }

  function mobileMenuControlAction(event) {
    $('.header__menu').toggleClass('collapsed');
    $('.header__menu_mobile').toggleClass('collapsed');
    $('.header__menu_mobile__control').toggleClass('fa-bars fa-remove');
  }

  function _closeCollapsedChildren() {
    $.each($('.header__menu_list_parent.collapsed'), function() {
      $(this).removeClass('collapsed');
      $(this).find('i').toggleClass('fa-caret-down fa-caret-up');
      $(this).find('ul.collapsed').removeClass('collapsed');
    });
  }

  function _cancelSearch() {
    if ($('.header__search_form').hasClass('visible')) {
      $('.header__search_icon').toggleClass('visible hidden');
      $('.header__search_form').toggleClass('visible hidden');
    }
    if ($('.header__search').hasClass('active')) {
      $('.header__menu').removeClass('search');
      $('.header__search').removeClass('active');
    }
  }

  function _closeMainNav() {
    _closeCollapsedChildren();
    if ($('.header__menu').hasClass('collapsed')) {
      $('.header__menu').toggleClass('collapsed');
      $('.header__menu_mobile').removeClass('collapsed');
      $('.header__menu_mobile__control').toggleClass('fa-remove fa-bars');
    }
  }

  $(document).ready(function(event) {
    const blogPaths = ['/blogs', '/blogs-news', '/news-blogs'];
    const documentationPaths = ['/documentation'];
    const currentPath = `/${window.location.pathname.split('/')[1]}`;
    
    if (blogPaths.includes(currentPath)) $("a[href='/about']").parent('li').addClass('active');
    if (documentationPaths.includes(currentPath)) $("a[href='/developer']").parent('li').addClass('active'); 
    $("a[href='"+ currentPath +"']").addClass('is-active').parent('li').addClass('active');
  });

})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsYXlvdXQvaGVhZGVyL2hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKi9cblxuKGZ1bmN0aW9uKCQpIHtcblxuICAkKCdib2R5Jykub24oJ3RhcCcsICcjaGVhZGVyIGEnLCBfY2xvc2VNYWluTmF2KTtcbiAgJCgnYm9keScpLm9uKCdjbGljaycsICcjaGVhZGVyIGEnLCBfY2xvc2VNYWluTmF2KTtcblxuICAkKCdib2R5Jykub24oJ3RhcCcsICcuaGVhZGVyX19tZW51X2xpc3RfcGFyZW50X19pY29uJywgbWVudUl0ZW1BY3Rpb24pO1xuICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5oZWFkZXJfX21lbnVfbGlzdF9wYXJlbnRfX2ljb24nLCBtZW51SXRlbUFjdGlvbik7XG4gICQoJ2JvZHknKS5vbignbW91c2VsZWF2ZScsICcuaGVhZGVyX19tZW51X2xpc3RfcGFyZW50JywgX2Nsb3NlQ29sbGFwc2VkQ2hpbGRyZW4pO1xuXG4gICQoJ2JvZHknKS5vbigndGFwJywgJy5oZWFkZXJfX3NlYXJjaF9jYW5jZWwnLCBfY2FuY2VsU2VhcmNoKTtcbiAgJCgnYm9keScpLm9uKCdjbGljaycsICcuaGVhZGVyX19zZWFyY2hfY2FuY2VsJywgX2NhbmNlbFNlYXJjaCk7XG5cbiAgJCgnYm9keScpLm9uKCd0YXAnLCAnLmhlYWRlcl9fbWVudV9tb2JpbGUnLCBtb2JpbGVNZW51Q29udHJvbEFjdGlvbik7XG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmhlYWRlcl9fbWVudV9tb2JpbGUnLCBtb2JpbGVNZW51Q29udHJvbEFjdGlvbik7XG5cbiAgJCgnYm9keScpLm9uKCdjbGljaycsICcuaGVhZGVyX19zZWFyY2hfaWNvbicsIHNlYXJjaEZvcm1BY3Rpb24pO1xuICAkKCdib2R5Jykub24oJ3RhcCcsICcuaGVhZGVyX19zZWFyY2hfaWNvbicsIHNlYXJjaEZvcm1BY3Rpb24pO1xuICAkKCdib2R5Jykub24oJ2JsdXInLCAnLmhlYWRlcl9fc2VhcmNoX2Zvcm1fX2lucHV0JywgX2NhbmNlbFNlYXJjaCk7XG5cbiAgJChkb2N1bWVudCkua2V5dXAoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvKiBlc2NhcGUga2V5IG1hcHMgdG8ga2V5Y29kZSAyNyAqL1xuICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAyNykge1xuICAgICAgX2Nsb3NlTWFpbk5hdigpO1xuICAgICAgX2NhbmNlbFNlYXJjaCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gc2VhcmNoRm9ybUFjdGlvbihldmVudCkge1xuICAgIF9jbG9zZU1haW5OYXYoKTtcbiAgICAkKCcuaGVhZGVyX19zZWFyY2hfaWNvbicpLnRvZ2dsZUNsYXNzKCd2aXNpYmxlIGhpZGRlbicpO1xuICAgICQoJy5oZWFkZXJfX3NlYXJjaF9mb3JtJykudG9nZ2xlQ2xhc3MoJ3Zpc2libGUgaGlkZGVuJyk7XG4gICAgJCgnLmhlYWRlcl9fc2VhcmNoX2Zvcm1fX2lucHV0JykuZmlyc3QoKS5mb2N1cygpO1xuICAgICQoJy5oZWFkZXJfX3NlYXJjaCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcuaGVhZGVyX19tZW51JykuYWRkQ2xhc3MoJ3NlYXJjaCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVudUl0ZW1BY3Rpb24oZXZlbnQpIHtcbiAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ3VsJykudG9nZ2xlQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuICAgICQodGhpcykucGFyZW50KCkuZmluZCgnaScpLnRvZ2dsZUNsYXNzKCdmYS1jYXJldC1kb3duIGZhLWNhcmV0LXVwJyk7XG4gIH1cblxuICBmdW5jdGlvbiBtb2JpbGVNZW51Q29udHJvbEFjdGlvbihldmVudCkge1xuICAgICQoJy5oZWFkZXJfX21lbnUnKS50b2dnbGVDbGFzcygnY29sbGFwc2VkJyk7XG4gICAgJCgnLmhlYWRlcl9fbWVudV9tb2JpbGUnKS50b2dnbGVDbGFzcygnY29sbGFwc2VkJyk7XG4gICAgJCgnLmhlYWRlcl9fbWVudV9tb2JpbGVfX2NvbnRyb2wnKS50b2dnbGVDbGFzcygnZmEtYmFycyBmYS1yZW1vdmUnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jbG9zZUNvbGxhcHNlZENoaWxkcmVuKCkge1xuICAgICQuZWFjaCgkKCcuaGVhZGVyX19tZW51X2xpc3RfcGFyZW50LmNvbGxhcHNlZCcpLCBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuICAgICAgJCh0aGlzKS5maW5kKCdpJykudG9nZ2xlQ2xhc3MoJ2ZhLWNhcmV0LWRvd24gZmEtY2FyZXQtdXAnKTtcbiAgICAgICQodGhpcykuZmluZCgndWwuY29sbGFwc2VkJykucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NhbmNlbFNlYXJjaCgpIHtcbiAgICBpZiAoJCgnLmhlYWRlcl9fc2VhcmNoX2Zvcm0nKS5oYXNDbGFzcygndmlzaWJsZScpKSB7XG4gICAgICAkKCcuaGVhZGVyX19zZWFyY2hfaWNvbicpLnRvZ2dsZUNsYXNzKCd2aXNpYmxlIGhpZGRlbicpO1xuICAgICAgJCgnLmhlYWRlcl9fc2VhcmNoX2Zvcm0nKS50b2dnbGVDbGFzcygndmlzaWJsZSBoaWRkZW4nKTtcbiAgICB9XG4gICAgaWYgKCQoJy5oZWFkZXJfX3NlYXJjaCcpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgJCgnLmhlYWRlcl9fbWVudScpLnJlbW92ZUNsYXNzKCdzZWFyY2gnKTtcbiAgICAgICQoJy5oZWFkZXJfX3NlYXJjaCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY2xvc2VNYWluTmF2KCkge1xuICAgIF9jbG9zZUNvbGxhcHNlZENoaWxkcmVuKCk7XG4gICAgaWYgKCQoJy5oZWFkZXJfX21lbnUnKS5oYXNDbGFzcygnY29sbGFwc2VkJykpIHtcbiAgICAgICQoJy5oZWFkZXJfX21lbnUnKS50b2dnbGVDbGFzcygnY29sbGFwc2VkJyk7XG4gICAgICAkKCcuaGVhZGVyX19tZW51X21vYmlsZScpLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICAgICQoJy5oZWFkZXJfX21lbnVfbW9iaWxlX19jb250cm9sJykudG9nZ2xlQ2xhc3MoJ2ZhLXJlbW92ZSBmYS1iYXJzJyk7XG4gICAgfVxuICB9XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBjb25zdCBibG9nUGF0aHMgPSBbJy9ibG9ncycsICcvYmxvZ3MtbmV3cycsICcvbmV3cy1ibG9ncyddO1xuICAgIGNvbnN0IGRvY3VtZW50YXRpb25QYXRocyA9IFsnL2RvY3VtZW50YXRpb24nXTtcbiAgICBjb25zdCBjdXJyZW50UGF0aCA9IGAvJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVsxXX1gO1xuICAgIFxuICAgIGlmIChibG9nUGF0aHMuaW5jbHVkZXMoY3VycmVudFBhdGgpKSAkKFwiYVtocmVmPScvYWJvdXQnXVwiKS5wYXJlbnQoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIGlmIChkb2N1bWVudGF0aW9uUGF0aHMuaW5jbHVkZXMoY3VycmVudFBhdGgpKSAkKFwiYVtocmVmPScvZGV2ZWxvcGVyJ11cIikucGFyZW50KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTsgXG4gICAgJChcImFbaHJlZj0nXCIrIGN1cnJlbnRQYXRoICtcIiddXCIpLmFkZENsYXNzKCdpcy1hY3RpdmUnKS5wYXJlbnQoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KTtcblxufSkoalF1ZXJ5KTtcbiJdLCJmaWxlIjoibGF5b3V0L2hlYWRlci9oZWFkZXIuanMifQ==
