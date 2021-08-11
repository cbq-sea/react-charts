import { registerTheme } from 'echarts/lib/echarts'

import '../theme'
import '../dependency'

import Bar from './Bar'
import Line from './Line'
import Pie from './Pie'
import Area from './Area'
import WordCloud from './WordCloud'
import Chart from './Core/EChartsReactCore'

export {
  Chart,
  Bar,
  Pie,
  Line,
  Area,
  WordCloud,
  registerTheme,
}
