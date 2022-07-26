import {LitElement, css, html} from 'lit'

export default class Video extends LitElement {
  static properties = {
  }

  static styles = css`
  `
  constructor() {
    super()
  }

  async getMedia() {
    const openMediaDevices = async (constraints) => {
      return await navigator.mediaDevices.getUserMedia(constraints);
    }

    try {
      const stream = openMediaDevices({
        'video': true,
        'audio': false // this is livetext baby!
      })

      return stream
    } catch(error) {
      console.error('Error accessing media devices.', error)
    }
  }

  async getDevices(type) {
    const devices = await navigator.mediaDevices.enumerateDevices()
    return devices.filter(device => device.kind === type)
  }

  async firstUpdated() {
    const stream = await this.getMedia()
    const videoEl = this.renderRoot.querySelector('video')
    videoEl.srcObject = stream
  }

  render() {
    return html`
      <video autoplay playsinline controls="false"></video>
    `
  }
}

customElements.define('video-livetext', Video)
