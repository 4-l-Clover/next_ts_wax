/* eslint-disable react/display-name */
import React from 'react'
import { Select } from 'antd'
const Option = Select.Option

type SelectProps = {
  className: string;
  value: any;
  options: any;
  nameField: string,
  valueField: string,
  placeholder?: string,
  size: any;
  onSelect: React.MouseEventHandler<HTMLButtonElement>,
}

export default function SelectBox (props: SelectProps) {
  const { className, size, value, options, nameField, valueField, onSelect, placeholder } = props

  return (
    <div className='form-group'>
      <Select
        size={size}
        value={value}
        className={'form-control font-poppins font-medium text-sm text-almost_white ' + className}
        onChange={(value) => onSelect(value)}
        placeholder={placeholder}
      >
        {options.map(option =>
          <Option value={option[valueField]} key={option[valueField]}>{option[nameField]}</Option>
        )}
      </Select>
    </div>
  )
}
