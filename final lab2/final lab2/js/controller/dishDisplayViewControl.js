var DishDisplayViewControl = function (view, model, hideDispView) {
//filter
    view.dishfilterSelector.change(function () {
        var filter = $(this).find("option:selected").text();
        model.setCurrentfilter(filter);
    })

//press search button to view the details
    view.searchForDishButton.click(function () {
        var dish = document.getElementById("searchForDishes").value.toLowerCase();
        model.setSearchDish(dish);
    });
//each picture represent a button that can guide you to the detail infomation of each
        view.showDishButton.click(function (e) {
        var dishID = $(e.target).parents('div').attr('value');
        model.setClickedDishID(dishID);
        hideDispView.showDishView();
    });
}