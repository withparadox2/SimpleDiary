import axios from 'axios'

const BASE_URL = 'http://192.168.178.31:8080'

function addParams(url, params) {
  if (!params || Object.keys(params).length === 0) {
    return url
  }
  let appendStr = ''
  for (let key in params) {
    if (appendStr.length !== 0) {
      appendStr += '&'
    }
    appendStr += `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  }
  return `${url}${url.indexOf('?') >= 0 ? '&' : '?'}${appendStr}`
}

function post({ path, params, content, headers }) {
  return axios({
    method: 'post',
    url: buildUrl({ path, params }),
    data: content,
    headers
  }).catch(error => {
    return Promise.reject({
      error,
      message: parseError(error)
    })
  })
}

function get({ path, params }) {
  return axios.get(buildUrl({ path, params })).catch(error => {
    return Promise.reject({
      error,
      message: parseError(error)
    })
  })
}

function buildUrl({ path, params }) {
  return addParams(BASE_URL + path, params)
}

function parseError(err) {
  if (err.response && err.response.data) {
    if (err.response.data.error) {
      return err.response.data.error
    } else {
      return JSON.stringify(err.response.data)
    }
  } else if (err.message) {
    return err.message
  }
  return 'unknown error'
}

export { post, get, buildUrl }
