import axios from 'axios'
import store from '../services/store'
// // Import Logout action
import { logout } from '../services/auth/authActions'

export const wrapRequest = func => {
  return async (...args) => {
    const res = await func(...args)
    if (
      res &&
      res.status &&
      res.status !== 200 &&
      res.status !== 201 &&
      res.status !== 204
    ) {
      throw res
    } else {
      return res.data
    }
  }
}

export const xapi = () => {
  let token = null
  const tokenType = 'Bearer'

  token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')).token : null

  let headers = {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
    charset: 'UTF-8'
  }

  if (token) {
    headers = {
      ...headers,
      Authorization: `${tokenType} ${token}`
    }
  }

  const xapi = axios.create({
    baseURL: 'https://waxpeer.com/api',
    headers: headers
  })

  // Check expired token
  xapi.interceptors.response.use(undefined, function (err) {
    if (err.response && err.response.status === 401) {
      store.dispatch(logout())
    }

    if (typeof err.response === 'undefined') {
      throw err
    }

    if (err.response && err.response.status !== 200) {
      throw err.response
    }
  })

  return xapi
}

export const xxapi = () => {
  const xxapi = axios.create({
    baseURL: 'https://pretixe.com'
  })

  return xxapi
}

export const errorMsg = error => {
  const errorMsg = {
    title: null,
    message: ''
  }

  if (typeof error === 'object' && error !== null) {
    if (error.data && error.data.message) {
      errorMsg.title = error.data.message
      const errors = error.data.errors
      if (errors) {
        for (const key in errors) {
          /* eslint-disable-next-line  */
          if (errors[key]) {
            /* eslint-disable-next-line  */
            errors[key].map(msg => {
              errorMsg.message += msg + '\n'
            })
          }
        }
      }
    }
  } else {
    errorMsg.title = error
  }

  return errorMsg
}
