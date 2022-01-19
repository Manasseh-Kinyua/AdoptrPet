$(document).ready(function () {

    $('#cancel').click(function() {
        location.reload();
      });


    $("#yuki").one('click', function() {
        $("#animalDetails").modal('show');
        $("#pic").append('<img src="./assets/images/yuki.jpg" width="100%" alt="">');
        $("#name").append('YUKI');
        $("#breed").append('Kenyan Shepherd');
        $("#gender").append('Female');
        $("#age").append('2 Years');
        $("#vaccination").append('Fully Vaccinated');
        $("#description").append('<br/>' + '2 year old female, playful; fully vaccinated, spayed and is ready for a new home.')

    })

    $("#jojo").one('click', function () {
        $("#animalDetails").modal('show');
        $("#pic").append('<img src="./assets/images/jojo.jpg" width="100%" alt="">');
        $("#name").append('JOJO');
        $("#breed").append('Perusian Cat');
        $("#gender").append('Female');
        $("#age").append('8 months old');
        $("#vaccination").append('Pending Vaccination');
        $("#description").append('<br/>' + 'A very shy gorgeous cat that loves to play and nap all day, she will also get rid of your unwanted guests')

    })

    $("#apollo").one('click', function () {
        $("#animalDetails").modal('show');
        $("#pic").append('<img src="./assets/images/apollo.jpg" width="100%" alt="">');
        $("#name").append('APOLLO');
        $("#breed").append('Street Dog');
        $("#gender").append('Male');
        $("#age").append('3 months old');
        $("#vaccination").append('Pending Vaccination');
        $("#description").append('<br/>' + 'Playful. You will need to bring him back for his final round of shots in two weeks')

    })

    $("#kiwi").one('click', function () {
        $("#animalDetails").modal('show');
        $("#pic").append('<img src="./assets/images/kiwi.jpg" width="100%" alt="">');
        $("#name").append('KIWI');
        $("#breed").append('Domestic Short Haired Cat');
        $("#gender").append('Male');
        $("#age").append('11 months old');
        $("#vaccination").append('Vaccinated');
        $("#description").append('<br/>' + 'A very shy gorgeous cat that loves to play and nap all day, she will also get rid of your unwanted guests')

    })

    $("#nala").one('click', function () {
        $("#animalDetails").modal('show');
        $("#pic").append('<img src="./assets/images/nala.jpg" width="100%" alt="">');
        $("#name").append('NALA');
        $("#breed").append('Domestic Short Haired Cat');
        $("#gender").append('Female');
        $("#age").append('16 months old');
        $("#vaccination").append('Pending Vaccination');
        $("#description").append('<br/>' + 'A very shy gorgeous cat that loves to play and nap all day, she will also get rid of your unwanted guests')

    })

    $("#atlas").one('click', function () {
        $("#animalDetails").modal('show');
        $("#pic").append('<img src="./assets/images/atlas.jpg" width="100%" alt="">');
        $("#name").append('ATLAS');
        $("#breed").append('Vulnerable Native Breeds');
        $("#gender").append('Female');
        $("#age").append('18 months old');
        $("#vaccination").append('Vaccinated');
        $("#description").append('<br/>' + 'A very shy gorgeous cat that loves to play and nap all day, she will also get rid of your unwanted guests')

    })






});