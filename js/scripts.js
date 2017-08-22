// //busines logic
function Ticket(run, time, age) {
  // this.movie = movie;
  this.run = run;
  this.time = time;
  this.age = age;
  this.price = "";
}
Ticket.prototype.ticketPrice = function() {

  if ()
    return this.run - this.time - this.age;
}
//user interface logic
$(document).ready(function() {
  $("form#movies").submit(function(event) {
    event.preventDefault();
    var run = parseInt($("#run").val());
    var time = parseInt($("#time").val());
    var age = parseInt($("#age").val());
    var newTicket = new Ticket(run, time, age);
    $("#show-price").show();
    $("#price").text(newTicket.ticketPrice());
  });
});
