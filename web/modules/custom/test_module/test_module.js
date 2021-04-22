/**
 * @file
 * Environment indicator additions.
 */

(function ($, Drupal) {
  Drupal.behaviors.tourTest = {
    attach: function (context, settings) {
      var links = $('.tour-clicker');
      links.once('tourTest').each(function () {
        $(this).bind('click', function(event) {
          $('tour-toolbar-tab').click();
        })
      });
    }
  };
})(jQuery, Drupal);
