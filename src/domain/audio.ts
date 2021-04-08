import {Optional} from "./types"

export function accesContex(): Optional<AudioContextType> {
  return window.AudioContext || window.webkitAudioContext || null
}