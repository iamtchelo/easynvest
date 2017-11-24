import Input from './Input'
import Image from '../base/Image'
import { getAddressMap } from '../../../api'

export default class InputAddress extends Input {

  constructor(props) {
    super(props)

    this.autocomplete = new google.maps.places.Autocomplete((this.el), { types: ['geocode'] })
    this.autocomplete.addListener('place_changed', this.handleAddressMap.bind(this))
  }

  handleAddressMap() {
    const { value } = this.el
    const { geometry: { location } } = this.autocomplete.getPlace()
    const image = this.el.parentNode.querySelector('img')
    const imageMapURL = getAddressMap({
      address: value,
      location: {
        latitude: location.lat(),
        longitude: location.lng()
      }
    })

    if (image) {
      image.src = imageMapURL
    } else {
      this.el.parentNode.insertAdjacentHTML('beforeend', new Image({
        width: 560,
        height: 200,
        className: 'address-map',
        src: imageMapURL
      }).render())
    }
  }

}
