<template lang="pug">
section#friends
  nav#sider
    SideBar
    SideTab
      .list.padding.my-1
        n-link(:to="{name: 'friends'}" v-slot="{ href, isExactActive }")
          a.list-item(:href="href" :class="[isExactActive && 'active']" @click.prevent="()=>{$router.push({name:'friends'})}")
            .list-item-pre
              AddFriends
            .list-item-content 添加好友
        n-link(:to="{name: 'friends-pass'}" v-slot="{ href, isActive }")
          a.list-item(:href="href" :class="[isActive && 'active']" @click.prevent="()=>{$router.push({name:'friends-pass'})}")
            .list-item-pre
              FriendApplication
            .list-item-content 好友申请
      .list.group.padding.my-1(key="friends")
        .list-group(
                    :class="{expand: expand}")
          .list-header(@click="expand=!expand")
            .list-header-pre
              i.bx.bxs-chevron-down
            | 好友
          template(v-if="expand")
            div(v-for="item in list"
              :key="item.dbId" @contextmenu.prevent="$refs.menu.open($event, item)"
        v-click-outside="() => {$refs.menu && $refs.menu.close()}"
  )
              .list-item
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
                .list-item-content(:class="'friendsName'+item.friendUid" @keydown.enter="()=>$event.srcElement.blur()") {{item.alias}}
                .list-item-brief(v-if="item.brief")
                  //- span(:class="[item.brief.type, item.brief.class ? item.brief.class : '']") {{item.brief.payload > 99 ? 99 : item.brief.payload}}
          noData(v-if="list&&list.length==0")
            | 你还没有添加好友
    nnRightMenu(ref="menu")
      li(@click="editRemarks")  修改备注名
      li(@click="friend_link")  查看个人资料
      li(@click="editRemarks")  邀请至社区
        i.el-icon-arrow-right
        ul
          li(@click="Invite_community(1)") 社区1
      li(@click="dialog_del=true")  删除好友
    el-dialog(center title="删除提示"
  :visible.sync="dialog_del"
)
      span 是否删除改好友？
      span.dialog-footer(slot="footer")
        el-button(@click="dialog_del = false") 取 消
        el-button(type="primary" @click="dialog_del = false,del_friend()") 删 除
  nuxt-child
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import { Dialog } from 'element-ui'
import SideBar from '~/components/channel/SideBar'
import SideTab from '~/components/channel/SideTab'
import AddFriends from '~/assets/icons/Add friends.svg'
import FriendApplication from '~/assets/icons/Friend application.svg'
export default {
  name: 'Friends',
  components: {
    [SideBar.name]: SideBar,
    [SideTab.name]: SideTab,
    [Dialog.name]: Dialog,
    AddFriends,
    FriendApplication,
  },
  data() {
    return {
      // 折叠好友
      expand: true,
      //
      dialog_del: false,
      //  channel/business/findUserServers/{userId} 我加入过的社区
    }
  },
  mounted() {
    // apply

    this.update_list()
  },
  computed: {
    ...mapState({ list: (s) => s.friend.list }),
    ...mapGetters(['USER_ID']),
  },
  methods: {
    ...mapActions({
      update_list: 'friend/update_list',
    }),
    ...mapMutations(['expandFriendsGroup']),
    editRemarks() {
      const user = this.$refs.menu.data
      const fname = document.querySelector('.friendsName' + user.friendUid)
      const name = fname.textContent // 原昵称
      fname.setAttribute('contenteditable', 'true')
      fname.focus()
      this.getSelection(fname)
      const onerr = () => {
        // 设置失败
        fname.textContent = name
      }
      const fun = () => {
        fname.removeEventListener('blur', fun)
        fname.removeAttribute('contenteditable')
        const newName = fname.textContent.trim()
        if (newName === name) return
        if (newName === '') return onerr()
        this.$axios
          .put('friend/alias', {
            alias: newName,
            friendUid: user.friendUid,
            userId: this.USER_ID,
          })
          .then(({ msg }) => {
            this.$message.success(msg)
          })
          .catch(onerr)
      }
      fname.addEventListener('blur', fun)
      fname.contenteditable = true
    },
    // 邀请社区
    Invite_community(db) {
      //
    },
    // 删除好友
    del_friend() {
      const { friendUid } = this.$refs.menu.data //
      this.$axios
        .get(`friend/delete/${this.USER_ID}/${friendUid}`)
        .then(({ msg }) => {
          this.update_list()
          this.$message.success(msg)
        })
    },
    getSelection(obj) {
      let range = null
      if (window.getSelection) {
        // ie11 10 9 ff safari
        obj.focus() // 解决ff不获取焦点无法定位问题
        range = window.getSelection() // 创建range
        range.selectAllChildren(obj) // range 选择obj下所有子内容
        range.collapseToEnd() // 光标移至最后
      } else if (document.selection) {
        // ie10 9 8 7 6 5
        range = document.selection.createRange() // 创建选择对象
        // var range = document.body.createTextRange();
        range.moveToElementText(obj) // range定位到obj
        range.collapse(false) // 光标移至最后
        range.select()
      }
    },
    friend_link() {
      const { friendUid } = this.$refs.menu.data
      this.$router.push('/friends/' + friendUid)
    },
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
.list-item-content {
  height: 30px;
}
</style>
