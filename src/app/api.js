import { GOOGLE_API_KEY } from './utils/constants'

export const fetchForm = () =>
  fetch('http://private-da937a-izitest1.apiary-mock.com/fields')
  .then(response => response.json())

export const getAddressMap = ({ address, location }) => {
  const params = [
    `center=${address}`,
    `zoom=17`,
    'size=560x200',
    'mapType=roadmap',
    `markers=color:red|label:A|${location.latitude},${location.longitude}`,
    `key=${GOOGLE_API_KEY}`
  ]

  return `https://maps.googleapis.com/maps/api/staticmap?${params.join('&')}`
}
