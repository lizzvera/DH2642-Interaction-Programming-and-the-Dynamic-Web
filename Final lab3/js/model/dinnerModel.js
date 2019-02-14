//DinnerModel Object constructor
var DinnerModel = function () {

//Add Observer
    var observers = [];
    this.addObserver = function (observer) {
        observers.push(observer);
    }
    var notifyObservers = function (obj) {
        for (var i in observers) {
            observers[i].update(obj)
        }
    }

/**************************************
          notify events
**************************************/
    const notifyEvents = {
    Guest: "number_Of_Guest_Changed",
    Dish_Category: "dish_category_changed",
    Search: "search_changed",
}

    // Global Variables
    var numbOfGuests = 1;
    var menu = [];
    var categories = [ "all", "main course", "side dish", "dessert", "appetizer", "salad",
        "bread", "breakfast", "soup", "beverage", "sauce", "drink"];
    var currentCategory = categories[0];
    var searchDish = "";
    var clickedDishID = 0;
    var currentDishPrice = 0;

    this.setNumberOfGuests = function (num) {
        numbOfGuests = num;
        notifyObservers(notifyEvents.Guest);
    }


    this.getNumberOfGuests = function () {
        return numbOfGuests;
    }

    //Returns all the dishes on the menu.
    this.getFullMenu = function () {
        return menu;
    }

    //Returns all ingredients for all the dishes on the menu.
    this.getAllIngredients = function (id, getDishIngredient) {
        $.ajax({
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/information',
            dataType:'JSON',
            type:'GET',
            headers: {
                'X-Mashape-Key': '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767'
            },
            success: function (data) {
                getDishIngredient(data);
            },
            error: function (data) {
                alert("Bad internet connection to get this dish details, please try again later.");
                console.log(data);
            }
        })
    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    this.getTotalMenuPrice = function () {
        var sum = 0;
        for (var i in menu) {
            sum += menu[i].price;
        }
        return sum * numbOfGuests;
    }

    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    this.addDishToMenu = function (obj) {
       
        menu.push(obj);
        notifyObservers(notifyEvents.Menu);
    }
   
    //Remove is useless in lab 3 

    //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
    //you can use the filter argument to filter out the dish by name or ingredient (use for search)
    //if you don't pass any filter all the dishes will be returned
    this.getAllDishes = function (type, filter, getDish) {
        $.ajax({
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search',
            dataType: 'JSON',
            cache: false,
            type: 'GET',
            headers: {
                'X-Mashape-Key': '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767'
            },
            data: {
                query: filter,
                type: type,
                number: 36,
            },
            success: function (data) {
                console.log(data);
                getDish(data);
            },
            error: function (data) {
                alert("Bad internet connection to get this dish overview, please try again later.");
                console.log(data);
            }
        })
    }

    //Implemented Extra Functions

    //Returns all the categories that exist
    this.getCategories = function () {
        return categories;
    }

    //Returns the current category
    this.currentCategory = function () {
        return currentCategory;
    }

    //Change the current category
    this.setCurrentCategory = function (category) {
        currentCategory = category;
        notifyObservers(notifyEvents.Dish_Category);
    }

    //Returns users search string for dish
    this.getSearchDish = function () {
        return searchDish;
    }

    //Set users search string for dish
    this.setSearchDish = function (search) {
        searchDish = search;
        notifyObservers(notifyEvents.Search);
    }

    //Return current Dish ID that have been clicked on by the user
    this.getClickedDishID = function () {
        return clickedDishID;
    }

    //Set current Dish ID that have been clicked on by the user
    this.setClickedDishID = function (dishID) {
        clickedDishID = dishID;
        notifyObservers(notifyEvents.Dish_Clicked);
    }

    this.setCurrentDishPrice = function (price) {
        currentDishPrice = price;
    }

    this.getCurrentDishPrice = function () {
        return currentDishPrice;
    }

    this.getDish = function () {
        this.setNumberOfGuests(1);
        notifyObservers(notifyEvents.Init);
    }
}

