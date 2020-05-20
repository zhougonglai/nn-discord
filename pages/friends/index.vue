<style scoped lang="scss">
$border-color: #222428;
.page {
  background-color: #36393f;
}

.head-search {
  border-bottom: 1px solid $border-color;
  height: 165px;
  .form {
    width: 520px;
    height: 87px;
    border-radius: 23px;
    border: 1px solid $border-color;
  }
  .search-name ::v-deep input {
    border-radius: 23px 23px 0 0 !important;
  }
  .el-select ::v-deep input {
    border: none;
  }
  .sel-game ::v-deep input {
    border-radius: 0 0 0 23px;
  }
  .sel-age ::v-deep input {
    border-radius: 0 0 23px 0;
  }
  .bl::before {
    content: '';
    position: absolute;
    height: 14px;
    width: 1px;
    background: #404247;
    top: 14px;
    z-index: 1;
  }
  .btns {
    padding-left: 27px;
    .btn {
      $w: 64px;
      width: $w;
      height: $w;
      border-radius: 50%;
    }
  }
}

.h2 {
  color: #b9bbbe;
  padding: 37px 73px 0 73px;
  .addall {
    border: none;
  }
}
.content {
  padding: 0 53px;
}
.list-friend {
  padding-top: 30px;
}
</style>
<template>
  <div class="page spacer flex column">
    <NnBanner
      href="//www.baidu.com"
      img="http://placekitten.com/1280/130"
    ></NnBanner>
    <div class="head-search flex aic jcc">
      <div class="v-ofh flex">
        <div class="flex1 form">
          <el-input
            v-model="search.txt"
            class="search-name"
            clearable
            placeholder="请输入好友的昵称/NN号"
          ></el-input>
          <div class="flex">
            <el-select
              v-model="search.game"
              class="sel-game"
              placeholder="选择游戏区服"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :disabled="item.disabled"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select v-model="search.area" class="bl" placeholder="选择地区">
              <el-option
                v-for="item in options"
                :key="item.value"
                :disabled="item.disabled"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select v-model="search.sex" class="bl" placeholder="选择性别">
              <el-option
                v-for="item in options"
                :key="item.value"
                :disabled="item.disabled"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select
              v-model="search.age"
              class="bl sel-age"
              placeholder="选择年龄"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :disabled="item.disabled"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="btns flex aic">
          <el-button @click="search_click" class="btn" type="primary"
            >查找</el-button
          >
        </div>
      </div>
    </div>
    <div class="h2 flex jcb">
      <div><friends style="height: 20px;"></friends> 你可能感兴趣的好友</div>
      <el-button
        @click="add_onclick"
        class="addall"
        plain
        round
        size="mini"
        type="primary"
        >一键添加</el-button
      >
    </div>
    <div class="flex-sub content">
      <div class="list-friend flex wrap">
        <item1 v-for="item in userList" :key="item.id" :data="item">
          <div>
            <el-button @click="add(item)" plain round size="mini" type="default"
              >+好友</el-button
            >
          </div>
        </item1>
      </div>
    </div>
  </div>
</template>
<script>
import { Input } from 'element-ui'
import { mapActions } from 'vuex'
// mapState, mapMutations, mapGetters,
import nnBanner from '~/components/wc/nnBanner'
import item1 from '~/components/friends/item1'
import friends from '~/assets/icons/Interested friends.svg'
export default {
  name: 'FriendSearch',
  components: {
    friends,
    [nnBanner.name]: nnBanner,
    [Input.name]: Input,
    [item1.name]: item1,
  },
  data() {
    return {
      options: [
        {
          value: '1',
          label: '无',
        },
      ],
      search: {
        txt: '',
        game: '',
        area: '',
        sex: '',
        age: '',
      },
      userList: [
        {
          id: 1,
          avatar: 'http://placekitten.com/65/65',
          name: 'HEBE00',
          age: 18,
          game: '英雄联盟-韩服',
        },
        {
          id: 2,
          avatar: 'http://placekitten.com/65/65',
          name: 'HEBE00',
          age: 18,
          game: '英雄联盟-韩服',
        },
        {
          id: 3,
          avatar: 'http://placekitten.com/65/65',
          name: 'HEBE00',
          age: 18,
          game: '英雄联盟-韩服',
        },
        {
          id: 4,
          avatar: 'http://placekitten.com/65/65',
          name: 'HEBE00',
          age: 18,
          game: '英雄联盟-韩服',
        },
        {
          id: 5,
          avatar: 'http://placekitten.com/65/65',
          name: 'HEBE00',
          age: 18,
          game: '英雄联盟-韩服',
        },
        {
          id: 6,
          avatar: 'http://placekitten.com/65/65',
          name: 'HEBE00',
          age: 18,
          game: '英雄联盟-韩服',
        },
        {
          id: 7,
          avatar: 'http://placekitten.com/65/65',
          name: 'HEBE00',
          age: 18,
          game: '英雄联盟-韩服',
        },
      ],
    }
  },
  methods: {
    ...mapActions({
      apply: 'friend/apply',
    }),
    // 搜索好友
    search_click() {
      console.log('搜索')
    },
    // 一键添加
    add_onclick() {
      console.log('一键添加')
      //
    },
    // 添加好友
    add(uid) {
      uid = 4889
      this.apply(uid).then(({ msg }) => {
        this.$message.success(msg)
      })
    },
  },
}
</script>
