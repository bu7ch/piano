import { useRef } from "react";
import { accesContex,  } from "../../domain/audio"
import { Optional } from "../../domain/types";


export function useAudioContext(): Optional<AudioContextType>{
   const AudioCtx = useRef(accesContex())
   return AudioCtx.current
}