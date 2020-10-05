# 국군 인터넷편지 개선 프로젝트 인편단심
## 1. 개발 환경 Set-Up

### 1.1. Fork to My Github Repository
<https://github.com/Chokoty/Inpen-Dansim-OSAM2020> 에서 fork 이후, 
**_fork 된 본인 계정의 repository_** 를 clone 해옵니다.

태윤님 본인의 경우, 가능하다면 본인 repo를 fork 하시고 rename repository 하셔서 구분짓거나, 혹은 원본 repo에서 별도의 branch를 생성해서 작업하셔도 됩니다. (이 때, 다른 분들이 쓰실 수도 있는 `develop` branch와 구분되도록, 이 이름은 피해 주세요.)

### 1.2. Clone to VSCS Local Environment
루트 디렉토리에서 clone 하면 프로젝트 폴더가 생성됩니다.
```bash
~/workspace$  git clone https://github.com/본인계정/Inpen-Dansim-OSAM2020.git

~/workspace$  cd Inpen-Dansim-OSAM2020
```

Remote repository가 자동으로 지정되어, push & pull 을 할 수 있게 됩니다.
```bash
~/workspace/Inpen-Dansim-OSAM2020$  git remote -v
```

원본 repository도 remote로 등록해 줍시다.
```bash
~/workspace/Inpen-Dansim-OSAM2020$  git remote add real https://github.com/Chokoty/Inpen-Dansim-OSAM2020.git
```

필요한 라이브러리들을 받으면, 초기 셋업이 완료됩니다.
```bash
~/workspace/Inpen-Dansim-OSAM2020$  npm install
```

### 1.3. Create `develop` Branch
가급적 별도의 branch에서 작업한 이후, `master` 브랜치로 merge 하기를 권장합니다.
```bash
~/workspace/Inpen-Dansim-OSAM2020$  git checkout -b develop
```
`develop` 브랜치를 이용한 워크플로우는 <https://wayhome25.github.io/git/2017/07/08/git-first-pull-request-story/> 에서 배우실 수 있습니다.

### 1.3. Pull from Remote Repository
모두가 한 repo에서 작업하고 있으므로, 변경사항을 항상 확인해 주어야 합니다. 

작업을 시작하기 전 항상 `pull` 하는 습관을 들입시다!

**주의: 현재 작업 디렉토리의 변경사항이 commit 되지 않은 채 `pull`하면, 변경사항이 사라집니다.**

```bash
~/workspace/Inpen-Dansim-OSAM2020$  git fetch real
~/workspace/Inpen-Dansim-OSAM2020$  git merge real/master

// fetch + merge = pull
~/workspace/Inpen-Dansim-OSAM2020$  git pull
```


### 1.4. Add & Commit to Local Repository

```bash
// Check modified & staged files 
~/workspace/Inpen-Dansim-OSAM2020$  git status

// Stage all changed files 
~/workspace/Inpen-Dansim-OSAM2020$  git add .

// Commit to local repository 
~/workspace/Inpen-Dansim-OSAM2020$  git commit -m "ADD: newfile.js"

// Stage + Commit 한번에
~/workspace/Inpen-Dansim-OSAM2020$  git commit -a -m "FIX: fixed error: page not opening"
```

### 1.5. Push to Remote Repository
본인이 작업하던 `develop` branch 에서 remote repository 로 push 합니다.
```bash
~/workspace/Inpen-Dansim-OSAM2020$  git push origin develop
```


### 1.6. PR (Pull Request)
작업 후, Github 상의 자신의 repository에서 원본 repository로 PR을 보냅니다.


### 1.7. Documents
상기한 일련의 작업과정은 <https://wayhome25.github.io/git/2017/07/08/git-first-pull-request-story/> 에서 참조했습니다.

git 사용법에 대해서 더 자세히 보시려면, <https://git-scm.com/book/ko/v2> 를 확인해 보세요.
