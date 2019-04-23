## Templates and tricks/ tims

- From [Gitlab](https://nest.parrotsec.org/help/user/project/description_templates)

## Special GitLab references
GFM recognizes special references. You can easily reference e.g. an issue, a commit, a team member or even the whole team within a project.
GFM will turn that reference into a link so you can navigate between them easily. GFM will recognize the following:
|   Input      | References     |
| ------------ | -------------- |
| @user_name   | specific user  | 
| @group_name  | specific group |
| @all         | entire team    |
| namespace/project> | project  |
| #12345      |    issue       |
| !123        | merge request  | 
| $123        | snippet        |
| ~123        |  label by ID   |
| ~bug | one-word label by name |
| ~"feature request" | multi-word label by name |
|   %123 | project milestone by ID |
| %v1.23 | one-word milestone by name |
| %"release candidate" | multi-word milestone by name |
| 9ba12248 | specific commit | 
| 9ba12248...b19a04f5 | commit range comparison |
[README](doc/README) | repository file references |
| [README](doc/README#L13) | repository file line references |

### GFM also recognizes certain cross-project references:

| input | references |
| -------- | -------- |
| namespace/project#123 | issue |
| namespace/project!123 | merge request |
| namespace/project%123 | project milestone |
| namespace/project$123 | snippet |
| namespace/project@9ba12248 | specific commit |
| namespace/project@9ba12248...b19a04f5 | commit range comparison |
| namespace/project~"Some label" | issues with given label |

### It also has a shorthand version to reference other projects from the same namespace:

| input | references |
| -------- | -------- |
| project#123 | issue |
| project!123 | merge request |
| project%123 | project milestone |
| project$123 | snippet |
| project@9ba12248 | specific commit |
| project@9ba12248...b19a04f5 | commit range comparison |
| project~"Some label" | issues with given label |


## Useful bits 
- The above stuff is from [gitlab's markdown help](https://nest.parrotsec.org/help/user/markdown)
- [Markdown Syntax Guide from Daring Fireball](https://daringfireball.net/projects/markdown/syntax)
- [Useful for testing markdown code](https://daringfireball.net/projects/markdown/syntax)
- [Mermaid for when you need some flowcharts in markdown](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/user/markdown.md#mermaid/)
- [More Mermaid](https://mermaidjs.github.io/)
- [Sanitization list for inline HTML that is whitelisted](https://www.rubydoc.info/gems/html-pipeline/1.11.0/HTML/Pipeline/SanitizationFilter#WHITELIST-constant)
- [CommonMark](https://spec.commonmark.org/dingus/)
- [Transitioning to CommonMark](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/user/markdown.md#emoji)
- [Gitlab quick actions!](https://nest.parrotsec.org/help/user/project/quick_actions)