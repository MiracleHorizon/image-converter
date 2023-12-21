import { ShadowIcon } from '@radix-ui/react-icons'

import { OptionSectionHeader } from '@widgets/SettingsPanel/OptionSectionHeader'
import { ButtonResetGamma } from './ButtonResetGamma'
import { ButtonRemoveGamma } from './ButtonRemoveGamma'
import type { GammaOptions } from '@libs/Sharp'

export function GammaHeader({ gamma }: Props) {
  return (
    <OptionSectionHeader
      title={`Gamma: ${gamma.value}`}
      icon={<ShadowIcon width='18px' height='18px' />}
    >
      <>
        <ButtonResetGamma />
        <ButtonRemoveGamma />
      </>
    </OptionSectionHeader>
  )
}

interface Props {
  gamma: GammaOptions
}