$(document).ready(function () {
  $('#bookingForm').on('submit', function (e) {
    e.preventDefault();
    const vehicle = $('#vehicle').val();
    const location = $('#location').val();
    const time = $('#time').val();

    alert(`Slot booked!\nVehicle: ${vehicle}\nLocation: ${location}\nTime: ${time}`);
    $(this).trigger('reset');
  });
});
