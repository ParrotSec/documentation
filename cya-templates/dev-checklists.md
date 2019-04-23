## Example checklist

Checklist

## General

- [ ] Is this change useful or something that will benefit others greatly?
- [ ] Check for overlap with other merge requests.
- [ ] Think carefully about the long-term implications of the change. Is there any way it could be implemented as a separate package, for better modularity and flexibility?
- [ ] Are all commits signed and signatures verified?


## Check the Code

- [ ] If it does too much, ask for it to be broken up into smaller PRs.
- [ ] Is it consistent?
- [ ] Review the changes carefully, line by line. Make sure you understand every single part of every line. Learn whatever you do not know yet.
- [ ] Take the time to get things right. PRs almost always require additional improvements to meet the bar for quality. Be very strict about quality. This usually takes several commits on top of the original MR/PR.

## Check the Tests (if needed)

- [ ] Does it have tests? If not:

  - [ ] Comment on the MR/PR "Can you please add tests for this code to `test_blah.py`", or...
  - [ ] Write the tests yourself.

- [ ] Do the tests pass for all of the following? If not, write a note in the MR/PR, or fix them yourself.

  - [ ] Python 2.7 - Linux
  - [ ] Python 3.3 - Linux

## Check the Docs 

- [ ] Does it have docs? If not:

  - [ ] Comment on the MR/PR "Can you please add documentation for this feature to the docs portal", or...
  - [ ] Add the docs yourself.

## Credit the Authors

- [ ] Add name and URL to `README.md` or `contributors.md` depending on the size of their changes.
- [ ] Thank them for their hard work.

## Close Issues

- [ ] Merge the branch (Ensure merge is gpg-signed and signed off).
- [ ] Close any duplicate or related issues that can now be closed. Write thoughtful comments explaining how the issues were resolved.

## Release (optional)

- [ ] Decide whether the changes in master make sense as a major, minor, or patch release.
- [ ] Look at the clock. If you're tired, release later when you have time to deal with release problems.
- [ ] Then follow all the steps in [My PyPI Release Checklist](https://gist.github.com/audreyr/5990987)
