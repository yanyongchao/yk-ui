const path = require('path')

export default function () {
  return {
    // 项目启动的根路径
    root: path.join(process.cwd(), 'example')
  }
}
