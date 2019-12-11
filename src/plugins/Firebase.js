import Firebase from '@firebase/app'
import '@firebase/messaging'

let instance = null

class FirebasePlugin {
  static install(Vue, options) {
    if (!instance) {
      instance = new FirebasePlugin(options)
    }

    Object.defineProperty(Vue.prototype, '$firebase', {
      get() { return instance  }
    })
  }

  constructor(config) {
    this.vapidKeySetuped = false
    this.app = Firebase.initializeApp(config)
    this.messaging = this.app.messaging()
  }

  setVapidKey(apiKey) {
    if (this.vapidKeySetuped) {
      return
    }

    this.messaging.usePublicVapidKey(apiKey)
    this.vapidKeySetuped = true
  }

  async requestPushPermission() {
    try {
      await this.messaging.requestPermission()
    } catch (e) {
      // TODO: On block push message
    }
  }
}

export default FirebasePlugin
