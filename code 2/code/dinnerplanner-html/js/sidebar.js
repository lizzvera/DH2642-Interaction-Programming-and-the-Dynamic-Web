var SideBarView=function (container,model) {
  var guestNumInput=container.find("#guestNum");
 // guestNumInput.html(model.getNumberOfGuests());
  guestNumInput.prop("value",model.getNumberOfGuests());
  var disheslist = container.find("#dishItems");
  model.selectedDishes.forEach((dish)=>{
  	var div=$("<div/>");
  	console.log(dish.name);
  	div.text(dish.name);
  	disheslist.append(div);
  });
}

var SideBarView1=function (container,model) {
  var guestNumInput=container.find("#guestNum1");
 // guestNumInput.html(model.getNumberOfGuests());
  guestNumInput.prop("value",model.getNumberOfGuests());
  var disheslist = container.find("#dishItems1");
  model.selectedDishes.forEach((dish)=>{
  	var div=$("<div/>");
  	console.log(dish.name);
  	div.text(dish.name);
  	disheslist.append(div);
  });
}

