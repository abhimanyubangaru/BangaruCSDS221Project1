// Calculate number of days between checkin and checkout dates and display in days textbox
function updateDays() {
    var checkinDate = moment($('#checkindate').val());
    var checkoutDate = moment($('#checkoutdate').val());
    var days = checkoutDate.diff(checkinDate, 'days');
    if(!isNaN(days)){
      $('#days').val(days);
    }
  }
  
  
  // Calculate total cost based on number of days and number of adults and display in cost textbox
  function updateCost() {
    var days = $('#days').val();
    var adults = $('#adults').val();
    if(days === ''){
        return; 
    }
    var cost = days * adults * 150; // Cost per night is 150, change this as needed
    if(cost !== NaN){
      $('#cost').val(cost);
    } 
  }
  


$(document).ready(function() {
    //show clear toaster using jquery
  $('#resetBtn').click(function() {
    $('form')[0].reset();
        $('#username').parent().removeClass('has-error');
        $('#firstName').parent().removeClass('has-error')
        $('#lastName').parent().removeClass('has-error');
        $('#phonenumber').parent().removeClass('has-error');
        $('#faxnumber').parent().removeClass('has-error');
        $('#email').parent().removeClass('has-error');
    toastr.info('Fields were successfully cleared!');
  });
  //on update of check in date
  $('#checkindate').change(function() {
    updateDays();
    updateCost();
  });
  $('#adults').change(function() {
    updateCost();
  });
  //on update of check out date
  $('#checkoutdate').change(function() {
    updateDays();
    updateCost();
  });
});

//cost validation: MUST BE NON NEGATIVE NUMBER
function costValidation(){
	isValid = true; 
   if ($('#cost').val() === '' || $('#cost').val() == 'NaN') {
    toastr.error('Cost was not calculated');
    isValid = false;
  } 
	return isValid;
}

//value validation: MUST BE NON NEGATIVE NUMBER
function valueValidation(){
	isValid = true; 
   if ($('#cost').val() < 0) {
    toastr.error('Cost is negative');
    isValid = false;
  } else {
  }
	return isValid;
}

//the below code is for validation of submit button 
function validateForm() {
  var isValid = true;

  // Check if each field is empty
  if ($('#username').val() === '') {
    $('#username').parent().addClass('has-error');
    toastr.error('Username field is missing.');
    isValid = false;
  } else {
    $('#username').parent().removeClass('has-error');
  }

  if ($('#firstName').val() === '') {
    $('#firstName').parent().addClass('has-error');
    toastr.error('First Name field is missing.');
    isValid = false;
  } else {
    $('#firstName').parent().removeClass('has-error')
  }

  if ($('#lastName').val() === '') {
    $('#lastName').parent().addClass('has-error');
    toastr.error('Last Name field is missing.');
    isValid = false;
  } else {
    $('#lastName').parent().removeClass('has-error');
  }

  if ($('#phonenumber').val() === '') {
    $('#phonenumber').parent().addClass('has-error');
    toastr.error('Phone field is missing.');
    isValid = false;
  } else {
    $('#phonenumber').parent().removeClass('has-error');
  }

  if ($('#faxnumber').val() === '') {
    $('#faxnumber').parent().addClass('has-error');
    toastr.error('Fax field is missing.');
    isValid = false;
  } else {
    $('#faxnumber').parent().removeClass('has-error');
  }

  if ($('#email').val() === '') {
    $('#email').parent().addClass('has-error');
    toastr.error('Email field is missing.');
    isValid = false;
  } else {
    $('#email').parent().removeClass('has-error');
  }

  return isValid;
}

// Handle form submission
$('#submitBtn').click(function(event) {
  if (validateForm() & valueValidation() & costValidation()) {
    toastr.success("Form successfully submitted"); 
  }
});