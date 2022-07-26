import {LitElement, css, html} from 'lit'
import Video from './components/video'
import Chat from './components/chat'

export class App extends LitElement {
  static properties = {
  }

  static styles = css`
    :host {
      font-family: sans-serif;
    }
  `
  constructor() {
    super()
  }

  render() {
    return html`
      <section>
        <h1>LiveText!</h1>
        <video-livetext></video-livetext>
        <chat-livetext></chat-livetext>
      </section>
    `
  }
}

customElements.define('livetext-app', App)
