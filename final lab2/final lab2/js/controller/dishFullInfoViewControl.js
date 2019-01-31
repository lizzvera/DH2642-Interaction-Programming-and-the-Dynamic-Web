var DishFullInfoViewControl = function (view, model, hideDispView) {
	
// Add button-添加图片到菜单里并且刷新数组
    view.addDishToMenuButton.click(function () {
        model.addDishToMenu(model.getClickedDishID());
        hideDispView.addDishToMenuView();
    });
//back buttom in dish detail view
    view.backDishInfoButton.click(function () {
        hideDispView.backButtonDishInfoView();
    });
}
