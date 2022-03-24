# 解决问题

1. 多人开发代码语法、规范强制统一
2. `commit message` 格式化、是否符合某种规范
3. 服务器代码有新的更新的时候通知所有开发成员
4. 代码提交后的项目自动打包 `git receive`

# git hooks

1. `applypatch-msg`
2. `pre-applypatch`
3. `post-applypatch`
4. `pre-commit`
5. `pre-merge-commit`
6. `prepare-commit-msg`
7. `commit-msg`
8. `post-commit`
9. `pre-rebase`
10. `post-checkout`
11. `post-merge`
12. `pre-push`
13. `pre-receive`
14. `update`
15. `post-receive`
16. `post-update`
17. `push-to-checkout`
18. `pre-auto-gc`
19. `post-rewrite`
20. `sendemail-validate`
21. `fsmonitor-watchman`
22. `p4-pre-submit`
23. `post-index-change`

# husky

## 安装

```
yarn add husky
```

## 使用

```
npm set-script prepare "husky install"
yarn prepare
```

## 添加 `git hooks`

```
npx husky add .husky/pre-commit "npm run test"
```
