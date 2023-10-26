/**
 * Function to format the date in US format.
 *
 * @param {Date} date - Date to format.
 * @returns {Date} - Date formated.
 */
function formatDateUS(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}
export default formatDateUS
