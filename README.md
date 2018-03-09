# multipage-vue-spa
基于vue-cli重构的大型多页面SPA项目架构。

大型项目必定是由多个单页应用组成的，由于传统页面维护的历史原因，也很可能与非单页应用共存。

这套项目架构支持公共组件和资源的共用，每个SPA应用的独自编译和产出隔离，同时支持SPA内的异步组件；完美支持多人同时开发大型SPA项目。



### 配置

> 开发阶段不用关心，编译产出的时候修改`build/webpack.base.conf.js`文件中的`currSPA`变量为当前要编译的单页应用，它的值为`src/page`目录下对应的SPA应用。

假设当前test单页应用开发完毕，将要编译产出，则修改为：

```javascript
//当前编译的spa为test
const currSPA = "test"
```
产出的文件在`dist/test`目录下，和其他SPA相隔离。


### 注意事项

> page目录必须存在，其他目录可以根据自己的习惯修改。
