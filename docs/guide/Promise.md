# 开发约定

#### Git commit 规范

> commit 规范可以更好的形成清晰的提交记录（changelog），通过制定 相应的 Commit Message 规范来约束开发人员根据不同的提交添加备注，常用的类别如下

```
feature: 开发新的功能
fix: 修复bug(提交时对应tapd[bug编号])
refactor: 代码重构
docs: 文档修改
style: 代码格式修改, 注意不是 css 修改
test: 测试用例修改
perf: 改善性能
build: 变更项目构建或外部依赖（例如scopes: webpack、gulp、npm等）
revert: 代码回退

比如：
git commit -m 'fix：修复某某bug[#2341]'
```

