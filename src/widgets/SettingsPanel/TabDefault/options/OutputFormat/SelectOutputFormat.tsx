'use client'

import { useCallback } from 'react'

import { OptionSelect } from '@components/OptionSelect'
import { useOutputStore } from '@stores/output'
import { ImageFileFormat } from '@server/Sharp'

const data = [
  {
    label: 'Output format',
    value: Object.values(ImageFileFormat)
  }
]

export function SelectOutputFormat() {
  const outputFormat = useOutputStore(state => state.outputFormat)
  const setOutputFormat = useOutputStore(state => state.setOutputFormat)

  const handleChangeOutputFormat = useCallback(
    (value: ImageFileFormat) => setOutputFormat(value),
    [setOutputFormat]
  )

  if (!outputFormat) {
    return null
  }

  return (
    <OptionSelect
      label='Output format'
      withItemValueCapitalize={false}
      triggerLabelSize='3'
      value={outputFormat}
      data={data}
      onValueChange={handleChangeOutputFormat}
    />
  )
}
