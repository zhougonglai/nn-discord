<template lang="pug">
SideSlider
  .scroller(key="friend")
    .list.group.padding.my-1(v-if="activeFriendsGroup.length" key="friends")
      .list-group(
        v-for="friend in friendsGroup"
        :key="friend.id"
        :class="{expand: activeFriendsGroup.includes(friend.id)}")
        .list-header(@click="expandFriendsGroup(friend)")
          .list-header-pre
            i.bx.bxs-chevron-down
          | {{friend.label}}
        template(v-if="activeFriendsGroup.includes(friend.id)")
          n-link.list-item(
            v-for="item in friend.children"
            :to="`/channels/me/${item.id}`"
            :key="item.id")
            .list-item-pre
              template(v-if="item.avatar.type === 'img'")
                .avatar(:style="{'background-image':`url(${item.avatar.source})`}")
              template(v-else-if="item.avatar.type === 'icon'")
                i.bx(:class="[item.avatar.source]")
              template(v-else) {{item.avatar.source}}
              template(v-if="item.status")
                span.HOLD(v-if="item.status === 'HOLD'")
                  span
                  span
                  span
                span.DND(v-else-if="item.status === 'DND'")
                  i.bx.bxs-moon
                span.AFK(v-else-if="item.status === 'AFK'")
                  i.bx.bxs-no-entry
            .list-item-content {{item.label}}
            .list-item-brief(v-if="item.brief")
              span(:class="[item.brief.type, item.brief.class ? item.brief.class : '']") {{item.brief.payload > 99 ? 99 : item.brief.payload}}
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import SideSlider from '~/components/channel/SideSlider.vue'

export default {
  name: 'Friends',
  components: {
    [SideSlider.name]: SideSlider,
  },
  computed: {
    ...mapState(['friendsGroup', 'activeFriendsGroup']),
  },
  methods: {
    ...mapMutations(['expandFriendsGroup']),
  },
}
</script>
