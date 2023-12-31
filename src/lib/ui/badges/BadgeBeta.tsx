import { Badge, type MarginProps, Tooltip } from '@radix-ui/themes'

import type { BadgeProps } from '@lib/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export function BadgeBeta(props: Props) {
  return (
    <Tooltip content='This feature is in beta. It may not work as expected'>
      <Badge size='1' color='orange' {...props}>
        Beta
      </Badge>
    </Tooltip>
  )
}

type Props = BadgeProps & MarginProps & ClassNameProps
