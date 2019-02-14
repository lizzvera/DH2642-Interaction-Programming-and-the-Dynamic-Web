$(function () {
    //We instantiate our model
    var model = new DinnerModel();

    var hideDisplayView = new HideDisplayView();

    // And create the instance of our Views
    var startView = new StartView($("#startView"),model);
    var startViewControl = new StartViewControl(startView, model, hideDisplayView);
    var dishInfoView = new DishInfoView($("#siderbarView"), model);
    var dishInfoViewControl = new DishInfoViewControl(dishInfoView, model, hideDisplayView);
    var dishDisplayView = new DishDisplayView($("#dishsearchView"), model);
    var dishDisplayViewControl = new DishDisplayViewControl(dishDisplayView, model, hideDisplayView);
    var dishFullInfoView = new DishFullInfoView($("#dishDetails"), model);
    var dishFullInfoViewControl = new DishFullInfoViewControl(dishFullInfoView, model,hideDisplayView);
    var finalNavBarView = new FinalNavBarView($("#finalTitleView"), model);
    var finalNavBarViewControl = new FinalNavBarViewControl(finalNavBarView, model,hideDisplayView);
    var finalDishView = new FinalDishView($("#finalDinnerView"), model);
    var finalDishViewControl = new FinalDishViewControl(finalDishView, model,hideDisplayView);
    var fullRecipeView = new FullRecipeView($("#displayRecipeView"), model);
    /**
     * IMPORTANT: app.js is the only place where you are allowed to
     * use the $('someSelector') to search for elements in the whole HTML.
     * In other places you should limit the search only to the children
     * of the specific view you're working with (see exampleView.js).
     */
});

/******************Grt data from server************************
****************************Get data from server**************/
  $(document).on({
        ajaxStart: function() { displaySpecificView("#loader") },
        ajaxComplete: function() { hideSpecificView("#loader"); }
    });

/**************************************************************
**************************************************************/

var HideDisplayView = function () {

    this.showDishView = function () {
        hideSpecificView("#searchForDish");
        hideSpecificView("#dishDisplayView");
        displaySpecificView("#dishDetails");
    }

    this.startDispView = function () {
        hideSpecificView("#startView");
        displaySpecificView("#dishsearchView");
        displaySpecificView("#navbar")
        displaySpecificView("#siderbarView");
        displaySpecificView("#searchForDish");
        displaySpecificView("#dishDisplayView");
    }

    this.addDishToMenuView = function () {
        hideSpecificView("#dishDetails");
        displaySpecificView("#searchForDish");
        displaySpecificView("#dishDisplayView");
    }

    this.backButtonDishInfoView = function () {
        hideSpecificView("#dishDetails");
        displaySpecificView("#searchForDish");
        displaySpecificView("#dishDisplayView");
    }

    this.confDinnerSideButtView = function () {
        hideSpecificView("#searchForDish");
        hideSpecificView("#siderbarView");
        hideSpecificView("#dishDisplayView");
        hideSpecificView("#dishDetails");
        displaySpecificView("#finalTitleView");
        displaySpecificView("#finalDinnerView");
    }

    this.printFullRecipeButtView = function () {
        hideSpecificView("#finalDinnerView");
        displaySpecificView("#displayRecipeView");
    }

    this.goBackEditView = function () {
        hideSpecificView("#finalTitleView");
        hideSpecificView("#finalDinnerView");
        hideSpecificView("#displayRecipeView");
        displaySpecificView("#searchForDish");
        displaySpecificView("#siderbarView");
        displaySpecificView("#dishDisplayView");
    }

// This function shows (display) a  View.
    function displaySpecificView(view) {
        $(view).css('display', 'block');
    }

// This function hides a View.
    function hideSpecificView(view) {
        $(view).css('display', 'none');
    }
}


