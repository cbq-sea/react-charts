import { registerTheme } from 'echarts/lib/echarts'

import './theme'
import './dependency'

import Bar from './components/Bar'
import Line from './components/Line'
import Pie from './components/Pie'
import Area from './components/Area'
import WordCloud from './components/WordCloud'
import Chart from './components/Core/EChartsReactCore'

export {
  Chart,
  Bar,
  Bar as BarChart,
  Pie,
  Pie as PieChart,
  Line,
  Line as LineChart,
  Area,
  Area as AreaChart,
  WordCloud,
  registerTheme,
}