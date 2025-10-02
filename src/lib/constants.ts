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
