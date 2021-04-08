import { OctaveIndex, PitchIndex } from './note'

export type Key = string 
export type Keys = Key[]

export type OcataveRange = Extract<OctaveIndex, 4 | 5>

export const TOP_ROW: Keys = Array.from("q2w3er5t6y7up")
export const BOTTOM_ROW: Keys = Array.from("zsxdcvgbhnjm")

export function selectKey(octave: OcataveRange, index: PitchIndex):Key {
  const keyRow = octave < 5 ? TOP_ROW : BOTTOM_ROW
  return keyRow[index]
}
