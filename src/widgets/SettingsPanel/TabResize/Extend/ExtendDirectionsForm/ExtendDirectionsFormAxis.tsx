'use client'

import { ColumnSpacingIcon, RowSpacingIcon } from '@radix-ui/react-icons'

import { OptionNumberInput } from '@widgets/SettingsPanel/OptionNumberInput'
import { useExtendStore } from '@stores/extend'
import { DEFAULT_EXTEND_INPUT_PROPS } from '@server/Sharp'

export function ExtendDirectionsFormAxis() {
  const axisX = useExtendStore(state => state.getXAxis())
  const axisY = useExtendStore(state => state.getYAxis())

  const setAxisX = useExtendStore(state => state.setXAxis)
  const setAxisY = useExtendStore(state => state.setYAxis)

  const resetAxisX = useExtendStore(state => state.resetXAxis)
  const resetAxisY = useExtendStore(state => state.resetYAxis)

  return (
    <>
      <OptionNumberInput
        {...DEFAULT_EXTEND_INPUT_PROPS}
        value={axisX}
        setValue={setAxisX}
        resetValue={resetAxisX}
        placeholder='X'
        icon={<ColumnSpacingIcon />}
      />
      <OptionNumberInput
        {...DEFAULT_EXTEND_INPUT_PROPS}
        value={axisY}
        setValue={setAxisY}
        resetValue={resetAxisY}
        placeholder='Y'
        icon={<RowSpacingIcon />}
      />
    </>
  )
}