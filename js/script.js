
function Contact(name, email, telephone) {
    this.name = name;
    this.email = email;
    this.tel = telephone;

  }
  
  Contact.prototype.details = function() {
    return this.name;
  }
  
function Address(county, city, estate, house) {
    this.county = county;
    this.city = city;
    this.estate = estate;
    this.house = house;

  }
  
  Address.prototype.delivery = function() {
    return this.county+", "+this.city+", "+this.estate+", "+this.house;
  } 


$(document).ready(function () {

    $("form#details").submit(function(event) {
    event.preventDefault(); 

    var inputtedName = $("input#fname").val();
    var inputtedEmail = $("input#email").val();
    var inputtedNumber = $("input#number").val();

    var Customer = new Contact(inputtedName, inputtedEmail, inputtedNumber);

    // alert(Customer.details());

    var count = $("input#county").val();
    var city = $("input#city").val();
    var estate = $("input#estate").val();
    var house = $("input#house").val();
    
    var loc = new Address(count, city, estate, house);
    
    // alert(loc.delivery());





    $('#sub').click(function() {
      $('#successful').modal('show')
  
      $('#jina').append(Customer.details());
      $('#ishi').append(loc.delivery());
 
    })
      
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

  
    
    
    
    
    $("#yuki").click(function () {
        $("#animalDetails").modal('show');
        $("#pic").append('<img src="../assets/images/yuki.jpg" width="100%" alt="">');
        $("#name").append('YUKI');
        $("#breed").append('<p class=title>BREED:</p>' + '<hr class=line>' + '<p class=details> Kenyan Shepherd </p>');
        $("#gender").append('<p class=title>GENDER:</p>' + '<p class=details> Female </p>');
        $("#age").append('<p class=title>AGE:</p>' + '<p class=details> 24 Months </p>');
        $("#vaccination").append('<p class=title>VACCINATION:</p>' + '<p class=details> Fully Vaccinated </p>');
        $("#description").append('<P class=title>DESCRIPTION:</p>' + '<hr class=line>' + '<p class=details>2 year old female, playful; fully vaccinated, spayed and is ready for a new home.')
        //$(".modal-footer").append('<button type="button" onclick="location.href =\'./details.html\'"   data-bs-dismiss="modal" class="btn btn-primary" id="yuuki">Yes Yes</button>');

            $("#confirm").click(function() {
                $("#petConfirm").modal('show');
                
                $("#pic1").append('<img src="../assets/images/yuki.jpg" width="100%" alt="">');
                $("#name1").append('<p class=details>YUKI</p>'+ '<hr class=line>');
                $("#breed1").append('<p class=details>Kenyan Shepherd</p>'+ '<hr class=line>');
                $("#gender1").append('<p class=details>Female</p>'+ '<hr class=line>');
                $("#age1").append('<p class=details>24 months</p>'+ '<hr class=line>');
                $("#vaccination1").append('<p class=details>Fully Vaccinated</p>'+ '<hr class=line>');

              
            })

    })



    // $("#yuuki").click(function() { 
    //     window.location.href = './details.html';
    // })


    $("#jojo").one('click', function () {
        $("#animalDetails").modal('show');
        $("#pic").append('<img src="../assets/images/jojo.jpg" width="100%" alt="">');
        $("#name").append('JOJO');
        $("#breed").append('<p class=title>BREED:</p>' + '<hr class=line>' + '<p class=details> Persian Cat</p>');
        $("#gender").append('<p class=title>GENDER:</p>' + '<p class=details> Female </p>');
        $("#age").append('<p class=title>AGE:</p>' + '<p class=details> 24 Months </p>');
        $("#vaccination").append('<p class=title>VACCINATION:</p>' + '<p class=details> Pending Vaccination </p>');
        $("#description").append('<P class=title>DESCRIPTION:</p>' + '<hr class=line>' + '<p class=details>A very shy gorgeous cat that loves to play and nap all day, she will also get rid of your unwanted guests')
       // $(".modal-footer").append('<button type="button" data-bs-dismiss="modal" class="btn btn-primary" id="jojo">Yes Yes</button>');
       
            $("#confirm").click(function() {
                $("#petConfirm").modal('show');
                $("#pic1").append('<img src="../assets/images/jojo.jpg" width="100%" alt="">');
                $("#name1").append('<p class=details>JOJO</p>'+ '<hr class=line>');
                $("#breed1").append('<p class=details>Persian Cat</p>'+ '<hr class=line>');
                $("#gender1").append('<p class=details>Female</p>'+ '<hr class=line>');
                $("#age1").append('<p class=details>24 months</p>'+ '<hr class=line>');
                $("#vaccination1").append('<p class=details>Pending Vaccination</p>'+ '<hr class=line>');

            })
    })

    $("#apollo").one('click', function () {
        $("#animalDetails").modal('show');
        $("#pic").append('<img src="../assets/images/apollo.jpg" width="100%" alt="">');
        $("#name").append('APOLLO');
        $("#breed").append('<p class=title>BREED:</p>' + '<hr class=line>' + '<p class=details> Street Dog</p>');
        $("#gender").append('<p class=title>GENDER:</p>' + '<p class=details> Male </p>');
        $("#age").append('<p class=title>AGE:</p>' + '<p class=details> 3 Months </p>');
        $("#vaccination").append('<p class=title>VACCINATION:</p>' + '<p class=details> Pending Vaccination </p>');
        $("#description").append('<P class=title>DESCRIPTION:</p>' + '<hr class=line>' + '<p class=details>Playful. You will need to bring him back for his final round of shots in two weeks')
        //$(".modal-footer").append('<button type="button" data-bs-dismiss="modal" class="btn btn-primary" id="apollo">Yes Yes</button>');
            
            $("#confirm").click(function() {
                $("#petConfirm").modal('show');
                $("#pic1").append('<img src="../assets/images/apollo.jpg" width="100%" alt="">');
                $("#name1").append('<p class=details>APOLLO</p>'+ '<hr class=line>');
                $("#breed1").append('<p class=details>Street Dog</p>'+ '<hr class=line>');
                $("#gender1").append('<p class=details>Male</p>'+ '<hr class=line>');
                $("#age1").append('<p class=details>3 months</p>'+ '<hr class=line>');
                $("#vaccination1").append('<p class=details>Pending Vaccination</p>'+ '<hr class=line>');

            })

    })

    $("#kiwi").one('click', function () {
        $("#animalDetails").modal('show');
        $("#pic").append('<img src="../assets/images/kiwi.jpg" width="100%" alt="">');
        $("#name").append('KIWI');
        $("#breed").append('<p class=title>BREED:</p>' + '<hr class=line>' + '<p class=details> Domestic Short Haired Cat</p>');
        $("#gender").append('<p class=title>GENDER:</p>' + '<p class=details> Male </p>');
        $("#age").append('<p class=title>AGE:</p>' + '<p class=details> 11 Months </p>');
        $("#vaccination").append('<p class=title>VACCINATION:</p>' + '<p class=details> Vaccinated </p>');
        $("#description").append('<P class=title>DESCRIPTION:</p>' + '<hr class=line>' + '<p class=details>A very shy gorgeous cat that loves to play and nap all day, she will also get rid of your unwanted guests')
        //$(".modal-footer").append('<button type="button" class="btn btn-primary" data-bs-dismiss="modal"  id="kiwi">Yes Yes</button>');

            $("#confirm").click(function() {
                $("#petConfirm").modal('show');
                $("#pic1").append('<img src="../assets/images/kiwi.jpg" width="100%" alt="">');
                $("#name1").append('<p class=details>KIWI</p>'+ '<hr class=line>');
                $("#breed1").append('<p class=details>Domestic Short Haired Cat</p>'+ '<hr class=line>');
                $("#gender1").append('<p class=details>Male</p>'+ '<hr class=line>');
                $("#age1").append('<p class=details>11 months</p>'+ '<hr class=line>');
                $("#vaccination1").append('<p class=details>Vaccinated</p>'+ '<hr class=line>');

            })

    })

    $("#nala").one('click', function () {
        $("#animalDetails").modal('show');
        $("#pic").append('<img src="../assets/images/nala.jpg" width="100%" alt="">');
        $("#name").append('NALA');
        $("#breed").append('<p class=title>BREED:</p>' + '<hr class=line>' + '<p class=details> Domestic Short Haired Cat</p>');
        $("#gender").append('<p class=title>GENDER:</p>' + '<p class=details> Female </p>');
        $("#age").append('<p class=title>AGE:</p>' + '<p class=details> 16 Months </p>');
        $("#vaccination").append('<p class=title>VACCINATION:</p>' + '<p class=details> Pending Vaccination </p>');
        $("#description").append('<P class=title>DESCRIPTION:</p>' + '<hr class=line>' + '<p class=details>A very shy gorgeous cat that loves to play and nap all day, she will also get rid of your unwanted guests')
        //$(".modal-footer").append('<button type="button" data-bs-dismiss="modal" class="btn btn-primary" id="nala">Yes Yes</button>');

            $("#confirm").click(function() {
                $("#petConfirm").modal('show');
                $("#pic1").append('<img src="../assets/images/nala.jpg" width="100%" alt="">');
                $("#name1").append('<p class=details>NALA</p>'+ '<hr class=line>');
                $("#breed1").append('<p class=details>Domestic Short Haired Cat</p>'+ '<hr class=line>');
                $("#gender1").append('<p class=details>Female</p>'+ '<hr class=line>');
                $("#age1").append('<p class=details>16 months</p>'+ '<hr class=line>');
                $("#vaccination1").append('<p class=details>Pending Vaccination</p>'+ '<hr class=line>');
   
            })
    })
    
        
            
    
    $("#atlas").click(function (atlas) {
        $("#animalDetails").modal('show');
        $("#pic").append('<img src="../assets/images/atlas.jpg" width="100%" alt="">');
        $("#name").append('ATLAS');
        $("#breed").append('<p class=title>BREED:</p>' + '<hr class=line>' + '<p class=details> Vulnerable Native Breed</p>');
        $("#gender").append('<p class=title>GENDER:</p>' + '<p class=details> Male </p>');
        $("#age").append('<p class=title>AGE:</p>' + '<p class=details> 18 Months </p>');
        $("#vaccination").append('<p class=title>VACCINATION:</p>' + '<p class=details> Vaccinated </p>');
        $("#description").append('<P class=title>DESCRIPTION:</p>' + '<hr class=line>' + '<p class=details>A very shy gorgeous cat that loves to play and nap all day, she will also get rid of your unwanted guests')
        //$(".modal-footer").append('<button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="atlas">Yeeees</button>');
        
            $("#confirm").click(function() {
                $("#petConfirm").modal('show');
                $("#pic1").append('<img src="../assets/images/atlas.jpg" width="100%" alt="">');
                $("#name1").append('<p class=details>ATLAS</p>'+ '<hr class=line>');
                $("#breed1").append('<p class=details>Vulnerable Native Breed</p>'+ '<hr class=line>');
                $("#gender1").append('<p class=details>Male</p>'+ '<hr class=line>');
                $("#age1").append('<p class=details>18 Months</p>'+ '<hr class=line>');
                $("#vaccination1").append('<p class=details>Vaccinated</p>'+ '<hr class=line>');
                
                
            })
    
    
    })
















});
