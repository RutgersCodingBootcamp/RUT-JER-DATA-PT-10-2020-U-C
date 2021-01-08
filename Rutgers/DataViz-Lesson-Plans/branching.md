# Branching

## Quick Legend

<table>
  <thead>
    <tr>
      <th>Branch</th>
      <th>Description, Instructions, Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>feature/&ltissue-id&gt</td>
      <td>New content/features</td>
    </tr>
    <tr>
      <td>revision/&ltissue-id&gt</td>
      <td>Revisions to existing content</td>
    </tr>
    <tr>
      <td>review/&ltissue-id&gt</td>
      <td>Code/content review that require changes</td>
    </tr>
    <tr>
      <td>prod/&ltissue-id&gt</td>
      <td>Production passes</td>
    </tr>
    <tr>
      <td>bug/&ltissue-id&gt</td>
      <td>Bug fixes for non-blocking issues</td>
    </tr>
    <tr>
      <td>hotfix/&ltissue-id&gt</td>
      <td>Hotfixes for blocking issues (i.e. disrupts classes)</td>
    </tr>
    <tr>
      <td>admin/&ltissue-id&gt</td>
      <td>Admin, config, etc for repo</td>
    </tr>
  </tbody>
</table>

## Main Branches

The main repository will always hold two evergreen branches:

* `main`
* `stable`

The main branch should be considered `origin/main` and will be the main branch where the source code of `HEAD` always reflects a state with the latest delivered development changes for the next release. As a developer, you will you be branching and merging from `main`.

Consider `origin/stable` to always represent the latest code deployed to production. During day to day development, the `stable` branch will not be interacted with.

When the source code in the `main` branch is stable and has been deployed, all of the changes will be merged into `stable` and tagged with a release number. _How this is done in detail will be discussed later._

## Supporting Branches

Supporting branches are used to aid parallel development between team members, ease tracking of features, and to assist in quickly fixing live production problems. Unlike the main branches, these branches always have a limited life time, since they will be removed eventually.

The different types of branches we may use are:

* Feature branches - feature, revision, review, prod
* Bug branches - bug
* Hotfix branches - hotfix
* Admin branches - admin

Each of these branches have a specific purpose and are bound to strict rules as to which branches may be their originating branch and which branches must be their merge targets. Each branch and its usage is explained below.

### Feature Branches

Feature branches are used when developing a new feature or enhancement, reviewing content, or productionizing content. All feature branches should be tied to a Github issue number.

During the lifespan of the feature development, the dev should watch the `main` branch to see if there have been commits since the feature was branched. Any and all changes to `main` should be merged into the feature before submitting a pull request to `main`; this can be done at various times during the project or at the end, but time to handle merge conflicts should be accounted for.

* Must branch from: `main`
* Must merge back into: `main`
* Branch naming conventions: `feature/<issue id>` or `review/<issue id>` or `prod/<issue id>`

#### Working with a feature branch

If the branch does not exist yet, create the branch locally and then push to GitHub. A feature branch should always be 'publicly' available. That is, development should never exist in just one developer's local branch.

```
$ git checkout -b feature/<issue id> main  // creates a local branch for the new feature
$ git push origin feature/<issue id>         // makes the new feature remotely available
```

Periodically, changes made to `main` (if any) should be merged back into your feature branch.

```
$ git merge main                           // merges changes from main into feature branch
```

When development on the feature is complete, the dev should submit a PR to `main` to obtain a peer review. Once the PR is merged into `main`, make sure the remote branch is deleted.

### Bug Branches

Bug branches differ from feature branches only semantically. Bug branches will be created when there is a bug in the curriculum that should be fixed, but it is not currently a blocking bug to current courses. For that reason, a bug branch may last longer than one deployment cycle. Additionally, bug branches are used to explicitly track the difference between bug development and feature development. No matter when the bug branch will be finished, it will always be merged back into `main`.

Although likelihood will be less, during the lifespan of the bug development, the dev should watch the `main` branch to see if there have been commits since the bug was branched. Any and all changes to `main` should be merged into the bug before merging back to `main`; this can be done at various times during the project or at the end, but time to handle merge conflicts should be accounted for.

* Must branch from: `main`
* Must merge back into: `main`
* Branch naming convention: `bug/<issue id>`

#### Working with a bug branch

If the branch does not exist yet, create the branch locally and then push to GitHub. A bug branch should always be 'publicly' available. That is, development should never exist in just one developer's local branch.

```
$ git checkout -b bug/<issue id> main       // creates a local branch for the new bug
$ git push origin bug/<issue id>              // makes the new bug remotely available
```

Periodically, changes made to `main` (if any) should be merged back into your bug branch.

```
$ git merge main                           // merges changes from main into bug branch
```

When development on the bug is complete, the dev should submit a PR to `main` to obtain a peer review. Once the PR is merged into `main`, make sure the remote branch is deleted.

### Hotfix Branches

A hotfix branch comes from the need to act immediately upon an undesired state of a live production version. Additionally, because of the urgency, a hotfix is not required to be be pushed during a scheduled deployment. Due to these requirements, a hotfix branch is always branched from a tagged `stable` branch. This is done for two reasons:

* Development on the `main` branch can continue while the hotfix is being addressed.
* A tagged `stable` branch still represents what is in production. At the point in time where a hotfix is needed, there could have been multiple commits to `main` which would then no longer represent production.

* Must branch from: tagged `stable`
* Must merge back into: `main` and `stable`
* Branch naming convention: `hotfix/<issue id>`

#### Working with a hotfix branch

If the branch does not exist yet, create the branch locally and then push to GitHub. A hotfix branch should always be 'publicly' available. That is, development should never exist in just one developer's local branch.

```
$ git checkout -b hotfix/<issue id> stable    // creates a local branch for the new hotfix
$ git push origin hotfix/<issue id>           // makes the new hotfix remotely available
```

When development on the bug is complete, the dev should submit a PR to `stable` to obtain a peer review. Once the PR is merged into `stable`, make sure the remote branch is deleted.

Additionally, submit a PR with changes into `main` so not to lose the hotfix and then delete the remote hotfix branch once the PR has been merged.

### Admin Branches

An admin branch is required to make administrative or configuration changes to the curriculum repository. Due to potential impact to workflow and processes, admin changes should always be reviewed by the entire curriculum team and approved only by a curriculum repo admin.

* Must branch from: tagged `main`
* Must merge back into: `main`
* Branch naming convention: `admin/<issue id>`

#### Working with an admin branch

If the branch does not exist yet, create the branch locally and then push to GitHub. An admin branch should always be 'publicly' available. That is, development should never exist in just one developer's local branch.

```
$ git checkout -b admin/<issue id> stable    // creates a local branch for the new admin changes
$ git push origin admin/<issue id>           // makes the new branch remotely available
```

When development on the bug is complete, the dev should submit a PR to `admin` to obtain a peer review. Request reviews from each member of the curriculum team. Final PR approval must be from a curriculum repo admin. Once the PR is merged into `admin`, make sure the remote branch is deleted.
