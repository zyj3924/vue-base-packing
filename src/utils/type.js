/* eslint-disable use-isnan */
/* eslint-disable no-useless-escape */
export default {
    /**
     * 是否字符串
     * @param o
     * @returns {boolean}
     */
    isString(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'String'
    },
    /**
     * 是否数字
     * @param o
     * @returns {boolean}
     */
    isNumber(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
    },
    /**
     * 是否boolean
     * @param o
     * @returns {boolean}
     */
    isBoolean(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
    },
    /**
     * 是否函数
     * @param o
     * @returns {boolean}
     */
    isFunction(o) {
        //
        return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
    },
    /**
     * 是否为null
     * @param o
     * @returns {boolean}
     */
    isNull(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
    },
    /**
     * 是否undefined
     * @param o
     * @returns {boolean}
     */
    isUndefined(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
    },

    /**
     * 是否对象
     * @param o
     * @returns {boolean}
     */
    isObj(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
    },

    /**
     * 是否数组
     * @param o
     * @returns {boolean}
     */
    isArray(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
    },

    /**
     * 是否时间
     * @param o
     * @returns {boolean}
     */
    isDate(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
    },

    /**
     * 是否正则
     * @param o
     * @returns {boolean}
     */
    isRegExp(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
    },

    /**
     * 是否错误对象
     * @param o
     * @returns {boolean}
     */
    isError(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
    },

    /**
     * 是否Symbol函数
     * @param o
     * @returns {boolean}
     */
    isSymbol(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
    },

    /**
     * 是否Promise对象
     * @param o
     * @returns {boolean}
     */
    isPromise(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
    },

    /**
     * 是否Set对象
     * @param o
     * @returns {boolean}
     */
    isSet(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
    },

    /**
     * 是否有对象
     * @param o
     * @returns {boolean}
     */
    isFalse(o) {
        if (
            o == '' ||
            o == undefined ||
            o == null ||
            o == 'null' ||
            o == 'undefined' ||
            o == 0 ||
            o == false ||
            o == NaN
        )
            return true
        return false
    },

    /**
     * 对象取反值
     * @param o
     * @returns {boolean}
     */
    isTrue(o) {
        return !this.isFalse(o)
    },

    /**
     * 判断终端
     * @returns {string}
     */
    isNavigator() {
        let u = navigator.userAgent
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
            return 'Android'
        } else if (u.indexOf('iPhone') > -1) {
            return 'iPhone'
        } else if (u.indexOf('iPad') > -1) {
            return 'iPad'
        } else if (u.indexOf('Windows Phone') > -1) {
            return 'Windows Phone'
        } else {
            return 'other'
        }
    },

    /**
     * 判断是否是PC端
     * @returns {boolean}
     */
    isPC() {
        let userAgentInfo = navigator.userAgent
        let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
        var flag = true
        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false
                break
            }
        }
        return flag
    },

    /**
     * 判断浏览器内核
     * @returns {string}
     */
    browserType() {
        var userAgent = navigator.userAgent //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf('Opera') > -1 //判断是否Opera浏览器
        var isIE =
            userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera //判断是否IE浏览器
        var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
        var isEdge = userAgent.indexOf('Edge') > -1 && !isIE //判断是否IE的Edge浏览器
        var isFF = userAgent.indexOf('Firefox') > -1 //判断是否Firefox浏览器
        var isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1 //判断是否Safari浏览器
        var isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1 //判断Chrome浏览器

        if (isIE) {
            var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
            reIE.test(userAgent)
            var fIEVersion = parseFloat(RegExp['$1'])
            if (fIEVersion == 7) return 'IE7'
            else if (fIEVersion == 8) return 'IE8'
            else if (fIEVersion == 9) return 'IE9'
            else if (fIEVersion == 10) return 'IE10'
            else return 'IE7以下' //IE版本过低
        }
        if (isIE11) return 'IE11'
        if (isEdge) return 'Edge'
        if (isFF) return 'FF'
        if (isOpera) return 'Opera'
        if (isSafari) return 'Safari'
        if (isChrome) return 'Chrome'
    },

    /**
     * 正则校验
     * @param str
     * @param type
     * @returns {boolean}
     */
    checkStr(str, type) {
        switch (type) {
            case 'phone': //手机号码
                return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str)
            case 'tel': //座机
                return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
            case 'card': //身份证
                return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
            case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
                return /^[a-zA-Z]\w{5,17}$/.test(str)
            case 'postal': //邮政编码
                return /[1-9]\d{5}(?!\d)/.test(str)
            case 'QQ': //QQ号
                return /^[1-9][0-9]{4,9}$/.test(str)
            case 'email': //邮箱
                return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
            case 'money': //金额(小数点2位)
                return /^\d*(?:\.\d{0,2})?$/.test(str)
            case 'URL': //网址
                return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(
                    str,
                )
            case 'IP': //IP
                return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(
                    str,
                )
            case 'date': //日期时间
                return (
                    /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) ||
                    /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
                )
            case 'number': //数字
                return /^[0-9]$/.test(str)
            case 'english': //英文
                return /^[a-zA-Z]+$/.test(str)
            case 'chinese': //中文
                return /^[\u4E00-\u9FA5]+$/.test(str)
            case 'lower': //小写
                return /^[a-z]+$/.test(str)
            case 'upper': //大写
                return /^[A-Z]+$/.test(str)
            case 'HTML': //HTML标记
                return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str)
            default:
                return true
        }
    },

    /**
     * 严格的身份证校验
     * @param sId
     * @returns {boolean}
     */
    isCardID(sId) {
        if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
            //alert('你输入的身份证长度或格式错误')
            return false
        }
        //身份证城市
        let aCity = {
            11: '北京',
            12: '天津',
            13: '河北',
            14: '山西',
            15: '内蒙古',
            21: '辽宁',
            22: '吉林',
            23: '黑龙江',
            31: '上海',
            32: '江苏',
            33: '浙江',
            34: '安徽',
            35: '福建',
            36: '江西',
            37: '山东',
            41: '河南',
            42: '湖北',
            43: '湖南',
            44: '广东',
            45: '广西',
            46: '海南',
            50: '重庆',
            51: '四川',
            52: '贵州',
            53: '云南',
            54: '西藏',
            61: '陕西',
            62: '甘肃',
            63: '青海',
            64: '宁夏',
            65: '新疆',
            71: '中国台湾',
            81: '中国香港',
            82: '中国澳门',
            91: '国外',
        }
        if (!aCity[parseInt(sId.substr(0, 2))]) {
            //alert('你的身份证地区非法')
            return false
        }

        // 出生日期验证
        let sBirthday = (
                sId.substr(6, 4) +
                '-' +
                Number(sId.substr(10, 2)) +
                '-' +
                Number(sId.substr(12, 2))
            ).replace(/-/g, '/'),
            d = new Date(sBirthday)
        if (sBirthday != d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()) {
            //alert('身份证上的出生日期非法')
            return false
        }

        // 身份证号码校验
        let sum = 0,
            weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
            codes = '10X98765432'
        for (let i = 0; i < sId.length - 1; i++) {
            sum += sId[i] * weights[i]
        }
        let last = codes[sum % 11] //计算出来的最后一位身份证号码
        if (sId[sId.length - 1] != last) {
            //alert('你输入的身份证号非法')
            return false
        }

        return true
    },
}
