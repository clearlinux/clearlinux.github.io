/**
 * @file
 */

(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.softwareBatchBehavior = {
    attach: function (context, settings) {
      var waiterId;
      var $ = jQuery;

      if (!$('.progress__percentage').length) return;

      function waiter() {
        var label = $('.progress__label').text();
        var percent = parseInt($('.progress__percentage').text());

        if (percent > 0 && !label) {
          clearInterval(waiterId);
          window.location.href = 'admin/config/software/settings/global';
        }
      }

      waiterId = setInterval(waiter, 5000);
    }
  };
})(jQuery, Drupal, drupalSettings);
