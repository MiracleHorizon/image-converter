import { useCallback } from 'react'

import { ButtonReset } from '@components/ButtonReset'
import { useGammaStore } from '@stores/gamma'

export function ButtonResetGamma() {
  const resetGamma = useGammaStore(state => state.reset)

  const handleResetGamma = useCallback(() => resetGamma(), [resetGamma])

  return <ButtonReset tooltipTitle='Reset gamma' onClick={handleResetGamma} />
}