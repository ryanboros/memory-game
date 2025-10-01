<script lang="ts">
import CircleSvg from '@/assets/circle.svg'
import ClubSvg from '@/assets/club.svg'
import DiamondSvg from '@/assets/diamond.svg'
import FireSvg from '@/assets/fire.svg'
import HeartSvg from '@/assets/heart.svg'
import LeafSvg from '@/assets/leaf.svg'
import MoonSvg from '@/assets/moon.svg'
import PlanetSvg from '@/assets/planet.svg'
import PlusSvg from '@/assets/plus.svg'
import SmileSvg from '@/assets/smile.svg'
import SpadeSvg from '@/assets/spade.svg'
import SquareSvg from '@/assets/square.svg'
import StarSvg from '@/assets/star.svg'
import SunSvg from '@/assets/sun.svg'
import TriangleSvg from '@/assets/triangle.svg'
import WaterSvg from '@/assets/water.svg'
import WavesSvg from '@/assets/waves.svg'
import WindSvg from '@/assets/wind.svg'
import { CardIcon } from '@/lib/constants'

export default {
  components: {
    CircleSvg,
    ClubSvg,
    DiamondSvg,
    FireSvg,
    HeartSvg,
    LeafSvg,
    MoonSvg,
    PlanetSvg,
    PlusSvg,
    SmileSvg,
    SpadeSvg,
    SquareSvg,
    StarSvg,
    SunSvg,
    TriangleSvg,
    WaterSvg,
    WavesSvg,
    WindSvg,
  },
}
</script>

<script setup lang="ts">
import { computed, defineComponent, ref, resolveComponent, toRefs } from 'vue'

const props = defineProps(['cardValue'])

const { cardValue } = toRefs(props)

const val = ref(cardValue.value)

const activeIcon = computed(() => resolveComponent(CardIcon(cardValue.value)))
</script>

<template>
  <div
    class="w-full h-24 border-1 border-stone-400 bg-white rounded-lg flex items-center justify-center"
  >
    <component class="svg-image" :is="activeIcon" />
  </div>
</template>

<style lang="css" scoped>
.svg-image {
  filter: invert(53%) sepia(41%) saturate(4038%) hue-rotate(160deg) brightness(92%) contrast(101%);
  height: 60px;
  width: 60px;
}
</style>
