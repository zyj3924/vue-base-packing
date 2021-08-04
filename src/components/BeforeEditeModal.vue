<template>
    <a-modal v-model="visiable" title="提取结果" width="700px">
            <template slot="footer">
                <a-button key="back" @click="handleCancel">取消</a-button>
                <a-button key="submit" type="primary" @click="SaveTable">保存</a-button>
            </template>
            <p>日期格式正常</p>
            <p>数量格式正常</p>
            <p>物料号格式正常</p>
            <vxe-table
                ref="xTable"
                border
                keep-source
                :cell-class-name="cellClassName"
                :edit-rules="validRules"
                :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}"
                :data="tiquData"
                @edit-closed="editClosedEvent"
                >
                <vxe-table-column field="id" width="60" title="序号"></vxe-table-column>
                <vxe-table-column field="orderId" title="客户订单号"></vxe-table-column>
                <vxe-table-column field="orderDate" title="订单日期"></vxe-table-column>
                <vxe-table-column :edit-render="{name: '$input', props: {key: 'wlNumber'}, attrs: {type: 'text'}}" field="wlNumber" title="物料号"></vxe-table-column>
                <vxe-table-column :edit-render="{name: '$input', props: {key: 'wlCount'}, attrs: {type: 'Number'}}" field="wlCount" title="数量"></vxe-table-column>
                <vxe-table-column :edit-render="{name: '$input', props: {key: 'date'}, props: {type: 'date'}}" field="date" title="交货日期"></vxe-table-column>
            </vxe-table>
        </a-modal>
</template>
<script>
import {fullValidEvent} from '../lib/validate'
import {validRules} from '../lib/config'
export default {
    name: 'BeforeEditeModal',
    props: {
        errMap: Map,
        tiquData: Array
    },
    data: function(){
        return {
            validRules,
            visiable: true
        }
    },
    methods: {
        handleCancel () {
            this.visiable = false
        },
        SaveTable () {
            const $table = this.$refs.xTable
            const updateRecords = $table.getUpdateRecords()
            this.$emit('getOriginDataForCompare', updateRecords)
            this.$emit('setAfterEditerTiquData', updateRecords)
        },
        cellClassName({columnIndex, rowIndex}){
            if (this.errMap.get(rowIndex) === columnIndex) {
               return 'col-orange'
            }
        },
         editClosedEvent(){
            this.errMap.clear()
            fullValidEvent(this.$refs.xTable, this.errMap)
        },
    },
    mounted () {
        this.$nextTick(() => {
            fullValidEvent(this.$refs.xTable, this.errMap)
        })
    }
}
</script>