const tiquKeyAndColumnIndexMap = new Map()
tiquKeyAndColumnIndexMap.set(0, 'id')
tiquKeyAndColumnIndexMap.set(1, 'orderId')
tiquKeyAndColumnIndexMap.set(2, 'orderDate')
tiquKeyAndColumnIndexMap.set(3, 'wlNumber')
tiquKeyAndColumnIndexMap.set(4, 'wlCount')
tiquKeyAndColumnIndexMap.set(5, 'date')

const tiquData = [
    {
        id:1,
        orderId: 88322212121,
        orderDate: '2021-01-02',
        wlNumber: 1,
        wlCount: 1111,
        date: '2021-03-05'
    },
    {   id:2,
        orderId: 88322212121,
        orderDate: '2021-01-02',
        wlNumber: 2,
        wlCount: 11,
        date: '2021-03-12'
    },
    {   id:3,
        orderId: 88322212121,
        orderDate: '2021-01-02',
        wlNumber: 3,
        wlCount: 11,
        date: '2021-03-22'
    },
    {   id:4,
        orderId: 88322212121,
        orderDate: '2021-01-02',
        wlNumber: 4,
        wlCount: 10,
        date: '2021-03-05'
    },
    {   id:5,
        orderId: 852121,
        orderDate: '2021-01-02',
        wlNumber: 5,
        wlCount: 1030,
        date: '2021-03-05'
    },
    {   id:6,
        orderId: 8834121,
        orderDate: '2021-01-02',
        wlNumber: 6,
        wlCount: 1200,
        date: '2021-03-12'
    },
    {   id:7,
        orderId: 8834121,
        orderDate: '2021-01-02',
        wlNumber: 7,
        wlCount: 1010,
        date: '2021-03-22'
    },
    {   id:8,
        orderId: 88322211,
        orderDate: '2021-01-02',
        wlNumber: 8,
        wlCount: 10,
        date: '2021-03-05'
    },
]

const testData = [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'vxe-table 从入门到放弃' },
    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'vxe-table 从入门到放弃' },
    { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'vxe-table 从入门到放弃' }
  ]
  const tableData = [
    { id: 1, name: '东风轻型发动机有限公司', shipto: 'shipto 1', source: {'name':'客户订单A',link:'https://a.com'}, date: '2021-01-02', delines: '', awt:'',lop:'' },
    { id: 2, name: 'A轻型发动机有限公司', shipto: 'shipto 2', source: {'name':'客户订单B',link:'https://a.com'}, date: '2021-07-02', delines: '', awt:'',lop:'' },
    { id: 3, name: 'C轻型发动机有限公司', shipto: 'shipto 3', source: {'name':'客户订单C',link:'https://a.com'}, date: '2021-02-09', delines: '', awt:'',lop:'' },
    { id: 4, name: 'D轻型发动机有限公司', shipto: 'shipto 4', source: {'name':'客户订单D',link:'https://a.com'}, date: '2021-09-02', delines: '', awt:'',lop:'' },
    { id: 5, name: '东风轻型发动机有限公司', shipto: 'shipto 1', source: {'name':'客户订单A',link:'https://a.com'}, date: '2021-01-02', delines: '', awt:'',lop:'' },
    { id: 6, name: 'A轻型发动机有限公司', shipto: 'shipto 2', source: {'name':'客户订单B',link:'https://a.com'}, date: '2021-07-02', delines: '', awt:'',lop:'' },
    { id: 8, name: 'C轻型发动机有限公司', shipto: 'shipto 3', source: {'name':'客户订单C',link:'https://a.com'}, date: '2021-02-09', delines: '', awt:'',lop:'' },
    { id: 7, name: 'D轻型发动机有限公司', shipto: 'shipto 4', source: {'name':'客户订单D',link:'https://a.com'}, date: '2021-09-02', delines: '', awt:'',lop:'' },
    { id: 9, name: '东风轻型发动机有限公司', shipto: 'shipto 1', source: {'name':'客户订单A',link:'https://a.com'}, date: '2021-01-02', delines: '', awt:'',lop:'' },
    { id: 10, name: 'A轻型发动机有限公司', shipto: 'shipto 2', source: {'name':'客户订单B',link:'https://a.com'}, date: '2021-07-02', delines: '', awt:'',lop:'' },
    { id: 11, name: 'C轻型发动机有限公司', shipto: 'shipto 3', source: {'name':'客户订单C',link:'https://a.com'}, date: '2021-02-09', delines: '', awt:'',lop:'' },
    { id: 12, name: 'D轻型发动机有限公司', shipto: 'shipto 4', source: {'name':'客户订单D',link:'https://a.com'}, date: '2021-09-02', delines: '', awt:'',lop:'' },
    { id: 13, name: '东风轻型发动机有限公司', shipto: 'shipto 1', source: {'name':'客户订单A',link:'https://a.com'}, date: '2021-01-02', delines: '', awt:'',lop:'' },
    { id: 14, name: 'A轻型发动机有限公司', shipto: 'shipto 2', source: {'name':'客户订单B',link:'https://a.com'}, date: '2021-07-02', delines: '', awt:'',lop:'' },
    { id: 15, name: 'C轻型发动机有限公司', shipto: 'shipto 3', source: {'name':'客户订单C',link:'https://a.com'}, date: '2021-02-09', delines: '', awt:'',lop:'' },
    { id: 16, name: 'D轻型发动机有限公司', shipto: 'shipto 4', source: {'name':'客户订单D',link:'https://a.com'}, date: '2021-09-02', delines: '', awt:'',lop:'' },
]

const kfInfos = [{
    key: 1,
    text: '客户A'
},{
    key: 2,
    text: '客户B'
}, {
    key: 3,
    text: '客户C'
}]

const shipTo =  [{
    key: 1,
    text: 'shipTo A'
},{
    key: 2,
    text: 'shipTo B'
}, {
    key: 3,
    text: 'shipTo C'
}]

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


function copy (obj) {
    var newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    }
    for(var i in obj){
       newobj[i] = typeof obj[i] === 'object' ? copy(obj[i]) : obj[i];
    }
    return newobj
}
const TiquDataCopy = copy(tiquData)

export {tiquData, testData, tableData, kfInfos, shipTo, validRules, TiquDataCopy, tiquKeyAndColumnIndexMap}