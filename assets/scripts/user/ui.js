'use strict'

const store = require('../store.js')

const signUpSuccess = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Sign up successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#display-message').removeClass('hidden')
  $('#display-trains').removeClass('hidden')
  $('#display-message').html('Sign in successful')
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-in-form').addClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#create-div').removeClass('hidden')
  $('#read-div').removeClass('hidden')
  $('#update-div').removeClass('hidden')
  $('#delete-div').removeClass('hidden')
}

const signInFailure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Password changed successfully')
  $('#display-mssage').css('color', 'green')
  $('#change-password-form').trigger('reset')
  $('#create-locomotive-form').trigger('reset')
  $('#update-locomotive-form').trigger('reset')
  $('#delete-locomotive-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
  $('#create-locomotive-form').trigger('reset')
  $('#update-locomotive-form').trigger('reset')
  $('#delete-locomotive-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#display-message').removeClass('hidden')
  $('#trains-empty-message').addClass('hidden')
  $('#display-trains').addClass('hidden')
  $('#display-message').html('Sign out successful')
  $('#display-message').css('color', 'green')
  $('#sign-out-button').addClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#create-div').addClass('hidden')
  $('#read-div').addClass('hidden')
  $('#update-div').addClass('hidden')
  $('#delete-div').addClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
}

const signOutFailure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
  $('#create-locomotive-form').trigger('reset')
  $('#update-locomotive-form').trigger('reset')
  $('#delete-locomotive-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
