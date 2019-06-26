<!--
# README first!
This MR should be created on `dev.gitlab.org`.

See [the general developer security release guidelines](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/developer.md).

This merge request _must not_ close the corresponding security issue _unless_ it
targets master.

When submitting a merge request for CE, a corresponding EE merge request is
always required. This makes it easier to merge security merge requests, as
manually merging CE into EE is no longer required.

-->
## Related issues

<!-- Mention the issue(s) this MR is related to -->

## Developer checklist

- [ ] Link to the developer security workflow issue on `dev.gitlab.org`
- [ ] MR targets `master`, or `X-Y-stable` for backports
- [ ] Milestone is set for the version this MR applies to
- [ ] Title of this MR is the same as for all backports
- [ ] A [CHANGELOG entry](https://docs.gitlab.com/ee/development/changelog.html) is added without a `merge_request` value, with `type` set to `security`
- [ ] Add a link to this MR in the `links` section of related issue
- [ ] Set up an EE MR (always required for CE merge requests): EE_MR_LINK_HERE
- [ ] Assign to a reviewer (that is not a release manager)

## Reviewer checklist

- [ ] Correct milestone is applied and the title is matching across all backports
- [ ] Assigned to `@gitlab-release-tools-bot` with passing CI pipelines

/label ~security

-----------------------------------------------------------------------------------------

<!-- Follow the documentation workflow https://docs.gitlab.com/ee/development/documentation/workflow.html -->
<!-- Additional information is located at https://docs.gitlab.com/ee/development/documentation/ --> 

<!-- Mention "documentation" or "docs" in the MR title -->
<!-- For changing documentation location use the "Change documentation location" template -->

## What does this MR do?

<!-- Briefly describe what this MR is about. -->

## Related issues

<!-- Link related issues below. Insert the issue link or reference after the word "Closes" if merging this should automatically close it. -->

## Author's checklist

- [ ] Follow the [Documentation Guidelines](https://docs.gitlab.com/ee/development/documentation/) and [Style Guide](https://docs.gitlab.com/ee/development/documentation/styleguide.html).
- [ ] Link docs to and from the higher-level index page, plus other related docs where helpful.
- [ ] Apply the ~Documentation label.

## Review checklist

All reviewers can help ensure accuracy, clarity, completeness, and adherence to the [Documentation Guidelines](https://docs.gitlab.com/ee/development/documentation/) and [Style Guide](https://docs.gitlab.com/ee/development/documentation/styleguide.html).

**1. Primary Reviewer**

* [ ] Review by a code reviewer or other selected colleague to confirm accuracy, clarity, and completeness. This can be skipped for minor fixes without substantive content changes.
 
**2. Technical Writer**

* [ ] Optional: Technical writer review. If not requested for this MR, must be scheduled post-merge. To request for this MR, assign the writer listed for the applicable [DevOps stage](https://about.gitlab.com/handbook/product/categories/#devops-stages).

**3. Maintainer**

1. [ ] Review by assigned maintainer, who can always request/require the above reviews. Maintainer's review can occur before or after a technical writer review.
1. [ ] Ensure a release milestone is set and that you merge the equivalent EE MR before the CE MR if both exist.
1. [ ] If there has not been a technical writer review, [create an issue for one using the Doc Review template](https://gitlab.com/gitlab-org/gitlab-ce/issues/new?issuable_template=Doc%20Review).

/label ~Documentation
