<template>
    <div class="order-page">
        <a-row type="flex" justify="space-between">
            <a-col :span="6">
                <a-upload
                    name="file"
                    :multiple="true"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    :headers="headers"
                    @change="handleChange"
                >
                    <a-button> <a-icon type="upload" /> 文件上传 </a-button>
                </a-upload>
            </a-col>
            <a-col :span="15" >
                <a-space>
                    <a-select placeholder="客户选择" style="width: 120px" @change="khSelectedHandleChange">
                        <template v-for="item in kfInfos" >
                            <a-select-option :value="item.key" :key="item.key">
                                {{item.text}}
                            </a-select-option>
                        </template>
                    </a-select>
                    <a-select placeholder="Ship to" style="width: 120px" @change="ShipToSelectedHandleChange">
                        <template v-for="item in shipTo" >
                            <a-select-option :value="item.key" :key="item.key">
                                {{item.text}}
                            </a-select-option>
                        </template>
                    </a-select>
                    <a-range-picker @change="DatePickerOnChange" />
                     <a-button type="primary" icon="search">
                        查询
                    </a-button>
                </a-space>
            </a-col>
        </a-row>
         <vxe-table
          ref="xTable"
          class="file-list"
          :align="allAlign"
          :data="tableData"
          @checkbox-change="selectChangeEvent"
          >
          <vxe-table-column type="seq" width="60" title="序号"></vxe-table-column>
          <vxe-table-column field="name" title="客户名称" show-overflow></vxe-table-column>
          <vxe-table-column field="shipto" title="Ship to"></vxe-table-column>
          <vxe-table-column field="source" title="源文件">
            <template #default="{ row }">
              <a :href="row.source.link" target="_black">{{ row.source.name }}</a>
            </template>
          </vxe-table-column>
          <vxe-table-column field="date" title="文档生成时间"></vxe-table-column>

          <vxe-table-column field="delins" title="Delins Format" >
            <template #default="{ row, columnIndex }">
                 <a-checkbox @change="onCheckBoxChange($event,row, columnIndex)" :disabled="!ColumnCanSelected(columnIndex)"></a-checkbox>
            </template>
          </vxe-table-column>
          <vxe-table-column field="awt" title="For AWT LL Format" >
            <template #default="{ row , columnIndex}">
                 <a-checkbox @change="onCheckBoxChange($event, row, columnIndex)" :disabled="!ColumnCanSelected(columnIndex)"></a-checkbox>
            </template>
          </vxe-table-column>
          <vxe-table-column field="lop" title="LOP2对账 Format" >
            <template #default="{ row, columnIndex }">
                 <a-checkbox @change="onCheckBoxChange($event, row, columnIndex)" :disabled="!ColumnCanSelected(columnIndex)"></a-checkbox>
            </template>
          </vxe-table-column>
        </vxe-table>
        
        <before-edite-modal 
            :tiquData="tiquData" 
            :errMap="errMap" 
            @setAfterEditerTiquData="setAfterEditerTiquData" 
            @getOriginDataForCompare="getOriginDataForCompare"/>
        <after-edited-modal
         ref="afterEditedModal"
         :originDataForCompare="originDataForCompare"
         :afterEditerTiquData="afterEditerTiquData"/>
    </div>
</template>
<script>
import {tiquData, testData, tableData, shipTo, kfInfos, validRules, TiquDataCopy} from '../mock/tiqu'
export default {
    name: 'OrderPage',
    components: {
        BeforeEditeModal: () => import('../components/BeforeEditeModal.vue'),
        AfterEditedModal: () => import('../components/AfterEditedModal.vue')
    },
    data() {
        return {
            errMap: new Map(),
            validRules,
            VisiableOfBeforeEditer:true,
            VisiableOfAfterEditer:false,
            currentColumnIndex: null,
            afterEditerTiquData: null,
            originDataForCompare: null,
            currentSeletedRowid: new Set(),
            allAlign: null,
            tiquData ,
            tiquDataMap: new Map(),
            testData,
            tableData,
            headers: {
                authorization: 'authorization-text',
            },
            kfInfos,
            shipTo
        };
    },
    computed: {
        TiquDataMap () {
            const mp = new Map()
            TiquDataCopy.forEach(item => {
                mp.set(item.id, item)
            })
            return mp
        },
        ColumnCanSelected (){
            return (ColumnIndex)=>{
                return !this.currentColumnIndex ||  ColumnIndex === this.currentColumnIndex 
            }
        }
    },
    methods: {
        setAfterEditerTiquData(value){
            this.afterEditerTiquData = value
            this.$refs.afterEditedModal.visiable = true
        },
        //获取原始数据中被改变的row
        getOriginDataForCompare(updateRecords){
            const data = []
            console.log(this.TiquDataMap)
            updateRecords.forEach((item) => {
                data.push(this.TiquDataMap.get(item.id))
            })
            this.originDataForCompare = data
        },
        submitEdite(){
            console.log('提交')
        },
        getUpdateEvent(){
            const $table = this.$refs.xTableTq
            const updateRecords = $table.getUpdateRecords()
            console.log(updateRecords)
            // this.$XModal.alert(updateRecords.length)
        },
        onAwtChange(row, columnIndex){
            console.log(row, columnIndex)
            this.currentColumnIndex = columnIndex
        },
        onCheckBoxChange(e,row, columnIndex){
            const checked = e.target.checked
            if (checked) {
                this.currentSeletedRowid.add(row.id)
                this.currentColumnIndex = columnIndex
            } else {
                this.currentSeletedRowid.delete(row.id)
                if (this.currentSeletedRowid.size === 0) {
                    this.currentColumnIndex = null
                }
            }
            console.log(this.currentSeletedRowid)
            
        },
        onLopChange(row, columnIndex){
            console.log(row, columnIndex)
            this.currentColumnIndex = columnIndex
        },
        getSelectEvent () {
            let selectRecords = this.$refs.xTable.getCheckboxRecords()
            console.log(selectRecords)
        },
        checkMethod3(obj){
            console.log(obj)
        },
        selectChangeEvent(obj){
            console.log(obj)
            //this.currentColumnIndex = obj.columnIndex
        },
        DatePickerOnChange(value){
            console.log('DatePickerOnChange', value)
        },
        ShipToSelectedHandleChange(value) {
            console.log(`selected ${value}`);
        },
        khSelectedHandleChange(value) {
            console.log(`selected ${value}`);
        },
        handleChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                this.$message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                this.$message.error(`${info.file.name} file upload failed.`);
            }
        },
        cellClassName({columnIndex, rowIndex}){
            if (this.errMap.get(rowIndex) === columnIndex) {
               return 'col-orange'
            }
        },
    }
}
</script>
<style>
.file-list{
    margin-top: 50px;
}
.col-orange {
    background-color: #f60;
    color: #fff;
}
</style>
