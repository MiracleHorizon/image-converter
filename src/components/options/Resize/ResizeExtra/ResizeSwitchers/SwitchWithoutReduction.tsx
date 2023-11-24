'use client'

import { useCallback } from 'react'

import { OptionSwitch } from '@components/OptionSwitch'
import { useResizeStore } from '@stores/resize'

export function SwitchWithoutReduction() {
  const withoutReduction = useResizeStore(state => state.extra?.withoutReduction)
  const toggleReduction = useResizeStore(state => state.toggleReduction)

  const handleToggleWithoutReduction = useCallback(() => toggleReduction(), [toggleReduction])

  return (
    <OptionSwitch
      checked={withoutReduction}
      title='Without reduction'
      onClick={handleToggleWithoutReduction}
    />
  )
}