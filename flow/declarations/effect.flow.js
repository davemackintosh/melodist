// @flow

import type { BendType } from "./effects/bend.flow"
import type { ReverbType } from "./effects/reverb.flow"
import type { SlideType } from "./effects/slide.flow"
import type { PalmMuteType } from "./effects/palm-mute.flow"
import type { HarmonicType } from "./effects/harmonic.flow"
import type { HammerType } from "./effects/hammer.flow"

export type EffectType = {
  effect: BendType | ReverbType | SlideType | PalmMuteType | HarmonicType | HammerType
}
