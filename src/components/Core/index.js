import echarts from 'echarts'
import EChartsReactCore from './EChartsReactCore'

// export the Component the echarts Object.
export default class EChartsReact extends EChartsReactCore {
  constructor(props) {
    super(props)
    this.echartsLib = echarts
  }
}
