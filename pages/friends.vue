<template lang="pug">
section#friends
  nav#sider
    SideBar
    SideTab
      .list.padding.my-1
        n-link(:to="{name: 'friends'}" v-slot="{ href, isExactActive }")
          a.list-item(:href="href" :class="[isExactActive && 'active']" @click.prevent="()=>{$router.push({name:'friends'})}")
            .list-item-pre
              i.bx.bxs-home-circle
            .list-item-content 添加好友
        n-link(:to="{name: 'friends-pass'}" v-slot="{ href, isActive }")
          a.list-item(:href="href" :class="[isActive && 'active']" @click.prevent="()=>{$router.push({name:'friends-pass'})}")
            .list-item-pre
              i.bx.bxs-home-circle
            .list-item-content 好友申请
      .list.group.padding.my-1(key="friends")
        .list-group(
                    :class="{expand: expand}")
          .list-header(@click="expand=!expand")
            .list-header-pre
              i.bx.bxs-chevron-down
            | 好友
          template(v-if="expand")
            n-link.list-item(
              :to="'/friends/'+item.friendUid"
              v-for="item in list"
              :key="item.dbId")
              .list-item-pre
                template
                  .avatar(:style="{'background-image':`url(http://placekitten.com/25/25)`}")
                  //- ${item.userUr1}
                //- template(v-else-if="item.avatar.type === 'icon'")
                //-   i.bx(:class="[item.avatar.source]")
                //- template(v-else) {{item.avatar.source}}
                //- template(v-if="item.status")
                //-   span.HOLD(v-if="item.status === 'HOLD'")
                //-     span
                //-     span
                //-     span
                //-   span.DND(v-else-if="item.status === 'DND'")
                //-     i.bx.bxs-moon
                //-   span.AFK(v-else-if="item.status === 'AFK'")
                //-     i.bx.bxs-no-entry
              .list-item-content {{item.alias}}
              .list-item-brief(v-if="item.brief")
                //- span(:class="[item.brief.type, item.brief.class ? item.brief.class : '']") {{item.brief.payload > 99 ? 99 : item.brief.payload}}
          noData(v-if="list&&list.length==0")
            | 你还没有添加好友
  nuxt-child
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import SideBar from '~/components/channel/SideBar'
import SideTab from '~/components/channel/SideTab'
export default {
  name: 'Friends',
  components: {
    [SideBar.name]: SideBar,
    [SideTab.name]: SideTab,
  },
  data() {
    return {
      // 折叠好友
      expand: true,
    }
  },
  mounted() {
    // apply

    this.update_list()
  },
  computed: {
    ...mapState({ list: (s) => s.friend.list }),
  },
  methods: {
    ...mapActions({
      update_list: 'friend/update_list',
    }),
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
