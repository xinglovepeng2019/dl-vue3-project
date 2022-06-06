<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column type="index" label="序号" width="180" />

    <template v-for="item in tableColumnOptions">
      <el-table-column :prop="item.prop" :label="item.label" width="180" />
    </template>
  </el-table>
  <!-- <el-pagination
    v-model:currentPage="currentPage"
    v-model:page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    :page-sizes="[10, 20, 30, 40]"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  /> -->

  <el-pagination
    v-model:currentPage="currentPage"
    v-model:page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    :page-sizes="[10, 20, 30, 40]"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: [],
    },
    tableColumnOptions: {
      type: Array,
      default: [],
    },
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const handleCurrentChange = (v) => {
      emit('setCurrent', v)
    }

    const handleSizeChange = (v) => {
      emit('setPagesize', v)
    }

    return { handleCurrentChange, handleSizeChange }
  },
}
</script>

<style lang="less" scoped></style>
