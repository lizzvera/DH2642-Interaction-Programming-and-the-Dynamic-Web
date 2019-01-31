var FinalDishViewControl = function (view, model, hideDispView) {

	//press print button to see the whole recipe
    view.printFullRecipeButton.click(function () {
        hideDispView.printFullRecipeButtView();
    });
}