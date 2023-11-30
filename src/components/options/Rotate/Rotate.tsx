'use client'

import { Flex } from '@radix-ui/themes'

import { ButtonAddRotate } from './ButtonAddRotate'
import { SliderRotateAngle } from './SliderRotateAngle'
import { RotateBackgroundPopover } from './RotateBackgroundPopover'
import { useRotateStore } from '@stores/rotate'
import { RotateHeader } from './RotateHeader.tsx'

export function Rotate() {
  const isAdded = useRotateStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>
        {isAdded ? (
          <Flex direction='column' gap='2' width='100%'>
            <RotateHeader />
            <Flex direction='column' align='start' gap='4' width='100%'>
              <SliderRotateAngle />
              <RotateBackgroundPopover />
            </Flex>
          </Flex>
        ) : (
          <ButtonAddRotate />
        )}
      </section>
    </Flex>
  )
}
