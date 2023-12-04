import { Heading, type MarginProps } from '@radix-ui/themes'

export function SettingsPopoverTitle({ title, ...props }: Props) {
  return (
    <Heading {...props} size='2' weight='medium'>
      {title}
    </Heading>
  )
}

interface Props extends MarginProps {
  title: string
}
