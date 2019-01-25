'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAddLocomotive = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addLocomotive(data)
    .then(ui.addLocomotiveSuccess)
    .catch(ui.addLocomotiveFailure)
}

const onGetAllLocomotives = function (event) {
  event.preventDefault()
  api.getAllLocomotives()
    .then(ui.getAllLocomotivesSuccess)
    .catch(ui.getAllLocomotivesFailure)
}

const onClearLocomotives = function (event) {
  event.preventDefault()
  ui.clearLocomotives()
}

const onUpdateLocomotive = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateLocomotive(data)
    .then(ui.updateLocomotiveSuccess)
    .catch(ui.updateLocomotiveFailure)
}

const onDeleteLocomotive = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteLocomotive(data)
    .then(ui.deleteLocomotiveSuccess)
    .catch(ui.deleteLocomotiveFailure)
}

module.exports = {
  onAddLocomotive,
  onGetAllLocomotives,
  onUpdateLocomotive,
  onDeleteLocomotive,
  onClearLocomotives
}
