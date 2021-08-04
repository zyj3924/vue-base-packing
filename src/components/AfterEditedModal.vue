<template>
    <a-modal v-model="visiable" title="修改结果记录" width="700px" on-ok="handleOk">
             <template slot="footer">
                <a-button key="back" @click="HandleCancel">取消</a-button>
                <a-button key="submit" type="primary" @click="submitEdite">提交</a-button>
            </template>
            <p>日期格式正常</p>
            <p>数量格式正常</p>
            <p>物料号格式正常</p>
            <p>修改后</p>
            <vxe-table
                :cell-class-name="CellClassName"
                ref="xTableTqAfterEdite"
                border
                :data="afterEditerTiquData"
                >
                <vxe-table-column field="id" width="60" title="序号"></vxe-table-column>
                <vxe-table-column field="orderId" title="客户订单号"></vxe-table-column>
                <vxe-table-column field="orderDate" title="订单日期"></vxe-table-column>
                <vxe-table-column field="wlNumber" title="物料号"></vxe-table-column>
                <vxe-table-column field="wlCount" title="数量"></vxe-table-column>
                <vxe-table-column field="date" title="交货日期"></vxe-table-column>
            </vxe-table>
            <p>修改前</p>
            <vxe-table
                ref="xTableTqAfterEdite"
                border
                :data="originDataForCompare"
                >
                <vxe-table-column field="id" width="60" title="序号"></vxe-table-column>
                <vxe-table-column field="orderId" title="客户订单号"></vxe-table-column>
                <vxe-table-column field="orderDate" title="订单日期"></vxe-table-column>
                <vxe-table-column field="wlNumber" title="物料号"></vxe-table-column>
                <vxe-table-column field="wlCount" title="数量"></vxe-table-column>
                <vxe-table-column field="date" title="交货日期"></vxe-table-column>
            </vxe-table>
        </a-modal>
</template>
<script>
import {keyAndColumnMap}  from '../lib/config'
export default {
    props: {
        afterEditerTiquData: Array,
        originDataForCompare: Array
    },
    data: function(){
        return {
            visiable: false,
        }
    },
    name: 'AfterEditedModal',
    methods: {
        HandleCancel(){
            this.visiable = false
        },
        submitEdite () {
            console.log('提交')
        },
        CellClassName  ({rowIndex, columnIndex}) {
           const currentKey = keyAndColumnMap.get(columnIndex)
           if (this.afterEditerTiquData[rowIndex][currentKey] !== this.originDataForCompare[rowIndex][currentKey]){
               return 'col-orange'
           }
        }
    }
}
</script>