/*
 * @Author: your name
 * @Date: 2021-03-16 09:49:01
 * @LastEditTime: 2021-03-16 10:01:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-ts-family-learn\src\reportWebVitals.ts
 */
import { ReportHandler } from 'web-vitals'

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
