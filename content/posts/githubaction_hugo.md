+++
author = "Bongjun Hur"
title = "깃허브 액션으로 휴고 블로그 자동 배포"
date = "2020-03-31"
tags = [
    "hugo","blog","github"
]
categories = [
    "blog",
]
+++

Hugo 자동 배포용 깃허브 액션 스크립트 소개

현재 사용중인 Hugo 페이지를 배포하는 스크립트 아래와 같다. 설명을 약간 첨부해서 공개해 두니, 아무나 가져가서 잘 쓰심 좋겠다.

## 접근 권한을 위해 접근 키 등록 🔑

다른 제약사항은 없으나, 반드시 이 깃허브 액션 스크립트를 사용하는 저장소에 ACCESS_TOKEN 이라는 이름을 키를 하나 등록해 둬야 한다. 이 과정은 아래와 같다.

1. 깃허브 페이지에서 세팅을 누르고, "Developer settings" 메뉴를 선택한다.

    ![깃허브키등록-1](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FzUb7O%2FbtqC6PHdYYg%2FLZ9Sccv79WVmH6OX0VjvT1%2Fimg.png)

2. 원하는 권한을 지정하여 접근 할 때 사용할 키를 등록한다.
    ![깃허브키등록-2](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FPj1qw%2FbtqC4t6aQMQ%2FOFmY6Pb5xgMDQKJWxFFBC0%2Fimg.png)
    ![깃허브키등록-3](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbQtgjy%2FbtqC4uDYi0g%2FapD1ujKSp5mMc7fZuFL9G0%2Fimg.png)
    ![깃허브키등록-4](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbrXqWq%2FbtqC6lsNha4%2FwNw0jbZeAo8YcCs6sTqvV0%2Fimg.png)

3. 배포할 저장소로 이동하여 "Settings" > "Secrets" > "Add a new secret" 을 눌러서, ACCESS_TOKEN 이라는 이름으로 비밀키를 하나 생성한다.

    ![깃허브키등록-5](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbEyyKG%2FbtqC5n5uNXw%2FY1GF4XVSZMtMukiSQHTMW0%2Fimg.png)

이제, 아래와 같은 깃허브 액션 스크립트를 넣고 실행하면 끝!!

## 깃허브 액션 스크립트 설명 🔊📺

혹시나 해서, 깃허브 액션 스크립트 기본 파일은 아래 그림처럼 먼저 만들면 된다. 그런다음 아래 내용으로 덮어써 버리면 끝!

![깃허브액션등록](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fz4I1z%2FbtqC6QGaNQO%2F61QLrKY1ktelrl6GKK6eZ0%2Fimg.png)

덮어쓸 스크립트는 아래와 같다 😎😎

{{< highlight yaml >}}

    # 휴고 블로그 master --> gh-pages 로 배포하는 GitHub Actions script 파일

    # 이름은 아무거나 해도 됩니다.
    name: CI

    # 깃허브 액션을 실행하는 이벤트를 등록해 두는 곳, 그냥 기본적으로 생기는 것을 그대로 두면,
    # commit 이 발생할 때 마다, 이 깃허브 액션 스크립트가 실행된다.
    # Controls when the action will run. Triggers the workflow on push or pull request
    # events but only for the master branch
    on:
      push:
        branches: [ master ]
      pull_request:
        branches: [ master ]

    # 실제 작업할 일을 정의하는 workflow 핵심 코너
    # A workflow run is made up of one or more jobs that can run sequentially or in parallel
    jobs:
    	# 그대로 둔다 건드리지 않았다. 더 살펴볼 것도 없고.
      # This workflow contains a single job called "build"
      build:
    		# 작업하는 가상 머신이 운영하는 os를 선택할 수 있는 곳, 이것도 그냥 기본값으로 둔다.
        # The type of runner that the job will run on
        runs-on: ubuntu-latest

        # Steps represent a sequence of tasks that will be executed as part of the job
        steps:
    		# 먼저, master 내용을 부팅된 깃허브 액션을 수행하는 가상 머신으로 체크아웃을 한다.
    		# 이후, Hugo 를 이용하여 사이트 빌드를 수행하면 될것이다.
    		# 이미 선구자가 작성해 둔 스크립트를 그냥 사용하면 도니다.
        # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
        - uses: actions/checkout@v2

    		# 그런데, 휴고 테마를 submodule 로 등록해서 사용중이다.
    		# submodule 도 빌드 과정에서 사용할 수 있도록 체크아웃을 해두자.
    		# bash 쉘을 이용하여 git 명령을 수행하여 체크아웃을 진행함을 볼 수 있다.
        - name: Checkout submodules
          shell: bash
          run: |
            # If your submodules are configured to use SSH instead of HTTPS please uncomment the following line
            # git config --global url."https://github.com/".insteadOf "git@github.com:"
            auth_header="$(git config --local --get http.https://github.com/.extraheader)"
            git submodule sync --recursive
            git -c "http.extraheader=$auth_header" -c protocol.version=2 submodule update --init --force --recursive --depth=1

    		# Hugo 최신 버전을 다운로드 받는다.
    		# 이 과정도 이미 구현해 둔 분의 스크립트를 아래와 같이 불러 사용하면 된다.
        - name: Setup Hugo
          uses: peaceiris/actions-hugo@v2
          with:
            hugo-version: 'latest'
            extended: true

    		# 이제 휴고 사이트를 빌드하도록 명령을 내린다.
    		# 빌드된 사이트의 내용은 알다시피 public 폴더에 저장되게 된다.
        - name: Build
          run: |
            hugo --minify

    		# 이제 빌드된 사이트 내용이 저장된 public 폴더를 gh-pages 브랜치로 배포하면 된다.
    		# 이미 구현된 스크립트를 사용하면 된다.
    		# 단, 내 저장소에 파일을 막 올려두기 위해선 당연히 접근 권한이 필요하다고 생각이 들죠???
    		# 그래서, 미리 아래에 쓰이는 ACCESS_TOKEN 이름으로 비밀 키를 생성해야 아래 동작이 성공한다.
        - name: Deploy
          uses: peaceiris/actions-gh-pages@v3
          with:
            github_token: ${{ secrets.ACCESS_TOKEN }}
            publish_dir: ./public

{{< /highlight >}}
