import { Flex, Separator } from '@radix-ui/themes'

import { ButtonConvert } from './ButtonConvert'
import { ButtonDownload } from './ButtonDownload'
import { useConvertImage } from '@stores/hooks/useConvertImage'
import styles from './FooterPanelContent.module.css'

export function FooterPanelContent(props: Props) {
  return (
    <Flex align='center' justify='end' gap='3' height='100%' width='100%' className={styles.root}>
      <ButtonDownload />
      <Separator orientation='vertical' size='2' />
      <ButtonConvert {...props} />
    </Flex>
  )
}

type Props = Pick<ReturnType<typeof useConvertImage>, 'isPending' | 'handleConvertImage'>
