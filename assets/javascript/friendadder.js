

// var firebaseConfig = {
//     apiKey: "AIzaSyBR-DiM3lu__FagCmgWqDl9EqweH_40G84",
//     authDomain: "projonefriendlist.firebaseapp.com",
//     databaseURL: "https://projonefriendlist.firebaseio.com",
//     projectId: "projonefriendlist",
//     storageBucket: "",
//     messagingSenderId: "96840335433",
//     appId: "1:96840335433:web:d77523affcdc46e5"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

$(".frdAdder").on('click', function (f) {
    f.preventDefault()

    $('.trailrecord').hide()
    $('.friendo').show()

    //gather form input data/////////////////
    Fname = $('#friendName').val().trim()     //name
    Fphone = $('#phoneNumber').val().trim() //phone number
    Ftrail = $('#trailName').val().trim()  //trail name

    console.log(Fname) //name
    console.log(Fphone) //number
    console.log(Ftrail) // trail




    //empty input after click////////////////

    // $('.form-control').val('');

    firebase.ref().push({

        Fname: Fname,
        Fphone: Fphone,
        Ftrail: Ftrail

    })

    //empty input after click////////////////

    $('.form-control').val('');

})


//lister for each child added/////////////////////////
firebase.ref().on('child_added', function (snapshot) {

    var Fname = snapshot.val().Fname
    var Fphone = snapshot.val().Fphone
    var Ftrail = snapshot.val().Ftrail


    var rowdos = $('<tr>')
    rowdos.addClass('text-center')

    
rowdos.append(

    $('<td>').text(Fname).addClass('text-white bg-secondary'),
    $('<td>').text(Fphone).addClass('text-white bg-secondary'),
    $('<td>').text(Ftrail).addClass('text-white bg-secondary'),
    $('<td>').text('').addClass('text-white bg-secondary'),
    // $('<td>').text('--'),


    // $('<td>').html('<button class="bg-success sharebtn text-white">Share</button>')


)

$('.tableTwo').append(rowdos)
    

})








///append data/////////////////




// $('.sharebtn').on('click', function(a) {
//     a.preventDefault()

// // console.log('Beta Mode: Korista does not have access to your friends list yet. Try again later!')
// // alert('Beta Mode: Korista does not have access to your friends list yet. Try again later!')

// })







