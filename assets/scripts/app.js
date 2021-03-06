'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('./user/events')
const locomotiveEvents = require('./locomotive/events')

$(() => {
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#sign-out-button').on('click', userEvents.onSignOut)
  $('#create-locomotive-form').on('submit', locomotiveEvents.onAddLocomotive)
  $('#update-locomotive-form').on('submit', locomotiveEvents.onUpdateLocomotive)
  $('#delete-locomotive-form').on('submit', locomotiveEvents.onDeleteLocomotive)
  $('#locomotives-index-button').on('click', locomotiveEvents.onGetAllLocomotives)
})
