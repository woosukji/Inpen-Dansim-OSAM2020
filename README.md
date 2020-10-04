# 국군 인터넷편지 개선 프로젝트 인편단심
## 1. 개발 환경 Set-Up
### 1.1. 공동 Contributor로 작업
개발 초기에는 변경량이 많고 다양하므로, 태윤님의 repo에서 모두가 contributor로써 작업하고자 합니다. 

쓰기 권한이 주어지므로, 본인의 repo에서 하시는 것처럼 push 하시면 됩니다.

#### 1.1.1. Clone to VSCS

```bash
~/workspace$  git clone https://github.com/Chokoty/Inpen-Dansim-OSAM2020.git

~/workspace$  cd Inpen-Dansim-OSAM2020
```

Remote repository가 자동으로 지정되어, push & pull 을 할 수 있게 됩니다.
```bash
~/workspace/Inpen-Dansim-OSAM2020$  git remote -v
```
#### 1.1.2. pull from remote repository
모두가 한 repo에서 작업하고 있으므로, 변경사항을 항상 확인해 주어야 합니다.

작업을 시작하기 전 항상 `pull` 하는 습관을 들입시다!

```bash
~/workspace/Inpen-Dansim-OSAM2020$  git fetch origin
~/workspace/Inpen-Dansim-OSAM2020$  git pull origin/main
```

#### 1.1.3. Add & Commit to Local Repository

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

#### 1.1.4 Push to Remote Repository
본인이 작업하던 `develop` branch 에서 remote repository의 `master` branch 로 push 합니다.
```bash
~/workspace/Inpen-Dansim-OSAM2020$  git push develop master
```


가급적 별도의 branch에서 작업한 이후, `master` 브랜치로 merge 하기를 권장합니다.
```bash
~/workspace/Inpen-Dansim-OSAM2020$  git checkout -b develop
```
