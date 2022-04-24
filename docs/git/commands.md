---
id: git-commands
title: Regular Commands
---

### Basic
```sh
git add <file_path>
git add -A
git commit -am 'commit msg'
git push origin <branch_name>
git rebase main
git checkout -b <New_branch_name>
git branch -D <branch_name_to_delete>
```

### Stash
```sh
git stash
git stash pop
```

### Delete Ops
```sh
git reset --hard HEAD~1 # to revert the latest commit
git branch -D branch_name
git rm --cache file_path
```

### Config
GIT_SSH_COMMAND='ssh -i ~/.ssh/my_rsa' git push -u origin master 
# Apply for entire workspace/laptop
git config --global user.name "my_gh_user_name"
# Apply for the current repo
git config user.name "my_gh_user_name"
```

