import { OptionSwitch } from '@components/OptionSwitch'
import { useConvertStore } from '@stores/convert'

export function SwitchFlip() {
  const flip = useConvertStore(state => state.flip)
  const toggleFlip = useConvertStore(state => state.toggleFlip)

  const handleToggleFlip = () => toggleFlip()

  return <OptionSwitch title='Flip' checked={flip} onClick={handleToggleFlip} />
}
