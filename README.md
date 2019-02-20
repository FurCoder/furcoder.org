# 源码食用教程

本工程由以下工具链组成：

- 打包工具[Parcel](https://parceljs.org/)
- HTML模板引擎[PUG](https://pugjs.org/api/getting-started.html)
- SCSS增强型CSS语法


运行本工程请确保您已安装Nodejs环境，以下命令以Yarn为例。

## 首次安装

下载工程源码后，在终端中切换到对应目录，输入

    yarn
来安装项目依赖，注意，如果没有修改过npm仓库地址，您的安装速度可能会极为缓慢，甚至失败，这一切都取决您的网络质量。

## 运行&编译

依赖安装成功后，在终端内输入

    yarn dev

来启动parcel的build+watch服务，成功启动后默认会开启localhost:1234作为项目地址。您的任何修改都会立刻更新到页面上，当然，偶尔parcel会出bug，重启一下parcel就好。

当您准备发布一次完整的项目构建时，终止dev，输入

    yarn build

这一命令会在项目根的build目录下输出完整构建，注意，每次构建前请先清空该目录。

## 自定义脚本

如果您非常精通Parcel，请直接编辑package.json里的script部分。

## 事半功倍

推荐安装以下VS CODE 插件获得最佳体验：

- Pug beautify
- Pug (Jade) snippets

