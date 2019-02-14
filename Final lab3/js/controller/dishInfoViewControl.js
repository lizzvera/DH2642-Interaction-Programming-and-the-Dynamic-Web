var DishInfoViewControl = function (view, model,hideDispView) {

    //make button functionable
    view.confDinnerSideButton.click(function () {
        hideDispView.confDinnerSideButtView();
    });


//monitor the change of customer number
    view.numberGuests.change(function () {
        model.setNumberOfGuests(view.numberGuests.val());
    });

// delete already chosen Items
    var container = view.getContainer();
    $(container).on('click', '.close', function(){
        model.removeDishFromMenus(this.id);
    });
}