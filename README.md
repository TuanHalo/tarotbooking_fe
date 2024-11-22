# Tarot Booking Project (Frontend)
---
## 1. Set up
- __Clone repository__
```bash
git clone https://github.com/TuanHalo/tarotbooking_fe.git
cd tarotbooking_fe
```

- __Install dependencies__
```bash
yarn
```

- __Set up environment: Create file `.env` in root folder__
```env
# Server Configuration
VITE_API_BASE_URL=https://api.example.com
```
---
## 2. Git Branch Structure
- __Branch Naming__

| Name | Used |
|------|------|
|`main`|Production-ready code. Only merged from `develop`.|
|`develop`|The main development branch. Features and fixes are merged here.|
|`feature/`|For new features.|
|`bugfix/`|For bug fixes during development.|
|`hotfix/`|For urgent fixes in `main`.|
|`chore/`|For tasks like documentation, CI/CD setup, or refactoring.|

- __Commit Message Guidelines__
```bash
<type>: <short description>
```

| Types | Used |
|-------|------|
|`feat`|A new feature (e.g., `feat: add login form`).|
|`fix`|A bug fix (e.g., `fix: correct popup position`).|
|`docs`|Documentation changes (e.g., `docs: update README with Git rules`).|
|`style`|Code style changes (e.g., `style: format code with Prettier`).|
|`refactor`|Code refactoring (e.g., `refactor: optimize user service`).|
|`test`|Adding or updating tests (e.g., `test: add unit tests for Login component`).|
|`chore`|Miscellaneous tasks (e.g., `chore: update dependencies`).|

- __Workflow__
  - Create a Branch: Always create a branch from `develop`.
  ```bash
  git checkout develop
  git pull origin develop
  git checkout -b <branch-name>
  ```

  - Commit Changes
  ```bash
  git add .
  git commit -m "<type>: <description>"
  ```

  - Push Branch
  ```bash
  git push origin <branch_name>
  ```

  - Create a Pull Request: Set the base branch to `develop`.