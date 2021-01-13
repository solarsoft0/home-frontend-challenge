import React, { FC } from 'react'

// todo improve typing. DOMElementAttr

type BaseButtonProps = {
  type: 'submit' | 'button' | 'reset'
  className?: string
  form?: string
  onClick?: () => void
}
const BaseButton: FC<BaseButtonProps> = (props) => {
  const { children, className } = props

  return (
    <button
      {...props}
      className={`shadow text-sm font-semibold bg-lemon hover:bg-lightlemon px-4 py-3 rounded-full text-white min-w-button ${className}`}
    >
      {children}
    </button>
  )
}

export default BaseButton
