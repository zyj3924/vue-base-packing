const fullValidEvent =  async function ($table, formatErrorMap) {
    const errMap = await $table.fullValidate(true).catch(errMap => errMap)
    if (errMap) {
      Object.values(errMap).forEach(errList => {
        errList.forEach(params => {
          const { rowIndex, columnIndex} = params
          formatErrorMap.set(rowIndex, columnIndex)
        })
      })
      $table.clearValidate()
      return false
    } else {
      $table.clearValidate()
      console.log({ status: 'success', message: '校验成功！' })
      return true
    }
    
}
export {fullValidEvent}

