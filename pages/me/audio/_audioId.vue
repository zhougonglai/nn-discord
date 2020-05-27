<template lang="pug">
  AudioRoom(:userId="user.userId" :channelId="$route.params.audioId")
</template>
<script>
import { mapState } from 'vuex'
import AudioRoom from '~/components/room/AudioRoom'

export default {
  name: 'Room',
  components: {
    AudioRoom,
  },
  computed: {
    ...mapState(['user']),
  },
}
</script>
