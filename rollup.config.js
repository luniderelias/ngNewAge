import nodeResolve from 'rollup-plugin-node-resolve';
import { buildOptimizer } from '@angular-devkit/build-optimizer';


function angularBuildOptimizer() {
    return {
        name: 'angular-optimizer',
        transform: (content) => buildOptimizer({ content }).content,
    }
}

export default {
    entry: 'dist/main.js',
    moduleName: 'main',
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true
        }),
        angularBuildOptimizer()
    ]
};