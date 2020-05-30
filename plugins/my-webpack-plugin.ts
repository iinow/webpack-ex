import * as webpack from 'webpack'

const appRegex = /^app\..+\.js$/

export class MyWebpackPlugin {

    apply(compiler: webpack.Compiler): void {
        // 완료 종료 시점에 호출
        // compiler.hooks.done.tap('My Plugin', stats => {
        //     console.log('My Plugin: done!!!')
        // })

        compiler.plugin('emit', (compilation, callback) => {
            let app = Object.keys(compilation.assets).filter(key => appRegex.test(key))
            let key = app.pop()
            const source = compilation.assets[key].source();

            compilation.assets[key].source = () => {
                const banner = [
                    '/**',
                    ' * 이거어어라ㅏ렁.....',
                    ' * 말동낭다ㅗ니',
                    ' */'
                ].join('\n')
                return banner + '\n\n' + source
            }
            callback()
            // const source = compilation.assets['index.js'].source()
            // console.log(source)
            // callback()
        })
    }
}
