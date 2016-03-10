module.exports = {
  valuesFor: valuesFor,
  addressSummary: addressSummary,
  formatBalance: formatBalance,
  dataSize: dataSize,
  readableDate: readableDate,
}

function valuesFor(obj) {
  if (!obj) return []
  return Object.keys(obj)
    .map(function(key){ return obj[key] })
}

function addressSummary(address) {
  return address ? address.slice(0,2+8)+'...'+address.slice(-4) : '...'
}

function formatBalance(balance) {
  if (!balance) return 'None'
  var num = parseInt(balance)/1e18
  return num.toFixed(6)+' ETH'
}

function dataSize(data) {
  if (!data) return
  return data
}

function readableDate(ms) {
  var date = new Date(ms)
  var month = date.getMonth()
  var day = date.getDate()
  var year = date.getFullYear()
  var hours = date.getHours()
  var minutes = "0" + date.getMinutes()
  var seconds = "0" + date.getSeconds()

  var date = `${month}/${day}/${year}`
  var time = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`
  return `${date} ${time}`
}
