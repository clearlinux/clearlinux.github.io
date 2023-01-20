/**
 * @file
 */

(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.softwareBehavior = {
    attach: function (context, settings) {
      var softwarePage = drupalSettings.softwarePage;

      $(window).once().on('load', function () {
        if (softwarePage) {
          $category = '<ul>';
          $.each(softwarePage.bundleCategoriesData, function (key, val) {
            $category += '<li>';
            if (val.icon !== 'WITHOUT_ICON') {
              $category += '<img src="' + val.icon.url.replace('.svg', '.small.svg?v=2.1') + '" alt="" onerror="' + softwarePage.icon404 + '">';
            }
            $category += '<a href="' + val['url'] + '" class="' + val['class'] + '">' + val.name + '</a>';
            $category += '</li>';
          });
          $category += '</ul>';

          $('.bundles__category__list').append($category);

          /* Bundles filter */
          /*$lts = '<ul>';
          $.each(softwarePage.bundleLtsData, function (key, val) {
            $lts += '<li>';
            $lts += '<label><input type="checkbox" value="' + val.name + '" name="lts_bundle" />' + val.name.split('-')[0] + ' ' + val.name.split('-')[1] + '</label>';
            $lts += '</li>';
          });
          $lts += '<li><a href="/software" id="clear-lts">Clear all</a></li>';
          $lts += '</ul>';

          $('.bundles__lts__list-items').append($lts);*/
        }

        var $title = $('.bundle__info__wrapper h2 span');
        var normalizeTitle = function() {
          var isShort = +($(window).width() < 500);
          $title.text($title.text().replace([/_ /g, /_/g][isShort], ['_', '_ '][isShort]));
        };

        if ($title.length) {
          normalizeTitle();
          $(window).on('resize', normalizeTitle);
        }

        $(".tabs__container #inside__bundle").hide();
        $(".tabs__container #get__bundle").show();
        /* if in tab mode */
        $(".tabs__button li").click(function () {

          $(".tab__content").hide();
          var activeTab = $(this).attr("rel");
          $("#" + activeTab).fadeIn(300);

          $("ul.tabs__button li").removeClass("active");
          $(this).addClass("active");

          $(".tab_drawer_heading").removeClass("d_active");
          $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
        });

        $('.bundles__category__list ul li a').on('click', function () {
          $('.bundles__category__list ul li a').removeClass('active__category');
          $(this).addClass('active__category');
        });

        $('.get-bundle-btn').on('click', function (e) {
          e.preventDefault();
          $(this).parent().find('.tool').toggleClass('d-none');
          var $el = $(this).parent().find('.tool');

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

        function hideCategory() {
          var windowWidth = $(window).width();

          if (windowWidth > 768) {
            $('.show-list').hide();
            $('.bundles__category__list').show();
          } else if (windowWidth <= 768) {
            $('.show-list').show();
            $('.bundles__category__list').hide();
          }
        }

        hideCategory();

        $('.bundle__info__block p span').each(function (key, elem) {
          var $elem = $(elem);
          $elem.attr('data-content', $elem.text().replace(/_/g, '_ '));
          $elem.parent().attr('data-content', $elem.text());
        });

        $('.bundles-commands code').each(function (key, elem) {
          var $elem = $(elem);
          $elem.html($elem.text().replace(/[.]/g, '.<wbr>'));
        });

        $('.category__block').each(function (key, elem) {
          var $elem = $(elem);
          $elem.attr('data-content', $elem.text());
        });

        $(window).on('resize', function () {
          hideCategory();
          trimLongText('.category__block', ' ', '...');
          trimLongText('.bundle__info__block p span', '', '...', true);
        });

        $('.show-list').click(function () {
          $('.show-list').toggleClass('arrow');
          $('.bundles__category__list').slideToggle('slow');
        });

        function copyToClipboard(element) {
          var $temp = $("<input>");
          $("body").append($temp);
          $temp.val($(element).text()).select();
          document.execCommand("copy");
          $temp.remove();
        }

        function trimLongText(selector, separator, trimText, hint) {
          $(selector).each(function (key, elem) {
            var $elem = $(elem);

            $elem.html($elem.attr('data-content'));
            if ((elem.scrollHeight - 2) > elem.offsetHeight) {
              var textArr = $elem.text().split(separator);
              if (hint) {
                $elem.parent().addClass('bundle__long__title');
              }
              while ((elem.scrollHeight - 2) > elem.offsetHeight) {
                textArr.pop();
                $elem.text(textArr.join(separator) + trimText);
              }
            } else {
              $elem.parent().removeClass('bundle__long__title');
            }
          });
        }

        trimLongText('.category__block', ' ', '...');
        trimLongText('.bundle__info__block p span', '', '...', true);

        $('#edit-search-api-fulltext').attr('autocomplete', 'off');

        $('#views-exposed-form-bundles-search-view-bundles-search').submit(function () {
          $('input[name=field_bundle_category]').prop("checked", false);
          $('#edit-field-bundle-category-all').prop("checked", true);
        });

        function copiedTooltip(element) {
          var $span = $(document.createElement('span'));
          $(element).append($span);
          $span.html('Copied');
          setTimeout(function () {
            $span.remove();
          }, 1000);
        }

        /* Adding LTS events */
        /*$('body').on('change', '.bundles__lts__list-items input:checkbox', function () {
          var isChecked = $(this).is(':checked');
          var location = window.location;
          var newUrl = location.href + 
            (location.search !== '' ? '&' : '?') + 
            'field_bundle_keywords=' + 
            ( isChecked ? $(this).val() : '' );

          window.location.href = newUrl;
        });

        $('body').on('click', '.bundles__category__list a', function (e) {
          e.preventDefault();
          var ltsTypes = [];

          $('.bundles__lts__list-items input[type=checkbox]:checked').each(function(index, element) {
            ltsTypes.push($(this).val());
          });

          if (ltsTypes.length > 0) {
            window.location.href = $(this).attr('href') + '&field_bundle_keywords=' + ltsTypes[0];
          }
          else {
            window.location.href = $(this).attr('href');
          }
        });

        $('body').on('click', '.bundles__lts__list-select', function (e) {
          $('.bundles__lts__list-items').toggleClass('active');
          $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
        });

        $(document).ready(function () {
          var searchParams = new URLSearchParams(window.location.search);
          if (searchParams.has('field_bundle_keywords')) {
            $('input:checkbox[value="'+ searchParams.get('field_bundle_keywords') +'"]').prop('checked', true);
            $('#selected-bundles').text(searchParams.get('field_bundle_keywords'));
          }
          else {
            $('#selected-bundles').text('MAINLINE');
          }
        });*/

      });
    }
  };
})(jQuery, Drupal, drupalSettings);
