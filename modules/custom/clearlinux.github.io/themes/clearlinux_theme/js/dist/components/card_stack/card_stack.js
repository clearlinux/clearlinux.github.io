/**
 * @file
 */

(function ($) {
  $('body').on('click', '.slide_btn', function(){
    $(this).toggleClass('fa-chevron-down fa-chevron-up');
    if ($(this).hasClass('toggle-body')) {
      $(this).closest('.card_stack').find('.card_stack__content').stop(true, true).slideToggle();
    } 
    else {
      $(this).closest('.card_stack').find('.card_stack__metadata').stop(true, true).slideToggle();
    }
  });
})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2NhcmRfc3RhY2svY2FyZF9zdGFjay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKi9cblxuKGZ1bmN0aW9uICgkKSB7XG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnNsaWRlX2J0bicsIGZ1bmN0aW9uKCl7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnZmEtY2hldnJvbi1kb3duIGZhLWNoZXZyb24tdXAnKTtcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygndG9nZ2xlLWJvZHknKSkge1xuICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY2FyZF9zdGFjaycpLmZpbmQoJy5jYXJkX3N0YWNrX19jb250ZW50Jykuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZVRvZ2dsZSgpO1xuICAgIH0gXG4gICAgZWxzZSB7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkX3N0YWNrJykuZmluZCgnLmNhcmRfc3RhY2tfX21ldGFkYXRhJykuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZVRvZ2dsZSgpO1xuICAgIH1cbiAgfSk7XG59KShqUXVlcnkpO1xuIl0sImZpbGUiOiJjb21wb25lbnRzL2NhcmRfc3RhY2svY2FyZF9zdGFjay5qcyJ9
