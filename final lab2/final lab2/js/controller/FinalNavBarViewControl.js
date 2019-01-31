var FinalNavBarViewControl = function (view, model,hideDispView) {

	//press goback button to go the edit page 
    view.goBackEditButton.click(function () {
        hideDispView.goBackEditView();
    });
}