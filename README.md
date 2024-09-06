# test-app-bar

## 总结
该 bug 在 iPhone 13 mini 上可稳定复现，在其他 iPhone 上少见（并未完全测试），在安卓上没复现。

iPhone 13 mini 软件版本为：
微信：8.0.50
基础库：3.5.5
OS：iOS 17.6.4

## 复现步骤

1. 打开小程序开发工具，导入项目文件夹 ./dist/wx

2. 观察 app bar 是否挂载
   正常：
   ![image](https://github.com/user-attachments/assets/a5a1bc67-13bd-4e4e-9e57-49d505afbf03)
   失败：
   ![image](https://github.com/user-attachments/assets/f54c1581-ca97-4875-aeb8-6c4bdf10d9fa)




