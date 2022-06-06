<template>
  <table-option
    :tableData="tableData"
    :tableColumnOptions="tableColumnOptions"
    :currentPage="currentPage"
    :pageSize="pageSize"
    :total="total"
    @setCurrent="setCurrent"
    @setPagesize="setPagesize"
  ></table-option>
</template>

<script>
import { getSupplier } from '@/api/supplier'
import { onMounted, reactive, ref } from 'vue'
import tableOption from '@/components/tableOption.vue'
export default {
  components: {
    tableOption,
  },
  setup() {
    const tableColumnOptions = reactive([
      { label: '供应商名称', prop: 'name' },
      { label: '联系人', prop: 'linkman' },
      { label: '联系电话', prop: 'mobile' },
      { label: '备注', prop: 'remark' },
      { label: '操作', prop: '' },
    ])
    // 当前页
    let currentPage = ref(1)
    // 每页条数
    let pageSize = ref(10)
    // 总数量
    let total = ref(0)
    const tableData = ref([])
    const getSupplierlist = async () => {
      let {
        msg: { rows, count },
      } = await getSupplier({
        currentPage: currentPage.value,
        pageSize: pageSize.value,
      })
      console.log(rows)
      tableData.value = rows
      total.value = count
    }

    onMounted(() => {
      getSupplierlist()
    })

    const setCurrent = (v) => {
      currentPage.value = v
      getSupplierlist()
    }

    const setPagesize = (v) => {
      pageSize.value = v
      getSupplierlist()
    }

    return {
      tableData,
      currentPage,
      pageSize,
      total,
      setCurrent,
      setPagesize,
      tableColumnOptions,
    }
  },
}
</script>

<style lang="less" scoped></style>
