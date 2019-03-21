import { BendType } from "./effects/bend"
import { HammerType } from "./effects/hammer"
import { HarmonicType } from "./effects/harmonic"
import { PalmMuteType } from "./effects/palm-mute"
import { ReverbType } from "./effects/reverb"
import { SlideType } from "./effects/slide"

export interface EffectType {
  effects: Array<BendType | ReverbType | SlideType | PalmMuteType | HarmonicType | HammerType>,
}
