var DishFullInfoViewControl = function (view, model, hideDispView) {

     // Add button
    view.addDishToMenuButton.click(function () {
        model.getAllIngredients(model.getClickedDishID(), function (dish) {
            var dishName = dish.title;
            var dishData = dish;
            var dishID = dish.id;
            var dishCategory = model.currentCategory();
            var dishPrice = (model.getCurrentDishPrice());
            model.addDishToMenu({name: dishName, id: dishID, category: dishCategory, price: dishPrice, data: dishData});
            hideDispView.addDishToMenuView();
        })
    });

   //back buttom in dish detail view
    view.backDishInfoButton.click(function () {
        hideDispView.backButtonDishInfoView();
    });
}
