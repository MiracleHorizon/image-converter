import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import { clsx } from 'clsx'
import type { PropsWithChildren } from 'react'

import styles from './ConfirmAlert.module.css'

export function ConfirmAlert({
  children,
  title,
  description,
  open,
  onConfirm,
  onCancel,
  contentClassName
}: Props) {
  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Trigger>{children}</AlertDialog.Trigger>

      <AlertDialog.Content size='1' className={clsx(styles.content, contentClassName)}>
        <Flex direction='column'>
          <AlertDialog.Title align='center'>{title}</AlertDialog.Title>

          <AlertDialog.Description align='center'>{description}</AlertDialog.Description>

          <Flex gap='3' justify='end' mt='5'>
            <AlertDialog.Cancel>
              <Button color='gray' variant='soft' className={styles.button} onClick={onCancel}>
                Cancel
              </Button>
            </AlertDialog.Cancel>

            <AlertDialog.Action>
              <Button className={styles.button} onClick={onConfirm}>
                Confirm
              </Button>
            </AlertDialog.Action>
          </Flex>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}

type Props = PropsWithChildren<{
  title: string
  description: string
  onConfirm: VoidFunction
  open?: boolean
  onCancel?: VoidFunction
  contentClassName?: string
}>
