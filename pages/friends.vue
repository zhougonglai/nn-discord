<template lang="pug">
section#friends
  nav#sider
    SideBar
    SideTab
      .list.padding.my-1
        n-link(:to="{name: 'friends'}" v-slot="{ href, isExactActive }")
          a.list-item(:href="href" :class="[isExactActive && 'active']")
            .list-item-pre
              i.bx.bxs-home-circle
            .list-item-content 添加好友
        n-link(:to="{name: 'friends-pass'}" v-slot="{ href, isActive }")
          a.list-item(:href="href" :class="[isActive && 'active']")
            .list-item-pre
              i.bx.bxs-home-circle
            .list-item-content 好友申请
      .list.group.padding.my-1(key="friends")
        .list-group(
          v-for="group in friendsGroup"
          :key="group.id"
          :class="{expand: activeFriendsGroup.includes(group.id)}")
          .list-header(@click="expandFriendsGroup(group)")
            .list-header-pre
              i.bx.bxs-chevron-down
            | {{group.label}}
          template(v-if="activeFriendsGroup.includes(group.id)")
            .list-item(
              v-for="item in group.children"
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
  nuxt-child
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import SideBar from '~/components/channel/SideBar'
import SideTab from '~/components/channel/SideTab'

export default {
  name: 'Friends',
  components: {
    [SideBar.name]: SideBar,
    [SideTab.name]: SideTab,
  },
  computed: {
    ...mapState(['friendsGroup', 'activeFriendsGroup']),
  },
  methods: {
    ...mapMutations(['expandFriendsGroup']),
  },
}
</script>
<style lang="scss" scoped>
section#friends {
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
