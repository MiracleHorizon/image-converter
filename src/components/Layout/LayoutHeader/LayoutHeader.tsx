import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Box, Flex } from '@radix-ui/themes'

import { ButtonGithub } from './ButtonGithub'
import { DocumentationLink } from './DocumentationLink'
import { SettingsPopoverSkeleton } from './SettingsPopover'
import { Route } from '@shared/router'
import type { ThemeProps } from '@shared/theme'
import styles from './LayoutHeader.module.css'

const SettingsPopover = dynamic(
  () => import('./SettingsPopover').then(mod => mod.SettingsPopover),
  {
    ssr: false,
    loading: () => <SettingsPopoverSkeleton />
  }
)

export function LayoutHeader(settingsPopoverProps: ThemeProps) {
  return (
    <Flex
      asChild
      align='center'
      justify='between'
      width='100%'
      height='8'
      px='4'
      py='2'
      className={styles.root}
    >
      <header>
        <Box asChild width='6' height='6' className={styles.logo}>
          <Link href={Route.HOME} />
        </Box>
        <Flex align='center' height='100%'>
          <DocumentationLink />
          <Flex align='center' gap='4'>
            <ButtonGithub />
            <SettingsPopover {...settingsPopoverProps} />
          </Flex>
        </Flex>
      </header>
    </Flex>
  )
}
