import { Flex, Separator } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'

import { optionsPadding } from '@components/options'
import styles from './OptionsSkeleton.module.css'

function SwitchSkeleton() {
  return (
    <Flex align='center' width='100%'>
      <Skeleton inline count={1} height={24} containerClassName={styles.widthFull} />
      <Skeleton inline count={1} height={24} width={42} className={styles.switch} />
    </Flex>
  )
}

function ButtonSkeleton() {
  return <Skeleton inline count={1} height={32} width='145px' />
}

export function OptionsSkeleton() {
  return (
    <Flex direction='column' width='100%' {...optionsPadding} gap='2'>
      <Flex direction='column' gap='2'>
        <SwitchSkeleton />
        <SwitchSkeleton />
        <SwitchSkeleton />
      </Flex>
      <Separator my='1' size='4' />
      <Flex direction='column' gap='2'>
        <SwitchSkeleton />
        <SwitchSkeleton />
      </Flex>
      <Separator my='1' size='4' />
      <SwitchSkeleton />
      <ButtonSkeleton />
      <Separator my='1' size='4' />
      <ButtonSkeleton />
      <Separator my='1' size='4' />
      <ButtonSkeleton />
      <Separator my='1' size='4' />
      <ButtonSkeleton />
      <Separator my='1' size='4' />
      <ButtonSkeleton />
      <Separator my='1' size='4' />
      <ButtonSkeleton />
      <Separator my='1' size='4' />
      <ButtonSkeleton />
    </Flex>
  )
}