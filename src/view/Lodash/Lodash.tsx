/*
 * @Author: your name
 * @Date: 2021-03-16 13:34:32
 * @LastEditTime: 2021-03-16 14:30:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-ts-family-learn\src\view\Lodash\Lodash.tsx
 */
import React, { ChangeEvent, useState } from 'react'
// import _ from 'lodash'
export default function Lodash (): JSX.Element {
  const [size] = useState(1)
  const [chunkArr] = useState([1, 2, 3, 4])
  const chunk = (e:ChangeEvent) => {
    console.log(e)
  }
  return (
        <>
        <h1>Lodash</h1>
        <p>chunk将数组拆分成多个size长度的区块，并将这些区块组成一个新数组</p>
        <p>参数1：array 需要处理的数组</p>
        <p>参数2：size 每个数组区块的长度</p>
        <label htmlFor="size">Size</label>
        <input placeholder="请输入区块长度" onChange={chunk} />
        <code>
          const arr = [1,2,3,4]
          const size = {size}
          const chunkArr = {chunkArr}
        </code>
        </>
  )
}
