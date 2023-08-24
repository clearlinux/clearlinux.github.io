/**
 * @file
 */

(function ($) {
  $(document).ready(function () {
    var cboxOptions = {
      width: "100%",
      height: "100%",
      maxWidth: "853px",
      maxHeight: "480px",
      iframe: true,
      scrolling: false,
      closeButton: true
    }

    $("body").on("click touchstart", ".Video__play", function (event) {
        event.preventDefault();
        var videoUrl = $(this).data("url") + '?autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0';
        $(".youtube").colorbox(cboxOptions);
    });

    $(window).resize(function () {
      $.colorbox.resize({
        width: window.innerWidth > parseInt(cboxOptions.maxWidth) ? cboxOptions.maxWidth : cboxOptions.width,
        height: window.innerHeight > parseInt(cboxOptions.maxHeight) ? cboxOptions.maxHeight : cboxOptions.height
      });
    });

    $(document).on('cbox_open',function () {
      $(document.body).css('overflow','hidden');
    }).on('cbox_closed',function () {
      $(document.body).css('overflow','');
    });

  });
})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL3ZpZGVvL3ZpZGVvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVcbiAqL1xuXG4oZnVuY3Rpb24gKCQpIHtcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYm94T3B0aW9ucyA9IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICBtYXhXaWR0aDogXCI4NTNweFwiLFxuICAgICAgbWF4SGVpZ2h0OiBcIjQ4MHB4XCIsXG4gICAgICBpZnJhbWU6IHRydWUsXG4gICAgICBzY3JvbGxpbmc6IGZhbHNlLFxuICAgICAgY2xvc2VCdXR0b246IHRydWVcbiAgICB9XG5cbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrIHRvdWNoc3RhcnRcIiwgXCIuVmlkZW9fX3BsYXlcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciB2aWRlb1VybCA9ICQodGhpcykuZGF0YShcInVybFwiKSArICc/YXV0b3BsYXk9MSZtb2Rlc3RicmFuZGluZz0xJmF1dG9oaWRlPTEmc2hvd2luZm89MCZjb250cm9scz0wJztcbiAgICAgICAgJChcIi55b3V0dWJlXCIpLmNvbG9yYm94KGNib3hPcHRpb25zKTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuICAgICAgJC5jb2xvcmJveC5yZXNpemUoe1xuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGggPiBwYXJzZUludChjYm94T3B0aW9ucy5tYXhXaWR0aCkgPyBjYm94T3B0aW9ucy5tYXhXaWR0aCA6IGNib3hPcHRpb25zLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCA+IHBhcnNlSW50KGNib3hPcHRpb25zLm1heEhlaWdodCkgPyBjYm94T3B0aW9ucy5tYXhIZWlnaHQgOiBjYm94T3B0aW9ucy5oZWlnaHRcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2Nib3hfb3BlbicsZnVuY3Rpb24gKCkge1xuICAgICAgJChkb2N1bWVudC5ib2R5KS5jc3MoJ292ZXJmbG93JywnaGlkZGVuJyk7XG4gICAgfSkub24oJ2Nib3hfY2xvc2VkJyxmdW5jdGlvbiAoKSB7XG4gICAgICAkKGRvY3VtZW50LmJvZHkpLmNzcygnb3ZlcmZsb3cnLCcnKTtcbiAgICB9KTtcblxuICB9KTtcbn0pKGpRdWVyeSk7XG4iXSwiZmlsZSI6ImNvbXBvbmVudHMvdmlkZW8vdmlkZW8uanMifQ==
