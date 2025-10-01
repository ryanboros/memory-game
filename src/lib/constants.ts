// import CircleSvg from '@/assets/circle.svg'
// import ClubSvg from '@/assets/club.svg'
// import DiamondSvg from '@/assets/diamond.svg'
// import FireSvg from '@/assets/fire.svg'
// import HeartSvg from '@/assets/heart.svg'
// import LeafSvg from '@/assets/leaf.svg'
// import MoonSvg from '@/assets/moon.svg'
// import PlanetSvg from '@/assets/planet.svg'
// import PlusSvg from '@/assets/plus.svg'
// import SmileSvg from '@/assets/smile.svg'
// import SpadeSvg from '@/assets/spade.svg'
// import SquareSvg from '@/assets/square.svg'
// import StarSvg from '@/assets/star.svg'
// import SunSvg from '@/assets/sun.svg'
// import TriangleSvg from '@/assets/triangle.svg'
// import WaterSvg from '@/assets/water.svg'
// import WavesSvg from '@/assets/waves.svg'
// import WindSvg from '@/assets/wind.svg'

export const MAX_MATCHING_VALUES = 18

export const CardIcon = (id) => {
  const svg = {
    1: 'CircleSvg',
    2: 'ClubSvg',
    3: 'DiamondSvg',
    4: 'FireSvg',
    5: 'HeartSvg',
    6: 'LeafSvg',
    7: 'MoonSvg',
    8: 'PlanetSvg',
    9: 'PlusSvg',
    10: 'SmileSvg',
    11: 'SpadeSvg',
    12: 'SquareSvg',
    13: 'StarSvg',
    14: 'SunSvg',
    15: 'TriangleSvg',
    16: 'WaterSvg',
    17: 'WavesSvg',
    18: 'WindSvg',
  }

  return svg[id]
}
