<style scoped lang="scss">
.page {
  padding: 28px;
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
.table {
  margin-top: 18px;
  border: 1px solid #222428;
  border-radius: 4px 4px 0px 0px;
  .Avatar {
    @include Circle(28px);
  }
  .add-friend {
    color: #9fa4ab;
    cursor: pointer;
  }
}
</style>
<template>
  <PageHead>
    <MeTabs>
      <div class="page full-width">
        <!-- 搜索好友 -->
        <el-input
          v-model="search.key"
          @keyup.enter.native="search_friend"
          class="search"
          placeholder="搜索好友"
          suffix-icon="el-icon-search"
        />
        <!-- 表格 -->
        <el-table :data="tableData" stripe class="table">
          <el-table-column label="姓名" width="180">
            <template slot-scope="scope">
              <div class="flex aic">
                <img
                  src="http://placekitten.com/40/40"
                  alt=""
                  class="Avatar mr-1"
                />
                {{ scope.row.name }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="性别" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地区"> </el-table-column>
          <el-table-column prop="address" label="个性签名"> </el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <span v-if="scope.$index == 0" class="add-friend">+添加好友</span>
              <span v-else>已添加</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </MeTabs>
  </PageHead>
</template>
<script>
import { Input, Table, TableColumn } from 'element-ui'
import PageHead from '~/components/channel/PageHead'
import MeTabs from '~/components/channel/MeTabs'
export default {
  name: 'Member',
  components: {
    [Input.name]: Input,
    [PageHead.name]: PageHead,
    [MeTabs.name]: MeTabs,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
  },
  data() {
    return {
      search: {
        key: '',
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    }
  },
  methods: {
    search_friend() {
      console.log('search_friend')
    },
  },
}
</script>
