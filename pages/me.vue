<template lang="pug">
section#me
  nav#sider
    SideBar
    SideTab
      .list.padding.my-1
        n-link(:to="{name: 'me'}" v-slot="{ href, isActive }")
          a.list-item(:href="href" :class="[isActive && 'active']")
            .list-item-pre
              i.bx.bxs-home-circle
            .list-item-content 个人首页
      .list.group.padding.my-1(v-if="communityGroup.length" key="community")
        .list-group(
          v-for="(group,index) in communityGroup"
          :key="group.id"
          :class="{expand: activeCommunityGroup.includes(group.id)}")
          .list-header(@click="expandCommunityGroup(group)")
            .list-header-pre
              i.bx.bxs-chevron-down
            | {{group.label}}
          template(v-if="activeCommunityGroup.includes(group.id)")
            n-link.list-item(
              v-if="index==0"
              :to="`/me/chat/robot`")
              .list-item-pre
                template
                  .avatar(:style="{'background-image':`url(http://placekitten.com/40/40)`}")
              .list-item-content 机器人
              .list-item-brief
                span.bage.error 9
            n-link.list-item(
              v-for="item in group.children"
              :to="`/me/${item.type}/${item.id}`"
              :key="item.id")
              .list-item-pre
                template(v-if="item.type === 'messages'")
                  i.bx.bxs-volume-full
                template(v-else-if="item.type === 'audio'")
                  i.bx.bxs-megaphone
                template(v-else-if="item.type === 'chat'")
                  .avatar(:style="{'background-image':`url(${item.avatar.source})`}")
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
  nuxt-child
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import SideBar from '~/components/channel/SideBar'
import SideTab from '~/components/channel/SideTab'

export default {
  name: 'Me',
  components: {
    [SideBar.name]: SideBar,
    [SideTab.name]: SideTab,
  },
  computed: {
    ...mapState(['communityGroup', 'activeCommunityGroup']),
  },
  methods: {
    ...mapMutations(['expandCommunityGroup']),
  },
}
</script>
<style lang="scss" scoped>
section#me {
  background: var(--vs-theme-bg);
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  position: absolute;
  left: 190px;
  right: 0;
  height: 100%;
  nav#sider {
    display: flex;
    flex-direction: column;
    width: 240px;
  }
}
</style>
