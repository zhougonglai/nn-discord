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
.search {
  margin-top: 6px;
  border-radius: 17px;
  overflow: hidden;
  background: #303339;
  border: 1px solid #222428;
  width: 287px;
  ::v-deep {
    // .el-input-group__append {
    //   background-color: transparent;
    //   border: none;
    // }
    input {
      border: none;
      background: none;
    }
  }
}
.h2 {
  color: #b9bbbe;
  padding: 37px 73px 0 73px;
  .addall {
    border: none;
  }
  .return {
    color: #b9bbbe;
    padding: 0 10px;
    cursor: pointer;
  }
  .search-txt {
    color: #72767d;
    font-size: 12px;
    margin-left: 10px;
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
      img="http://placekitten.com/1280/136"
    ></NnBanner>
    <!-- 临时精确搜索 -->
    <div class="head-search flex aic jcc">
      <div class="v-ofh flex aic">
        <el-input
          v-model="search.txt"
          @keyup.enter.native="search_friend"
          class="search"
          style="width: 450px; height: 50px; line-height: 50px;"
          placeholder="使用NN号搜索好友"
          suffix-icon="el-icon-search"
        />
        <div class="btns flex aic">
          <el-button @click="search_click" class="btn" type="primary"
            >查找</el-button
          >
        </div>
      </div>
    </div>
    <!-- 备用条件搜索 -->
    <!-- <div class="head-search flex aic jcc">
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
    </div> -->
    <div v-if="isSearch" class="h2 flex aic">
      <svgReturn></svgReturn>
      <div @click="getList" class="return">返回</div>
      <span class="search-txt">搜索: {{ search_txt.txt }}</span>
    </div>
    <div v-else class="h2 flex jcb">
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
        <item1 v-for="item in list" :key="item.dbId" :data="item">
          <div>
            <el-button @click="add(item)" plain round size="mini" type="default"
              >+好友</el-button
            >
          </div>
        </item1>
      </div>
      <noData v-if="list && list.length == 0">没有找到符合的用户</noData>
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
import svgReturn from '~/assets/icons/return.svg'
export default {
  name: 'FriendSearch',
  components: {
    friends,
    svgReturn,
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
      isSearch: false, // 是否搜索
      search: {
        txt: '',
        game: '',
        area: '',
        sex: '',
        age: '',
      },
      search_txt: {
        // 显示用
        txt: '',
        game: '',
        area: '',
        sex: '',
        age: '',
      },
      list: [],
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    ...mapActions({
      apply: 'friend/apply',
    }),
    getList() {
      // 获取 你可能感兴趣的好友
      this.isSearch = false
      this.list = [
        {
          dbId: 1,
          userId: 4945,
          userUrl: 'http://placekitten.com/65/65',
          nickName: '周公来的',
          birthday: '2001-10-10',
          game: '英雄联盟-韩服',
        },
      ]
    },
    // 搜索好友
    search_click() {
      this.isSearch = true
      this.search_txt.txt = this.search.txt
      this.$axios
        .post('getUserBynn', {
          nnNumber: this.search.txt,
        })
        .then(({ data }) => {
          this.list = data ? [data] : []
        })
    },
    // 一键添加
    add_onclick() {
      console.log('一键添加')
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
