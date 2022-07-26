import {LitElement, css, html} from 'lit'

export default class Chat extends LitElement {
  static properties = {
  }

  static styles = css`
  `
  constructor() {
    super()
  }

  render() {
    return html`
      <textarea></textarea>
    `
  }
}

customElements.define('chat-livetext', Chat)
