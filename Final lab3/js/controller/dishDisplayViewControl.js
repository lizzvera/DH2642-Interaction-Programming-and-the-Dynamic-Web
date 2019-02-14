var DishDisplayViewControl = function (view, model, hideDispView) {

//each picture represent a button that can guide you to the detail infomation of each
    view.showDishButton.click(function (e) {
        var dishID = $(e.target).parents('div').attr('value');
        console.log(dishID)
        model.setClickedDishID(dishID);
        hideDispView.showDishView();
    });


//filter
    view.dishCategorySelector.change(function () {
        var dish = view.dishSearchString.val().toLowerCase();
        model.setSearchDish(dish);
        var category = $(this).find("option:selected").text();
        model.setCurrentCategory(category);
    })

//press search button to view the details
    view.searchForDishButton.click(function () {
        var dish = view.dishSearchString.val().toLowerCase();
        model.setSearchDish(dish);
        view.dishSearchString.val("");
    });
}