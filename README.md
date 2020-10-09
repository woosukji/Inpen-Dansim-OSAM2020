# 국군 인터넷편지 개선 프로젝트 인편단심
## 1. 개발 환경 Set-Up

### 1.1. Fork to My Github Repository
<https://github.com/Chokoty/Inpen-Dansim-OSAM2020> 에서 fork 합니다.

### 1.2. Clone to VSCS Local Environment
```bash
// 루트 디렉토리에서 클론
~/workspace$  git clone https://github.com/본인계정/Inpen-Dansim-OSAM2020.git
~/workspace$  cd Inpen-Dansim-OSAM2020

// 원본 repo 를 upstream으로 등록
~/workspace/Inpen-Dansim-OSAM2020$  git remote add upstream https://github.com/Chokoty/Inpen-Dansim-OSAM2020.git

// 등록된 remote repo 확인
~/workspace/Inpen-Dansim-OSAM2020$  git remote -v

// 필요한 라이브러리 받기
~/workspace/Inpen-Dansim-OSAM2020$  npm install
```

### 1.3. Create `develop` Branch
```bash
// 가급적 별도의 branch에서 작업한 이후, `master` 브랜치로 merge 하기를 권장합니다.
~/workspace/Inpen-Dansim-OSAM2020$  git checkout -b develop
```

### 1.4. Pull from Remote Repository
**주의: 현재 작업 디렉토리의 변경사항이 commit 되지 않은 채 `pull`하면, 변경사항이 사라집니다.**

```bash
// 작업하기 전 github 체크, pull 하는 습관을 들입시다.
~/workspace/Inpen-Dansim-OSAM2020$  git fetch real
~/workspace/Inpen-Dansim-OSAM2020$  git merge real/master

// fetch + merge = pull
~/workspace/Inpen-Dansim-OSAM2020$  git pull
```


### 1.5. Add & Commit & Push to Local Repository

```bash
// 변경된 파일 & staged 된 파일 확인
~/workspace/Inpen-Dansim-OSAM2020$  git status

// 일괄적으로 stage
~/workspace/Inpen-Dansim-OSAM2020$  git add .

// **local repo** 로 commit
~/workspace/Inpen-Dansim-OSAM2020$  git commit -m "ADD: newfile.js"

// Stage + Commit 한번에
~/workspace/Inpen-Dansim-OSAM2020$  git commit -a -m "FIX: fixed error: page not opening"

// **본인의 remote repo** 로 push
~/workspace/Inpen-Dansim-OSAM2020$  git push origin develop
```


### 1.6. PR (Pull Request)
<https://github.com/Chokoty/Inpen-Dansim-OSAM2020> 로 PR을 보냅니다.


### 1.7. Reference
[Git을 이용한 협업 워크플로우](https://wayhome25.github.io/git/2017/07/08/git-first-pull-request-story/)

[Git 공식 문서](https://git-scm.com/book/ko/v2)
