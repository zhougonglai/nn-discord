<template lang="pug">
section#container
  .user-header
    .user-panel
      .user-avatar
        .avatar(:style="{'background-image':`url(${user.imageUrl})`}")
      .user-info
        .user-item.user-fans {{user.fans}}粉丝
        .user-item.user-follow {{user.follow}}关注
        .user-item.user-nickname {{user.nickName}}
        .user-item.user-memberNo NNID：{{user.id}}
        p.user-descript {{user.signature}}
      nn-btn.user-editor(rund type="text" size="small") 编辑资料
  slot
</template>
<script>
import { mapState } from 'vuex'
import nnBtn from '~/components/wc/nnButton'

export default {
  name: 'PageHead',
  components: {
    [nnBtn.name]: nnBtn,
  },
  computed: {
    ...mapState(['user']),
  },
}
</script>

<style lang="scss" scoped>
section#container {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--background-primary);
  .user {
    &-header {
      height: 180px;
      width: 100%;
      padding-left: 20px;
      background-color: var(--background-secondary);
      // background-image: url('http://dummyimage.com/1200x130/000000');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: left center;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: relative;
    }
    &-editor {
      position: absolute;
      top: 15px;
      right: 15px;
    }
    &-panel {
      width: 50vw;
      display: flex;
    }
    &-avatar {
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      .avatar {
        width: 90px;
        height: 90px;
      }
    }
    &-info {
      display: flex;
      flex-wrap: wrap;
    }
    &-item {
      flex: 1 1 50%;
      min-height: 32px;
      line-height: 16px;
      display: flex;
      align-items: flex-end;
    }
    &-nickname {
      font-weight: bold;
    }
    &-descript {
      font-size: small;
      color: lightgray;
      user-select: none;
    }
  }
}
</style>
