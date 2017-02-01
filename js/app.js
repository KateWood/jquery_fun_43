$( document ).ready(function(){

  var foods = ['burgers', 'fries', 'pasta', 'shrimp', 'sushi']

  // for (var i = 0; i < foods.length; i++) {
  //   $('#foods').append('<li>' + foods[i] + '</li>')
  // }

  foods.forEach(function(food){
    $('#foods').append('<li>' + food + '</li>')
  })

  $('#drinks').append('<li>Mountain Dew</li><li>Sprite</li><li>Dr. Pepper</li>')

  $('#addFood').on('click', function(){
    var newFood = $('#foodInput').val()
    if(newFood != '') {
      $('#foods').append('<li>' + newFood + '</li>')
      // $('<li />', {html: newFood}).appendTo('ul#foods')
      $('#foodInput').val('')
    }
  })

  $('#addDrink').on('click', function(){
    var newDrink = $('#drinkInput').val()
    if(newDrink != '') {
      $('#drinks').append('<li>' + newDrink + '</li>')
      $('#drinkInput').val('')
    }
  })

  $('#drinkInput').keydown(function(e){
    if(e.keyCode === 13){
      var newDrink = $('#drinkInput').val()
      if(newDrink !== '') {
        $('#drinks').append('<li class="purpleText">' + newDrink + '</li>')
        $('#drinkInput').val('')
        $('#drinkInput').removeClass('purple')
      }
    } else {
      $('#drinkInput').addClass('purple')
    }
  })

})






//
