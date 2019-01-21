'use strict'

const config = require('../config.js')
const store = require('../store.js')

const addLocomotive = function (data) {
  return $.ajax({
    url: config.apiUrl + '/locomotives',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data: data
  })
}

const getAllLocomotives = function (data) {
  return $.ajax({
    url: config.apiUrl + '/locomotives',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
    data: data
  })
}

const updateLocomotive = function (data) {
  const locomotiveId = data.locomotive.id
  return $.ajax({
    url: config.apiUrl + `/locomotives/${locomotiveId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: data
  })
}

const deleteLocomotive = function (data) {
  const locomotiveId = data.locomotive.id
  return $.ajax({
    url: config.apiUrl + `/locomotives/${locomotiveId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE',
    data: data
  })
}

module.exports = {
  addLocomotive,
  getAllLocomotives,
  updateLocomotive,
  deleteLocomotive
}
