'use client'

import { forwardRef } from 'react'
import { IconButton } from '@radix-ui/themes'
import { TrashIcon } from '@radix-ui/react-icons'

import { themeColor } from '@shared/theme'

export const ButtonDelete = forwardRef<HTMLButtonElement, Props>((props: Props, ref) => (
  <IconButton ref={ref} size='2' color={themeColor} data-accent-color={themeColor} {...props}>
    <TrashIcon width='24px' height='24px' />
  </IconButton>
))

ButtonDelete.displayName = 'ButtonDelete'

interface Props {
  onClick: VoidFunction
  disabled?: boolean
}
