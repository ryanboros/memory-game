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
import { computed, resolveComponent, toRefs } from 'vue'

const props = defineProps(['cardStatus', 'cardValue'])

const { cardStatus, cardValue } = toRefs(props)

const activeIcon = computed(() => resolveComponent(CardIcon(cardValue.value)))
const bgColor = computed(() => {
  if (cardStatus.value === 'match') return 'bg-sky-200'
  if (cardStatus.value === 'right') return 'bg-green-200'
  if (cardStatus.value === 'wrong') return 'bg-red-200'

  return 'bg-white'
})
const isShowing = computed(() => cardStatus.value === 'show')
const isWrong = computed(() => cardStatus.value === 'wrong')
const isRight = computed(() => cardStatus.value === 'right')
const matchIconClass = computed(() =>
  cardStatus.value === 'match' ? 'MatchSvg' : CardIcon(cardValue.value),
)
</script>

<template>
  <div
    class="w-full h-26 border-1 border-stone-400 rounded-lg flex items-center justify-center"
    :class="[{ flipCard: isShowing, shakeCard: isWrong, jellowCard: isRight }, bgColor]"
  >
    <component class="svg-image" :class="matchIconClass" :is="activeIcon" />
  </div>
</template>

<style lang="css" scoped>
.svg-image {
  height: 60px;
  width: 60px;
}

.MatchSvg {
  filter: invert(100%) sepia(41%) saturate(1%) hue-rotate(284deg) brightness(122%) contrast(100%);
}

.CircleSvg {
  filter: invert(21%) sepia(55%) saturate(885%) hue-rotate(130deg) brightness(95%) contrast(91%);
}

.ClubSvg {
  filter: invert(32%) sepia(11%) saturate(902%) hue-rotate(176deg) brightness(91%) contrast(84%);
  height: 50px;
  width: 50px;
}

.DiamondSvg {
  filter: invert(16%) sepia(52%) saturate(7492%) hue-rotate(350deg) brightness(73%) contrast(114%);
  height: 50px;
  width: 50px;
}

.FireSvg {
  filter: invert(30%) sepia(35%) saturate(4939%) hue-rotate(13deg) brightness(102%) contrast(111%);
}

.HeartSvg {
  filter: invert(66%) sepia(40%) saturate(6490%) hue-rotate(319deg) brightness(103%) contrast(101%);
  height: 50px;
  width: 50px;
}

.LeafSvg {
  filter: invert(30%) sepia(75%) saturate(789%) hue-rotate(102deg) brightness(102%) contrast(101%);
}

.MoonSvg {
  filter: invert(26%) sepia(63%) saturate(2624%) hue-rotate(183deg) brightness(90%) contrast(102%);
}

.PlanetSvg {
  filter: invert(15%) sepia(97%) saturate(6881%) hue-rotate(276deg) brightness(97%) contrast(106%);
}

.PlusSvg {
  filter: invert(14%) sepia(97%) saturate(2052%) hue-rotate(21deg) brightness(104%) contrast(95%);
}

.SmileSvg {
  filter: invert(99%) sepia(45%) saturate(4281%) hue-rotate(333deg) brightness(101%) contrast(103%);
  height: 50px;
  width: 50px;
}

.SpadeSvg {
  filter: invert(0%) sepia(0%) saturate(7500%) hue-rotate(327deg) brightness(96%) contrast(104%);
  height: 50px;
  width: 50px;
}

.StarSvg {
  filter: invert(11%) sepia(91%) saturate(4041%) hue-rotate(248deg) brightness(92%) contrast(93%);
}

.SunSvg {
  filter: invert(86%) sepia(34%) saturate(5994%) hue-rotate(360deg) brightness(102%) contrast(105%);
}

.SquareSvg {
  filter: invert(77%) sepia(60%) saturate(4111%) hue-rotate(41deg) brightness(102%) contrast(101%);
}

.TriangleSvg {
  filter: invert(43%) sepia(81%) saturate(6487%) hue-rotate(279deg) brightness(104%) contrast(103%);
}

.WaterSvg {
  filter: invert(70%) sepia(95%) saturate(318%) hue-rotate(113deg) brightness(103%) contrast(85%);
}

.WaveSvg {
  filter: invert(75%) sepia(7%) saturate(3204%) hue-rotate(169deg) brightness(102%) contrast(104%);
}

.WindSvg {
  filter: invert(69%) sepia(11%) saturate(164%) hue-rotate(345deg) brightness(93%) contrast(83%);
}

@keyframes flip-in-ver-right {
  0% {
    transform: rotateY(-80deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }
}

.flipCard {
  animation: flip-in-ver-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s 1 normal both;
}

@keyframes shake-horizontal-normal {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    transform: translateX(10px);
  }
  80% {
    transform: translateX(8px);
  }
  90% {
    transform: translateX(-8px);
  }
}

.shakeCard {
  animation: shake-horizontal-normal 0.7s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal both;
}

@keyframes jello-horizontal-normal {
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}

.jellowCard {
  animation: jello-horizontal-normal 0.7s ease 0s 1 normal both;
}
</style>
