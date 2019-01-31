var DishDisplayView = function (container, model) {

    model.addObserver(this);

    this.showDishButton = container.find("#showDishes");
    this.searchForDishButton = container.find('#searchForDishButt')
    this.dishfilterSelector = container.find("#dishfilter");
    this.filters = model.getfilters();

    for (var filter in this.filters) {
            this.dishfilterSelector.append($('<option>' + this.filters[filter] + '</option>'));
    }

    this.update = function () {
        var dishes = model.getAllDishes(model.currentfilter(), model.getSearchDish());
        var displayDish = "";
        for (var i = 0; i < dishes.length; i++) {
            displayDish +=
                "<div style=\"width:160px;display:inline-table\"><div class='panel panel-default allfilterDishes " +
                "border' value='" + dishes[i].id + "'><img class='img-responsive' src='images/" +
                dishes[i].image + "'/>\<div class='panel-footer allfilterDishesTitle' " +
                "style=\"text-align:center;\">" + dishes[i].name + "</div></div></div>";
        }
        container.find("#showDishes").html(displayDish);
    }
}