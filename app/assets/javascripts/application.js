/* global $ */
/* global GOVUK */

function ShowHideContent () {
  var self = this

  self.escapeElementName = function (str) {
    var result = str.replace('[', '\\[').replace(']', '\\]')
    return (result)
  }

  self.showHideRadioToggledContent = function () {
    $(".block-label input[type='radio']").each(function () {
      var $radio = $(this)
      var $radioGroupName = $radio.attr('name')
      var $radioLabel = $radio.parent('label')

      var dataTarget = $radioLabel.attr('data-target')

      // Add ARIA attributes

      // If the data-target attribute is defined
      if (dataTarget) {
        // Set aria-controls
        $radio.attr('aria-controls', dataTarget)

        $radio.on('click', function () {
          // Select radio buttons in the same group
          $radio.closest('form').find('.block-label input[name=' + self.escapeElementName($radioGroupName) + ']').each(function () {
            var $this = $(this)

            var groupDataTarget = $this.parent('label').attr('data-target')
            var $groupDataTarget = $('#' + groupDataTarget)

            // Hide toggled content
            $groupDataTarget.addClass('js-hidden')
            // Set aria-expanded and aria-hidden for hidden content
            $this.attr('aria-expanded', 'false')
            $groupDataTarget.attr('aria-hidden', 'true')
          })

          var $dataTarget = $('#' + dataTarget)
          $dataTarget.removeClass('js-hidden')
          // Set aria-expanded and aria-hidden for clicked radio
          $radio.attr('aria-expanded', 'true')
          $dataTarget.attr('aria-hidden', 'false')
        })
      } else {
        // If the data-target attribute is undefined for a radio button,
        // hide visible data-target content for radio buttons in the same group

        $radio.on('click', function () {
          // Select radio buttons in the same group
          $('.block-label input[name=' + self.escapeElementName($radioGroupName) + ']').each(function () {
            var groupDataTarget = $(this).parent('label').attr('data-target')
            var $groupDataTarget = $('#' + groupDataTarget)

            // Hide toggled content
            $groupDataTarget.addClass('js-hidden')
            // Set aria-expanded and aria-hidden for hidden content
            $(this).attr('aria-expanded', 'false')
            $groupDataTarget.attr('aria-hidden', 'true')
          })
        })
      }
    })
  }
  self.showHideCheckboxToggledContent = function () {
    $(".block-label input[type='checkbox']").each(function () {
      var $checkbox = $(this)
      var $checkboxLabel = $(this).parent()

      var $dataTarget = $checkboxLabel.attr('data-target')

      // Add ARIA attributes

      // If the data-target attribute is defined
      if (typeof $dataTarget !== 'undefined' && $dataTarget !== false) {
        // Set aria-controls
        $checkbox.attr('aria-controls', $dataTarget)

        // Set aria-expanded and aria-hidden
        $checkbox.attr('aria-expanded', 'false')
        $('#' + $dataTarget).attr('aria-hidden', 'true')

        // For checkboxes revealing hidden content
        $checkbox.on('click', function () {
          var state = $(this).attr('aria-expanded') === 'false'

          // Toggle hidden content
          $('#' + $dataTarget).toggleClass('js-hidden')

          // Update aria-expanded and aria-hidden attributes
          $(this).attr('aria-expanded', state)
          $('#' + $dataTarget).attr('aria-hidden', !state)
        })
      }
    })
  }
}

$(document).ready(function () {
  // Use GOV.UK selection-buttons.js to set selected
  // and focused states for block labels
  var $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']")
  new GOVUK.SelectionButtons($blockLabels) // eslint-disable-line

  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .block-label uses the data-target attribute
  var toggleContent = new ShowHideContent()
  toggleContent.showHideRadioToggledContent()
  toggleContent.showHideCheckboxToggledContent()
})


// Tabs

// as JS is working, add 'tabs' class, which will style tabs and allow
// functionality
$('.js-tabs').addClass('tabs');

// hide all of the tab content for now
$('.tab-content').hide();
//show the first tab and content
$('.tabs').each(function(){
  $(this).find('.tab-content:first').show();
  $(this).find('ul li:first').addClass('active');
});

// click function for tabs
$('.tabs__link').click(function(e){
  e.preventDefault();

  var tabs = $(this).parents('.tabs');
  var link = $(this);
  var currentTab = link.attr('href');

  // remove active class from nav and add to newly selected tab
  tabs.find('li').removeClass('active');
  link.parent('li').addClass('active');

  // hide all of the tab content and show newly selected then update hash in URL
  tabs.find('.tab-content').hide();
  $(currentTab).show();
  history.pushState({}, '', currentTab);
});

// check for hash in url and open that tab if its there
var hash = window.location.hash;
if (hash) {
  $('.tabs__link[href="' + hash +'"]').click();
}
