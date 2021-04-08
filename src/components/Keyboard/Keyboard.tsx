import React, {FunctionComponent} from 'react'
import { OcataveRange, selectKey } from '../../domain/keyboard'
import { notes, OctaveIndex } from '../../domain/note'
import { Key } from '../Key/Key'

const Keyboard: FunctionComponent = () => {
  return (
    <div className="keyboard">
      {notes.map(({midi, type, index, octave}) => {
        const label = selectKey(octave as OcataveRange, index)
        return <Key key={midi} type={type} label={label}/>
      })}
    </div>
  )
}

export default Keyboard
