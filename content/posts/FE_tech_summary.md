+++
title = "프론트엔드 기술 조사"
date = "2020-03-19"
description = "PC, Mobile, iOS, Android 두루 적용할 수 있는 앱 개발 기술에 대한 공부"
tags = [
    "react",
    "nodejs",
    "flutter",
    "frontend",
    "javascript",
]
categories = [
    "development",
]
series = ["IoT Cloud Solution"]
+++

    - PC, Mobile 환경을 다 지원할 수 있는 아키텍쳐 조사 및 검토
        - 구글에 제공하고 있는 https://flutter.dev/
            - 리액트 네이티브나 MS 자마린 처럼 cross platform app 개발이 가능
        - 애저 클라우드 내에 서비스 솔루션으로 구현되는 백엔드 기술은 Node.js 로 고정해도 무방
            - 비교 기술로는 Angular.js 가 있으나 Node.js 가 대세인듯!
            - C#, Java 가 정석적인 방법이나, 개발 속도나 커뮤니티의 크기의 차이를 봐도 현재 nodejs 로 접근하는 것이 우리 입장에선 최선!
                - 단, Azure 에서 제공되는 API, 기능 제약에 따라서는 어쩔수 없이 C#, Java 를 사용해야 할 수도 있다.
        - React.js vs Vue.js
            - React 가 진입장벽이 좀 높다고 하나 사용자 수가 많고, Facebook 플랫폼으로 왠만한 기능 구현에 문제가 없는 것으로 판단된다.
            - 사실, 앱의 기능에 따라서는 무엇을 선택해도 무방하고 프로젝트별이나 각각의 앱별로 각각 다른 js 플랫폼을 써도 무방한듯
            - 거의 같은 js 플랫폼이라 한쪽에 익숙하면 쉽게 이전할 수 있다.
            - 이슈
                - React Native!!
                    - 안드로이드, 애플 앱을 동시에 구현하기 위해서는 따로 React Native 기술이 또 들어와야 한다고 한다.
                - PWA - 이것을 적용해야하는 기술 같은데, 필요하다면 F/E에 PWA 가 필요한지 검토하자.
                    - Progressive Web Apps
![서비스 워커 from https://www.smoh.kr/273](https://k.kakaocdn.net/dn/2MyKh/btqAkw5ib7C/MjLYOK8wwVlIrgYkKxKhq0/img.png)

                    - 크로스 플랫폼 환경은 기본적으로 정도의 차이는 있지만 스마트폰 자체의 하드웨어, 그리고 OS에서 제공되는 기능들을 이용하기가 어렵다는 점을 꼽을 수 있다.
                        - 앱의 기능 스펙의 범위가 중요!! 기술 선택에 핵심 고려요소.
                    - 웹앱으로 앱과 웹의 가운데 정도, 하이브리드앱으로도 불린다.
                    - 앱처럼 오프라인 기능, 설치가 가능하고 수시 알람과 같은 메시지를 받을 수 있는 웹 기술
                    - PWA 애플리케이션을 만들어야 하는 이유는 다음과 같습니다:
                        - 브라우저에서 유저의 홈 화면을 추가할 수 있음.
                        - 인터넷이 연결되어 있지 않더라도 동작함.
                        - 웹 푸시 알림을 지원함.
                        - 구글의 Lighthouse 기능을 사용할 수 있게 함.
                        - 출처: https://www.smoh.kr/275?category=694831 [Simple is Beautiful.]
                    - 예) Uber, Twitter Lite, AliExpress, Pinterest, Trivago, Forbes
        - 일렉트론
            - GitHub에서 오픈소스로 공개한 데스크탑 애플리케이션 구축용 프레임워크
            - 자바스크립트로 윈도우, macOS, 리눅스에서 모두 동작하는 데스크탑 애플리케이션 개발 가능
        - Typescript
![](https://k.kakaocdn.net/dn/5LBxu/btqAkTzpjWa/9RhM4CCOJKKuuKdLqs9bK1/img.png)

            - TypeScript는 Apache2 라이선스에 따라 Microsoft 에서 개발 및 유지 보수됩니다.
            - 출처: https://www.smoh.kr/274?category=694831 [Simple is Beautiful.]
