/**
 * @file
 */

(function ($) {
  "use strict";

  Drupal.behaviors.submenu = {
    attach: function (context, settings) {
      $("#header-choose-button").unbind().click(function () {
         $(this).toggleClass('active');
         $(".Header__container-submenu").toggleClass("Header__container-submenu-active");
      });
    }
  }

  Drupal.behaviors.code_snippet = {
    attach: function (context, settings) {
      $('body.nodetype--documentation .highlight, .nodetype--generic_page code').each(function(e) {
        $(this).attr('id', 'snippet_' + e);
        $(this).before('<button class="clipboard" data-clipboard-target="#snippet_'+ e +'"><i class="fa fa-copy"></i></button>');
      });
      new ClipboardJS('.clipboard', {
        target: function(trigger) {
          return trigger.nextElementSibling;
        }
      });
      // Trigger overlay on click copy/paste.
      $('body').on('click', 'button.clipboard', (e) => {
        e.preventDefault();
        $('body button.clipboard > .highlight').removeClass('tooltip');
        $(e.currentTarget).addClass('tooltip');
        $(e.currentTarget).mouseout(function() {
          $(e.currentTarget).removeClass('tooltip');
        });
      });
      // Mouse out to remove tooltip
  }
}

  Drupal.behaviors.search_form = {
    attach: function (context, settings) {
      $("body").on("click", ".Search .form-item", function (e) {
        var x = e.offsetX;
        var y = e.offsetY;
        var w = $(window).width();

        var hideMenu = function () {
          $("#block-projectmenu").hide();
          $("#block-clearlinux-theme-branding").hide();
        }

        var hideChoose = function () {
            $("#block-clearlinuxprojectnameblock").hide();
            $(".Header__choose-ico").hide();
        }

        var showMenu = function () {
          $("#block-projectmenu").show();
          $("#block-clearlinux-theme-branding").show();
          $("#block-clearlinuxprojectnameblock").show();
          $(".Header__choose-ico").show();
        }

        if (x >= -39 && x <= -10 && y >= 15 && y <= 35) {
          if (w <= 610) {
            hideMenu();
          }
          if (w >= 610 && w <= 1000) {
            hideChoose();
          }
          if (!$(this).hasClass('active')) {
            $(this).addClass('active');
          }
        }

        if (x >= 0 && x <= 31 && y >= 15 && y <= 35) {
          console.log('aca');
          if ($(this).hasClass('active')) {
            console.log("otro");
            $("#views-exposed-form-search-page").submit();
          }
        }

        if (x >= 255 && x <= 285 && y >= 15 && y <= 35 || (y >= 16 && y <= 38 && x >= 194 && x <= 218)) {
          if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $("#edit-keys").val("");
            showMenu();
          }
        }

      });
    }
  }

  /**
   * Method that define the active tab
   */
  const urls = ['/about', '/developer'];
  const path = window.location.pathname;
  if (urls.includes(path)) {
    $('.toolbar__container .main-menu a[href="'+ path +'"]').parent().addClass('is-active');
  }

  // Back to top
  /*Scroll to top when arrow up clicked BEGIN*/
  if($('.back_to_top').length > 0) {
    var footerPosition = $('.footer').offset().top + $('.footer').outerHeight();
    var windowHeight = $(window).height();
    footerPosition = (footerPosition - windowHeight) - 200;

    $(window).scroll(function() {
      var height = $(window).scrollTop();
      if (height > 100) {
        $('.back_to_top').fadeIn();
      } else {
        $('.back_to_top').fadeOut();
      }

      if(height >= footerPosition) {
        $('.back_to_top').addClass('overlapped');
      } else {
        $('.back_to_top').removeClass('overlapped');
      }
    });
    
    $(".back_to_top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
  } 

  var sidebarNav = $('.nodetype--documentation .sidebar_nav');

  if(sidebarNav.length > 0) {
    var current_path_documentation = window.location.pathname + window.location.hash;
    var tag_link = $('a[href="' + current_path_documentation + '"]');
    var splt_path = current_path_documentation.split('/');
    var new_path = '/' + splt_path[1] + '/' + splt_path[2];
    
    if(splt_path.length > 3) {
      for (var i = 3; i < splt_path.length; i++) {
        new_path += '/' + splt_path[i].split('#')[0];
        var element = $('a[href="' + new_path + '"]');
        if(element.length) {
          expandParents(element);
        }
      }
    } 

    if(tag_link.length) {
      expandParents(tag_link);
    }
  }

  function expandParents (element) {
    element.parents('.collapsed').each(function () {
      $(this).removeClass('collapsed').addClass('active');
      $(this).find('.fa-caret-right:first').removeClass('fa-caret-right').addClass('fa-caret-down');
    });
  }

})(jQuery);
