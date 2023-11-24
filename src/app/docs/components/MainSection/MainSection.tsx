import { DocsSection } from '../DocsSection'
import {
  BlurRow,
  FlipRow,
  FlopRow,
  GrayscaleRow,
  NegateAlphaRow,
  NegateRow,
  NormaliseRow,
  RotateAngleRow,
  RotateBackgroundRow,
  TintRow
} from './rows'

export function MainSection() {
  return (
    <DocsSection title='Main'>
      <>
        <FlipRow />
        <FlopRow />
        <NegateRow />
        <NegateAlphaRow />
        <GrayscaleRow />
        <BlurRow />
        <RotateAngleRow />
        <RotateBackgroundRow />
        <NormaliseRow />
        <TintRow />
      </>
    </DocsSection>
  )
}
