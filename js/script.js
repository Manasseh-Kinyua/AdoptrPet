$(document).ready(function () {

    $('#cancel').click(function() {
        location.reload();
      });


    $("#yuki").one('click', function() {
        $("#animalDetails").modal('show');
        $("#pic").append('<img src="./assets/images/yuki.jpg" width="100%" alt="">');
        $("#name").append('YUKI');
        $("#breed").append('<p class=title>BREED:</p>'+'<hr class=line>'+'<p class=details> Kenyan Shepherd </p>');
        $("#gender").append('<p class=title>GENDER:</p>'+'<p class=details> Female </p>');
        $("#age").append('<p class=title>AGE:</p>'+'<p class=details> 24 Months </p>');
        $("#vaccination").append('<p class=title>VACCINATION:</p>'+'<p class=details> Fully Vaccinated </p>');
        $("#description").append('<P class=title>DESCRIPTION:</p>'+'<hr class=line>'+'<p class=details>2 year old female, playful; fully vaccinated, spayed and is ready for a new home.')

    })

    $("#jojo").one('click', function () {
        $("#animalDetails").modal('show');
        $("#pic").append('<img src="./assets/images/jojo.jpg" width="100%" alt="">');
        $("#name").append('JOJO');
        $("#breed").append('<p class=title>BREED:</p>'+'<hr class=line>'+'<p class=details> Persian Cat</p>');
        $("#gender").append('<p class=title>GENDER:</p>'+'<p class=details> Female </p>');
        $("#age").append('<p class=title>AGE:</p>'+'<p class=details> 24 Months </p>');
        $("#vaccination").append('<p class=title>VACCINATION:</p>'+'<p class=details> Pending Vaccination </p>');
        $("#description").append('<P class=title>DESCRIPTION:</p>'+'<hr class=line>'+'<p class=details>A very shy gorgeous cat that loves to play and nap all day, she will also get rid of your unwanted guests')

    })

    $("#apollo").one('click', function () {
        $("#animalDetails").modal('show');
        $("#pic").append('<img src="./assets/images/apollo.jpg" width="100%" alt="">');
        $("#name").append('APOLLO');
        $("#breed").append('<p class=title>BREED:</p>'+'<hr class=line>'+'<p class=details> Street Dog</p>');
        $("#gender").append('<p class=title>GENDER:</p>'+'<p class=details> Male </p>');
        $("#age").append('<p class=title>AGE:</p>'+'<p class=details> 3 Months </p>');
        $("#vaccination").append('<p class=title>VACCINATION:</p>'+'<p class=details> Pending Vaccination </p>');
        $("#description").append('<P class=title>DESCRIPTION:</p>'+'<hr class=line>'+'<p class=details>Playful. You will need to bring him back for his final round of shots in two weeks')

    })

    $("#kiwi").one('click', function () {
        $("#animalDetails").modal('show');
        $("#pic").append('<img src="./assets/images/kiwi.jpg" width="100%" alt="">');
        $("#name").append('KIWI');
        $("#breed").append('<p class=title>BREED:</p>'+'<hr class=line>'+'<p class=details> Domestic Short Haired Cat</p>');
        $("#gender").append('<p class=title>GENDER:</p>'+'<p class=details> Male </p>');
        $("#age").append('<p class=title>AGE:</p>'+'<p class=details> 11 Months </p>');
        $("#vaccination").append('<p class=title>VACCINATION:</p>'+'<p class=details> Vaccinated </p>');
        $("#description").append('<P class=title>DESCRIPTION:</p>'+'<hr class=line>'+'<p class=details>A very shy gorgeous cat that loves to play and nap all day, she will also get rid of your unwanted guests')

    })

    $("#nala").one('click', function () {
        $("#animalDetails").modal('show');
        $("#pic").append('<img src="./assets/images/nala.jpg" width="100%" alt="">');
        $("#name").append('NALA');
        $("#breed").append('<p class=title>BREED:</p>'+'<hr class=line>'+'<p class=details> Domestic Short Haired Cat</p>');
        $("#gender").append('<p class=title>GENDER:</p>'+'<p class=details> Female </p>');
        $("#age").append('<p class=title>AGE:</p>'+'<p class=details> 16 Months </p>');
        $("#vaccination").append('<p class=title>VACCINATION:</p>'+'<p class=details> Pending Vaccination </p>');
        $("#description").append('<P class=title>DESCRIPTION:</p>'+'<hr class=line>'+'<p class=details>A very shy gorgeous cat that loves to play and nap all day, she will also get rid of your unwanted guests')

    })

    $("#atlas").one('click', function () {
        $("#animalDetails").modal('show');
        $("#pic").append('<img src="./assets/images/atlas.jpg" width="100%" alt="">');
        $("#name").append('ATLAS');
        $("#breed").append('<p class=title>BREED:</p>'+'<hr class=line>'+'<p class=details> Vulnerable Native Breed</p>');
        $("#gender").append('<p class=title>GENDER:</p>'+'<p class=details> Male </p>');
        $("#age").append('<p class=title>AGE:</p>'+'<p class=details> 18 Months </p>');
        $("#vaccination").append('<p class=title>VACCINATION:</p>'+'<p class=details> Vaccinated </p>');
        $("#description").append('<P class=title>DESCRIPTION:</p>'+'<hr class=line>'+'<p class=details>A very shy gorgeous cat that loves to play and nap all day, she will also get rid of your unwanted guests')

    })






});