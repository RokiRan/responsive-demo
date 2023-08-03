import { defineConfig } from 'vite';
import { resolve } from 'path'
export default defineConfig({
  base: './',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
    postcss: {
      // 支持移动端
      autoprefixer: {  //css兼容前缀
        overrideBrowserslist: [
          'Android 4.1',
          'iOS 7.1',
          'Chrome >31',
          'not id <=11'
        ]
      },
      plugins: [
        require('postcss-pxtorem')({
          'rootValue': 75, //这个值为设计稿的宽，一般是750。如果设计稿是375，则为37.5
          'unitPrecision': 6, // 转化为rem后保留的小数
          'replace': true, //rem替换px
          'mediQuery': true, //兼容媒体查询 允许在媒体查询中转换px
          'minPixelValue': 1, //设置要替换的最小像素值
          'exclude': /node_modules/i //node_modules
        }),
      ],
    }
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
      },
      // output: {
      //   entryFileNames: 'src/[name].js', // 设置输出文件名为入口文件名
      //   chunkFileNames: 'chunks/[name].js', // 设置代码分割后的文件名
      //   assetFileNames: 'assets/[name].[ext]', // 设置静态资源文件名
      // }
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
