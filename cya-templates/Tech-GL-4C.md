# Technical Guidelines for contributors

Thank you for wishing to contribute to the Parrot Project.

Before you begin please read through the requirements below, the [licenses](https://nest.parrotsec.org/parrot-organization/community-team/community/blob/master/LICENSE.md) and the readme of the repo.

Parrot's workflow is as follows:

You fork the repository you want to contribute to. > You make your changes and GPG-sign your commits. > You push your commits to your fork and open a merge request to the repo you forked. > A Developer will look at your changes and either accept and merge your changes (locally or on the web with gitlab) or reject them with a comment in the closed merge as to why they rejected your merge request. > If your merge request is accepted, congratulations you've contributed to the Parrot Project, you're awesome and someone somewhere loves you. > Go have a coffee, enjoy life or get back on and write more patches. :)


### Things you will need to know at a bare minimum:
- [git](https://nest.parrotsec.org/help/topics/git/index.md)
- [Gitlab](https://nest.parrotsec.org/help/#new-to-git-and-gitlab)
- [SSH](https://nest.parrotsec.org/help/ssh/README.md)
- [GPG](https://nest.parrotsec.org/help/user/project/repository/gpg_signed_commits/index.md)
- whatever code you are attempting to change.

### Requirements to contribute:
- GPG-sign your commits
- Code must adhere to the [GNU Coding Standards](https://www.gnu.org/prep/standards/).
- If you added more than 5 lines of code or a significant feature, update the changelog
- Write concise commit comments and add tags as appropriate.
- Add labels, and milestones as needed. 

### Changelog
Example:
2019/04/23
- Devs and Contributors can provide a quick summary of changes in bullet format for when major changes are conducted such as adding or removing pages.
- All changelogs should begin with the date, use bullet format, be no more than 25 lines and end with the name or handle of the person committing the changes.

  -s1udge

### Issue guidelines

We welcome your enhancement requests, doc improvements, and issue reports. However, we are not accepting major feature requests on nest(gitlab) at this time.

Before you submit an issue, search issues (closed and open); the issue may have been submitted or considered already. If the issue appears to be a bug, and hasn't been reported, open a new issue. Please do not report duplicate issues.

Providing the following information will increase the chances of your issue being dealt with quickly:

- Issue Title - provide a concise issue title 
  for example:
     menu-bar: does not support dark mode themes #11238
     tooltip: memory leak on destroy #11133

- Complete the Issue Template.

- Suggest a Fix - if you can't fix the bug yourself, perhaps you can point to what might be causing the problem (line of code or commit).

### Submitting merges requests (Pull Requests)

Important: We are not accepting major feature requests or MR/PRs that contain major new features or breaking changes at this time.

Please fill out the entire merge request.

### Bug reporting

When reporting bugs please use and fill out in it's entirely the report and please attach your logs.

### Reasons why your merge request was rejected:

- Your commit(s) were not signed. 
- Your merge was accepted and merged locally but there was an issue resolving the merge with gitlab.
- Your Code is poorly written or does not conform the above coding standards.
- You failed to follow through with one of the requirements to contribute as above.

(Spotted an error? open an issue [here](https://nest.parrotsec.org/parrot-organization/community-team/community/issues/new) to help keep our info on target.)

### How-tos
Need one? The above links double as informational how-to's from Gitlab.

## Frequently Asked Questions
- What does "rebase your code" mean? <br>
If a maintainer asks you to "rebase" your merge request (pull request), they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.

- Why do I have to sign my commits?<br>
Security and keeping track of who did what.
