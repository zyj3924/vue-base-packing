<template>
    <div>
        <vxe-form :data="formData" @submit="submitEvent">
          <vxe-form-item field="prod" :item-render="{}">
            <template #default="{ data }">
              <vxe-select v-model="data.product" placeholder="product">
                <vxe-option v-for="(item, index) in selectData.products" :key="index" :value="item" :label="item">{{item}}</vxe-option>
              </vxe-select>
            </template>
          </vxe-form-item>
          <vxe-form-item>
            <template #default>
              <vxe-button type="submit" status="primary">查询</vxe-button>
              <vxe-button type="reset">重置</vxe-button>
            </template>
          </vxe-form-item>
        </vxe-form>
        <vxe-table
          show-overflow
          :loading="loading"
          :data="tableData">
          <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>
          <vxe-table-column field="product" title="product"></vxe-table-column>
          <vxe-table-column field="customer" title="customer"></vxe-table-column>
          <vxe-table-column field="customerPlant" title="customer-plant"></vxe-table-column>
          <vxe-table-column field="planner" title="planner"></vxe-table-column>
          <vxe-table-column field="NeedAutomation" title="need automation(Y/N)"></vxe-table-column>
          <vxe-table-column field="soldToNO" title="soldToNO"></vxe-table-column>
          <vxe-table-column title="操作">
            <template #default="{ row }">
                <vxe-button @click="EditeHandler(row)">编辑</vxe-button>
            </template>
          </vxe-table-column>
        </vxe-table>

    </div>  
</template>
<script>
export default {
    name: 'baseTableConfig',
    components: {
        
    },
    data () {
        return {
                loading: false,
                selectData: {
                    products: ['productA','productB','productC','productD','productE']
                },
                formData: {
                    product: '',
                    sex: ''
                },
                tableData: [
                    { id: 10001, product: 'Test1', customer: 'Develop', customerPlant: '0', planner: 28, NeedAutomation: 'Y', soldToNO: '1201201212' },
                    { id: 10002, product: 'Test1', customer: 'Develop', customerPlant: '0', planner: 28, NeedAutomation: 'Y', soldToNO: '12012061212' },
                    { id: 10003, product: 'Test1', customer: 'Develop', customerPlant: '0', planner: 28, NeedAutomation: 'Y', soldToNO: '12012012212' },
                    { id: 10004, product: 'Test1', customer: 'Develop', customerPlant: '0', planner: 28, NeedAutomation: 'Y', soldToNO: '120121501212' },
                    { id: 10005, product: 'Test1', customer: 'Develop', customerPlant: '0', planner: 28, NeedAutomation: 'Y', soldToNO: '1201201212' },
                    { id: 10006, product: 'Test1', customer: 'Develop', customerPlant: '0', planner: 28, NeedAutomation: 'Y', soldToNO: '12012012212' },
                    { id: 10007, product: 'Test1', customer: 'Develop', customerPlant: '0', planner: 28, NeedAutomation: 'Y', soldToNO: '1201201212' },
                    { id: 10008, product: 'Test1', customer: 'Develop', customerPlant: '0', planner: 28, NeedAutomation: 'Y', soldToNO: '1201201212' },
                ]
           }
        },
        methods: {
            submitEvent () {
                console.log('submit')
            }
        }
}
</script>