import type { ExtendOptions, ExtendWith } from '@server/Sharp'

export type Store = State & Computed & Actions

export const enum DirectionModel {
  NUMBER = 'number',
  AXIS = 'axis',
  SEPARATED = 'separated'
}

export interface ExtendValues extends Omit<ExtendOptions, 'background' | 'extendWith'> {
  extendValue: number | null
}

export interface State extends ExtendOptions, Pick<ExtendValues, 'extendValue'> {
  directionModel: DirectionModel
}

interface Computed {
  isEmpty: () => boolean
  isXAxisEmpty: () => boolean
  isYAxisEmpty: () => boolean

  getExtendOptions: () => ExtendOptions | null
  getMinValue: () => number | null

  getXAxis: () => number | null
  getYAxis: () => number | null
}

/* eslint no-unused-vars: 0 */
interface Actions {
  set: (options: ExtendOptions | null) => void
  reset: VoidFunction

  setDirectionModel: (inputMode: DirectionModel) => void

  // Default
  setExtendValue: (value: number | null) => void

  // Axis
  setXAxis: (value: number | null) => void
  setYAxis: (value: number | null) => void

  // Separated
  setLeft: (left: number | null) => void
  setTop: (top: number | null) => void
  setRight: (right: number | null) => void
  setBottom: (bottom: number | null) => void

  setBackground: (background: string) => void
  setExtendWith: (extendWith: ExtendWith) => void
}
