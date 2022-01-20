function Contact(name, email, telephone) {
    this.name = name;
    this.email = email;
    this.tel = telephone;

  }
  
  Contact.prototype.details = function() {
    return this.name+""+this.email+""+this.tel;
  }
  
function Address(county, city, estate, house) {
    this.county = county;
    this.city = city;
    this.estate = estate;
    this.house = house;

  }
  
  Address.prototype.delivery = function() {
    return this.county+""+this.city+""+this.estate+""+this.house;
  } 


$(document).ready(function () {

    $("form#details").submit(function(event) {
    event.preventDefault(); 

    var inputtedName = $("input#fname").val();
    var inputtedEmail = $("input#email").val();
    var inputtedNumber = $("input#number").val();

    var Customer = new Contact(inputtedName, inputtedEmail, inputtedNumber);

    alert(Customer.details());

    var count = $("input#county").val();
    var city = $("input#city").val();
    var estate = $("input#estate").val();
    var house = $("input#house").val();
    
    var loc = new Address(count, city, estate, house);
    
    alert(loc.delivery());

      });


    $('#cancel').click(function () {
        location.reload();
    });
    $('#abort').click(function () {
        location.reload();
    });


    $('#deliver').click(function (){
        $("#detail").toggle("slow");
        $("#location").toggle("slow");


        
    });
























});