import React from 'react'
import './index.scss'

type SvgProps = {
    iconClass?:string,
    fill?:string
}
export default function SvgIcon (props:SvgProps):JSX.Element {
  const { iconClass, fill } = props
  return (
        <svg className="svg-class" aria-hidden="true">
            <use xlinkHref={'#icon-' + iconClass} fill={fill} />
        </svg>
  )
}
