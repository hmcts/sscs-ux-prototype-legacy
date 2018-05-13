function ShowHideUpdates () {
    var self = this;

    self.toggleUpdates = function() {
        var $updatesContainer = $('.updates-container');
        var $i = $('.updates-toggle i');
        $i.on('click', function() {
            var $this = $(this);
            if ($this.hasClass('fa-caret-right')) {
                $this.removeClass('fa-caret-right');
                $this.addClass('fa-caret-down');
                $this.find('span').text('Hide previous updates');
                $updatesContainer.css('display', 'block');
            } else {
                $this.removeClass('fa-caret-down');
                $this.addClass('fa-caret-right');
                $this.find('span').text('View previous updates');
                $updatesContainer.css('display', 'none');
            }
        })
    }
}

$(document).ready(function () {
    var showHideUpdates =  new ShowHideUpdates();
    showHideUpdates.toggleUpdates();
});



