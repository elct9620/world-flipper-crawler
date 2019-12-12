<template>
  <vk-notification :messages.sync="messages" position="top-right">
    <div slot-scope="{ title, body }">
      <strong class="uk-text-small uk-text-normal">{{ title }}</strong>
      <p class="uk-text-meta">{{ body }}</p>
    </div>
  </vk-notification>
</template>

<script>
export default {
  data() {
    return {
      token: null,
      messages: [],
    }
  },
  async created() {
    this.$firebase.setVapidKey(process.env.VUE_APP_VAPID_KEY)
    this.$firebase.requestPushPermission()
    this.token = await this.$firebase.getToken()
    this.$firebase.messaging.onMessage(payload => {
      this.messages.push(payload.notification)
    })
  }

}
</script>
