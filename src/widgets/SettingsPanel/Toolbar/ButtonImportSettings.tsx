'use client'

import { useState } from 'react'

import { ButtonImport } from '@ui/ButtonImport'
import { ConfirmAlert } from '@components/alerts/ConfirmAlert'
import { useSettingsSetters } from '@stores/hooks/useSettingsSetters'
import { YupSettingsValidator } from '@utils/YupSettingsValidator'
import type { ConvertSettings } from '@server/Sharp'

export function ButtonImportSettings() {
  const [data, setData] = useState<ConvertSettings | null>(null)
  const [isConfirmAlertOpen, setIsConfirmAlertOpen] = useState(false)
  const [isValidationAlertOpen, setIsValidationAlertOpen] = useState(false)

  const { setters } = useSettingsSetters()

  const handleOpenConfirmAlert = () => setIsConfirmAlertOpen(true)
  const handleCloseConfirmAlert = () => setIsConfirmAlertOpen(false)

  const handleOpenValidationAlert = () => setIsValidationAlertOpen(true)
  const handleCloseValidationAlert = () => setIsValidationAlertOpen(false)

  const handleImport = async (file: File | null): Promise<void> => {
    if (!file) return

    const fileReader = new FileReader()
    const fileReaderPromise = new Promise<string>((resolve, reject) => {
      fileReader.onload = () => {
        const result = fileReader.result

        if (!result) {
          reject('Failed to read file')
        }

        resolve(result as string)
      }

      fileReader.onerror = reject
    })

    fileReader.readAsText(file)

    try {
      const settingsJSON = await fileReaderPromise
      const settings = JSON.parse(settingsJSON)
      const isValid = YupSettingsValidator.validate(settings)

      if (!isValid) {
        handleCloseConfirmAlert()
        handleOpenValidationAlert()

        return Promise.reject(new Error('Invalid settings'))
      }

      setData(settings as ConvertSettings)
      handleOpenConfirmAlert()
    } catch {
      handleOpenValidationAlert()
    }
  }

  const handleConfirmImport = () => {
    handleCloseConfirmAlert()

    if (!data) return

    for (const [key, value] of Object.entries(data)) {
      if (!(key in setters)) continue

      // eslint-disable-next-line
      // @ts-expect-error
      setters[key](value)
    }
  }

  const handleCancelImport = () => {
    handleCloseConfirmAlert()
    setData(null)
  }

  return (
    <>
      <ButtonImport accept='.json' tooltipContent='Import Settings' setFile={handleImport} />

      {isConfirmAlertOpen && (
        <ConfirmAlert
          open={isConfirmAlertOpen}
          title='Confirm Import'
          description='Are you sure? All settings will be overwritten!'
          onConfirm={handleConfirmImport}
          onCancel={handleCancelImport}
        />
      )}

      {isValidationAlertOpen && (
        <ConfirmAlert
          open={isValidationAlertOpen}
          title='Invalid Settings'
          description='Please check the JSON format'
          canselLabel='Close'
          withTitleExclamation
          onCancel={handleCloseValidationAlert}
        />
      )}
    </>
  )
}
