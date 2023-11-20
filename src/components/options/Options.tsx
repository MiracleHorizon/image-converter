import { Flex, Separator } from '@radix-ui/themes'

import { BasicOptions } from './Basic'
import { Negate } from './Negate'
import { Blur } from './Blur'
import { Rotate } from './Rotate'
import { Normalise } from './Normalise'

const SectionSeparator = () => <Separator my='1' size='4' />

export function Options() {
  return (
    <Flex gap='2' direction='column' my='4' py='2'>
      <BasicOptions />
      <SectionSeparator />
      <Negate />
      <SectionSeparator />
      <Blur />
      <SectionSeparator />
      <Rotate />
      <SectionSeparator />
      <Normalise />
    </Flex>
  )
}