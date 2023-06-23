# ShopHub Client

## 📆 개발 기간

2023.06 ~

## 👨‍💻 프로젝트 담당 인력

|                                                                                        💻 front                                                                                         |                                                                💻 front                                                                |                                                               💻 front                                                                |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: |
| <a href='https://github.com/minsoo-web'><img width="150" height="150" src="https://avatars1.githubusercontent.com/u/57122180?s=200&u=b32867107508426379c28b1d0c2fd8963912a5dd&v=4"></a> | <a href='https://github.com/Doeunnkimm'><img width="150" height="150" src="https://avatars.githubusercontent.com/u/112946860?v=4"></a> | <a href='https://github.com/showme0241'><img width="150" height="150" src="https://avatars.githubusercontent.com/u/77373566?v=4"></a> |
|                                                                                       @minsoo-web                                                                                       |                                                              @Doeunnkimm                                                               |                                                              @showme0241                                                              |

## 🗂 사용 기술 스택

- Deploy

  - Vercel
  - Github action

- client
  - SSR: NextJS@13.4.7 (with swc)
  - Chakra UI
  - Typescript
  - State management
    - react-query
    - recoil
  - Storybook

## 👨‍⚖️ Conventions

### 🪵 Branch

```txt
* feat-*
|
| * feat-*
|/
* development
|
* main
```

### ✍️ Commit

#### Commit Types

feat : 기능 추가  
chore : gradle 수정, package.json 같이 프로젝트 환경에 있어서의 변경점  
fix : 버그 픽스  
docs : 문서 관련 변경점  
release : release 버전 merge 완료 시

Commit 형식은 다음으로 맞춰주세요.(영/한 자유)  
`<type>`: commit message  
e.g. feat: Add something to somewhere

> ⛔️ 커밋을 세분화하는 것을 습관화 합시다.

---

Branch 단위

- main : 최종 단위 브랜치. Release 완료 시 main에 최종적으로 병합해주세요.
- development : 개발 브랜치. feature 관련 브랜치에서 작업이 완료되면 해당 브랜치로 병합 부탁드립니다.
- feat: 기능 추가 및 구현을 위한 브랜치. development 브랜치로부터 분기되는 브랜치입니다.
- hotfix: 배포한 버전에 긴급한 수정을 진행해야 하는 경우, main 브랜치에서 분기하는 브랜치입니다.  
  문제가 되는 부분의 수정이 완료되면, main 브랜치에 다시 병합하여 배포를 진행해주세요.  
  해당 브랜치에서의 변경 사항은 꼭 development 브랜치에도 병합 부탁드립니다.

Branch 이름은 다음으로 맞춰주세요.

[Branch 종류]/[Branch 이름]  
e.g: feat/auth-setting

### 📝 Code Convention

1. 함수 네이밍과 변수명은 camelCase(카멜케이스)를 원칙으로 합니다.
2. 상수 네이밍은 UPPER_SNAKE_CASE를 원칙으로 합니다.
3. 폴더구조는 기존 보일러플레이트를 따릅니다.
4. style 코드는 \*.style.ts 로 파일 네이밍을 해서 분리합니다. (단, 스타일링 코드가 한 개라면 분리하지 않아도 됩니다.)
5. 코드가 100줄이 넘어가면 리팩토링을 고민해봅니다.
6. 필요하다고 생각되는 곳에는 주석을 꼭 작성합니다. (구구절절한 설명은 달지 않습니다. 설명이 필요한 코드는 가독성이 안 좋은 코드라 생각합시다!)

### Known ISSUE

### 인수인계 및 공유 내용
