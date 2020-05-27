<template lang="pug">
#room-box
  AudioRoom(:userId="$route.query.userId" :channelId="$route.params.audioId")
</template>
<script>
import AudioRoom from '@/components/room/AudioRoom'

export default {
  name: 'Roomer',
  components: {
    AudioRoom,
  },
}
</script>
