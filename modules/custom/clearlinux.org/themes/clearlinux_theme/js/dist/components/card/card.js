/**
 * @file
 */

(function ($) {
  $(window).once().on('load', function () {
    $('.get-popup').on('click', function (e) {
      e.preventDefault();
      $(this).next('.tool').toggleClass('d-none');
      var $el = $(this).next('.tool');
      if ($(this).parents('.column__second').length > 0 && $(window).width() >= 992) {
        $el.css('left', ($(this).position().left + 30) * -1);
      }
      else {
        $el.css('left', $(this).position().left + $(this).width() - 20);
      }
      
      showToolOnViewport($el);

      $(window).on('resize', function () {
        showToolOnViewport($el);
      });
    });

    function showToolOnViewport($el) {
      var $window = $(window);
      $el.removeClass('tool__viewport');

      if ($el[0].getBoundingClientRect().bottom > $window.innerHeight()) {
        $el.addClass('tool__viewport');
      } else {
        $el.removeClass('tool__viewport');
      }
    }

    $(document).mouseup(function (e) {
      var container = $('.tool');
      if (!container.is(e.target)
        && container.has(e.target).length === 0) {
        container.addClass('d-none');
      }
    });

    $('.tool code').on('click', function () {
      copyToClipboard(this);
      copiedTooltip(this);
    });

    $('.bundles-commands code').on('click', function () {
      copyToClipboard(this);
      copiedTooltip(this);
    });

    function copiedTooltip(element) {
      var $span = $(document.createElement('span'));
      $(element).append($span);
      $span.html('Copied');
      setTimeout(function () {
        $span.remove();
      }, 1000);
    }

    function copyToClipboard(element) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      $temp.remove();
    }

  });
})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2NhcmQvY2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKi9cblxuKGZ1bmN0aW9uICgkKSB7XG4gICQod2luZG93KS5vbmNlKCkub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmdldC1wb3B1cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKHRoaXMpLm5leHQoJy50b29sJykudG9nZ2xlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgdmFyICRlbCA9ICQodGhpcykubmV4dCgnLnRvb2wnKTtcbiAgICAgIGlmICgkKHRoaXMpLnBhcmVudHMoJy5jb2x1bW5fX3NlY29uZCcpLmxlbmd0aCA+IDAgJiYgJCh3aW5kb3cpLndpZHRoKCkgPj0gOTkyKSB7XG4gICAgICAgICRlbC5jc3MoJ2xlZnQnLCAoJCh0aGlzKS5wb3NpdGlvbigpLmxlZnQgKyAzMCkgKiAtMSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgJGVsLmNzcygnbGVmdCcsICQodGhpcykucG9zaXRpb24oKS5sZWZ0ICsgJCh0aGlzKS53aWR0aCgpIC0gMjApO1xuICAgICAgfVxuICAgICAgXG4gICAgICBzaG93VG9vbE9uVmlld3BvcnQoJGVsKTtcblxuICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dUb29sT25WaWV3cG9ydCgkZWwpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzaG93VG9vbE9uVmlld3BvcnQoJGVsKSB7XG4gICAgICB2YXIgJHdpbmRvdyA9ICQod2luZG93KTtcbiAgICAgICRlbC5yZW1vdmVDbGFzcygndG9vbF9fdmlld3BvcnQnKTtcblxuICAgICAgaWYgKCRlbFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPiAkd2luZG93LmlubmVySGVpZ2h0KCkpIHtcbiAgICAgICAgJGVsLmFkZENsYXNzKCd0b29sX192aWV3cG9ydCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGVsLnJlbW92ZUNsYXNzKCd0b29sX192aWV3cG9ydCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBjb250YWluZXIgPSAkKCcudG9vbCcpO1xuICAgICAgaWYgKCFjb250YWluZXIuaXMoZS50YXJnZXQpXG4gICAgICAgICYmIGNvbnRhaW5lci5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb250YWluZXIuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLnRvb2wgY29kZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvcHlUb0NsaXBib2FyZCh0aGlzKTtcbiAgICAgIGNvcGllZFRvb2x0aXAodGhpcyk7XG4gICAgfSk7XG5cbiAgICAkKCcuYnVuZGxlcy1jb21tYW5kcyBjb2RlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgY29weVRvQ2xpcGJvYXJkKHRoaXMpO1xuICAgICAgY29waWVkVG9vbHRpcCh0aGlzKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNvcGllZFRvb2x0aXAoZWxlbWVudCkge1xuICAgICAgdmFyICRzcGFuID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuICAgICAgJChlbGVtZW50KS5hcHBlbmQoJHNwYW4pO1xuICAgICAgJHNwYW4uaHRtbCgnQ29waWVkJyk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHNwYW4ucmVtb3ZlKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQoZWxlbWVudCkge1xuICAgICAgdmFyICR0ZW1wID0gJChcIjxpbnB1dD5cIik7XG4gICAgICAkKFwiYm9keVwiKS5hcHBlbmQoJHRlbXApO1xuICAgICAgJHRlbXAudmFsKCQoZWxlbWVudCkudGV4dCgpKS5zZWxlY3QoKTtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAgICR0ZW1wLnJlbW92ZSgpO1xuICAgIH1cblxuICB9KTtcbn0pKGpRdWVyeSk7XG4iXSwiZmlsZSI6ImNvbXBvbmVudHMvY2FyZC9jYXJkLmpzIn0=
