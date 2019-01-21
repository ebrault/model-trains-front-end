'use strict'

const addLocomotiveSuccess = function (data) {
  $('#display-trains').html('')
  $('#trains-empty-message').addClass('hidden')
  $('#display-message').html('Add successful!')
  $('#display-message').css('color', 'green')
  const locomotive = data.locomotive
  const locomotiveHtml = (`
      <p>Builder: ${locomotive.builder}</p>
      <p>Year: ${locomotive.year}</p>
      <h4>ID: ${locomotive.id}</h4>
      </ br>
    `)
  $('#display-trains').html(locomotiveHtml)
  $('#display-trains').css('color', 'green')
  $('#add-locomotive-form').trigger('reset')
  $('#update-locomotive-form').trigger('reset')
  $('#delete-locomotive-form').trigger('reset')
}

const addLocomotiveFailure = function () {
  $('#display-trains').html('')
  $('#trains-empty-message').addClass('hidden')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#add-locomotive-form').trigger('reset')
  $('#update-locomotive-form').trigger('reset')
  $('delete-locomotive-form').trigger('reset')
}

const getAllLocomotivesSuccess = function (data) {
  if (data.locomotives.length === 0) {
    $('#display-message').html('')
    $('#trains-empty-message').removeClass('hidden')
  } else {
    $('#display-message').html('')
    $('#display-trains').html('')
    data.locomotives.forEach(function (locomotive) {
      const locomotiveHtml = (`
        <p>Builder: ${locomotive.builder}</p>
        <p>Year: ${locomotive.year}</p>
        <h4>ID: ${locomotive.id}</h4>
        </ br>
      `)
      $('#display-trains').append(locomotiveHtml)
      $('#display-trains').css('color', 'green')
    })
  }
}

const getAllLocomotivesFailure = function () {
  $('#display-trains').html('')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#add-locomotive-form').trigger('reset')
  $('#update-locomotive-form').trigger('reset')
  $('#delete-locomotive-form').trigger('reset')
}

const updateLocomotiveSuccess = function (data) {
  $('#trains-empty-message').addClass('hidden')
  $('#display-message').html('')
  $('#display-message').html('Update Successful!')
  $('#display-message').css('color', 'green')
  $('#display-trains').html('')
  $('#add-locomotive-form').trigger('reset')
  $('#update-locomotive-form').trigger('reset')
  $('#delete-locomotive-form').trigger('reset')
}

const updateLocomotiveFailure = function () {
  $('#display-trains').html('')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#add-locomotive-form').trigger('reset')
  $('#update-locomotive-form').trigger('reset')
  $('#delete-locomotive-form').trigger('reset')
}

const deleteLocomotiveSuccess = function () {
  $('#trains-empty-message').addClass('hidden')
  $('#display-message').html('')
  $('#display-message').html('Deletion Successful!')
  $('#display-message').css('color', 'green')
  $('#display-trains').html('')
  $('#add-locomotive-form').trigger('reset')
  $('#update-locomotive-form').trigger('reset')
  $('#delete-locomotive-form').trigger('reset')
}

const deleteLocomotiveFailure = function () {
  $('#display-trains').html('')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#add-locomotive-form').trigger('reset')
  $('#update-locomotive-form').trigger('reset')
  $('#delete-locomotive-form').trigger('reset')
}

module.exports = {
  addLocomotiveSuccess,
  addLocomotiveFailure,
  getAllLocomotivesSuccess,
  getAllLocomotivesFailure,
  updateLocomotiveSuccess,
  updateLocomotiveFailure,
  deleteLocomotiveSuccess,
  deleteLocomotiveFailure
}
