import Rules from './rules'
const keyAndColumnMap = new Map()
keyAndColumnMap.set(0, 'id')
keyAndColumnMap.set(1, 'orderId')
keyAndColumnMap.set(2, 'orderDate')
keyAndColumnMap.set(3, 'wlNumber')
keyAndColumnMap.set(4, 'wlCount')
keyAndColumnMap.set(5, 'date')


const validRules =  {
    orderId: [
      {required: true, message: '订单号格式异常' }
    ],
    wlCount: [
      { required: true,type: 'number', message: '数量格式异常' }
    ],
    wlNumber: [
      { required: true, trigger: 'change',  message: '物料号格式异常' }
    ],
    date: [
      { required: true, message: '日期格式异常' }
    ]
  }

const config = {
    orderId: {
        rule: {
            type: Rules.EQUAlANDOFFSET,
            text: '订单号码:',
            offset: 1
        },
        des: '订单号码:'
    },
    orderDate: {
        rule: {
            type: Rules.EQUAlANDOFFSET,
            text: '订单日期:',
            offset: 1
        },
        des: '订单日期:'
    },
    project: {
        rule: {
            type: Rules.CONTACTANDOFFSET,
            text: 'EA'
        },
        list: [
            {
                des: '物料',
                offset: -1
            },
            {
                des: '数量',
                offset: 0,
                handler: function(text){
                    return text.replace('EA', '').replace(/\s+/g,"");
                }
            },
            {
                des: '日期',
                offset: 6
            }
        ]
    }

}

export {config, keyAndColumnMap, validRules}