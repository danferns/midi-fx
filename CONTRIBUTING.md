# Contributors Guidebook

Thank you for wanting to contribute to MIDI FX! 

## Submitting bug reports, feature requests, etc.

You may [open a GitHub Issue](https://github.com/danferns/midi-fx/issues) to start a discussion about your idea.

## Submitting new features

### Prerequisites

We will use Git and NodeJS.

### Setup 

[Fork the project](https://github.com/danferns/midi-fx/fork) so that you have your own version of it.

Next, clone your fork to your machine. Launch the terminal in a folder where you wish to keep the source code, then run:

```shell
git clone https://github.com/<username>/midi-fx.git
```

This will create a `midi-fx` folder, which we will now enter, to install the dependencies:

```sh
cd midi-fx
npm install
```

### Creating a Git Branch

When submitting PRs, it's a good idea to create a branch for each feature. Here are the main commands for working with branches:

```sh
git branch <branch-name> # create a branch <branch-name> from the current point
git branch # see available branches
git checkout <branch-name> # enter <branch-name>
git status # should confirm that you are 'On <branch-name>'
```

When creating new branches, always ensure that you are currently on the `main` branch!

### Hot-reloading

This allows us to preview code changes in the browser as soon as we save the file. To use hot-reloading, run:

```
npm run dev
```

This will start a development server, and you will be presented with a link that can be opened in the browser for previewing.

Note that this is not perfect, and I still often need to refresh the page to see certain changes.

### Building

After you've made some changes, it is a good idea to test that everything still builds correctly. The build files can be used to deploy MIDI FX anywhere.

```sh
npm run build
```

### Cleaning up

To keep a consistent code style throughout the project, we will format all files:

```sh
npm run format
```

### Commit and Push

A commit is like a save point in a video game. When you're happy with the changes, commit them with the command:

```sh
git commit
```

This will open an editor, prompting you to write a commit message. I like to use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0) format, but it's not a requirement.

Once you've written the message, close the file and your commit will be created. Pushing the commit makes it available on GitHub:

```sh
git push
```

### Creating a PR

To have your changes merged to MIDI FX, you will need to [create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#creating-the-pull-request). These offer useful features for code review and discussions, so feel welcomed to open a draft PR early if you prefer!
## Adding new nodes

Check out [`nodes/README`](./src/svelte/nodes/README.md).

