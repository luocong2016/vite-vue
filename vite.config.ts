import { loadEnv, type ConfigEnv, type UserConfigExport } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://github.com/vbenjs/vite-plugin-mock/blob/main/README.zh_CN.md
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode, process.cwd())

  const localEnabled: boolean = env.VITE_USE_MOCK === 'true' ? true : false
  const prodEnabled: boolean = env.VITE_USE_CHUNK_MOCK === 'true' ? true : false

  console.log(`[environment variable]
    command: ${command}
    mode: ${mode}
    localEnabled: ${localEnabled}
    prodEnabled: ${prodEnabled}
  `)

  return {
    css: {
      //* css模块化
      modules: {
        // css模块化 文件以.module.[css|less|scss]结尾
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        hashPrefix: 'prefix'
      },
      //* 预编译支持less
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    server: {
      host: '0.0.0.0'
    },
    plugins: [
      vue(),
      vueJsx(),
      viteMockServe({
        mockPath: 'mock', // 解析根目录下的mock文件夹
        localEnabled: localEnabled, // 开发打包开关
        prodEnabled: prodEnabled, // 生产打包开关
        supportTs: true, // 打开后读取`.ts`文件模块，但无法监控`.js`文件
        watchFiles: true, // 监视文件更改
        logger: true,
        //  这样可以控制关闭mock的时候，不让mock打包到最终代码内(添加到src/main)
        injectCode: `
          import { setupProdMockServer } from './mockProdServer'
          setupProdMockServer()
        `
      })
    ]
  }
}
