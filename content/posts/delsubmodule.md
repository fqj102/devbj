+++
author = "Bongjun Hur"
title = "Hugo submodule 테마 제거하기"
date = "2020-03-31"
description = "휴고 테마 싹 정리하기"
tags = [
    "hugo","blog",
]
+++

git submodule 로 등록되어 있는 안쓰는 테마들을 싹 다 정리해보자!!

## **Git Submodule 삭제 방법**

[Git Submodule 삭제 방법](http://snowdeer.github.io/git/2018/08/01/how-to-remove-git-submodule/)

먼저 `git submodule deinit -f` 명령어를 통해서 해당 모듈을 deinit 해줍니다.

    git submodule deinit -f test_app

그 다음 `.git/modules` 폴더에 들어가서 해당 폴더를 삭제합니다.

    rm -rf .git/modules/test_app

마지막으로 git에서 해당 폴더를 제거해주면 됩니다.

    git rm -f test_app
