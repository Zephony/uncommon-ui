# [uncommon-ui](https://https://zephony.github.io/uncommon-ui/)

Uncommon UI aims to be a library of reusable React components that range from simple building blocks to more complex components that are usually only created when the need arises or by crazy people.

This repo is a place of expression and wild ideas that can push the boundaries of UI/UX principles.

## Getting Started

Currently the components are available as individual packages hosted on [`bit.dev`](https://bit.dev/zephony/uncommon-ui).

Packages on bit.dev can be installed using `npm` or `yarn` but prior to that you will need to set bit as a [scoped registry](https://docs.bit.dev/docs/installing-components#configuring-bit-registry) by running `npm config set @bit:registry https://node.bit.dev`.

For example if you want to add the uncommon-ui button component you may run,

```
npm i @bit/zephony.uncommon-ui.button
```

or

```
yarn add @bit/zephony.uncommon-ui.button
```

## Documentation

The storybook can be found [here](https://https://zephony.github.io/uncommon-ui/).

The bit.dev repository can be found [here](https://bit.dev/zephony/uncommon-ui).

## Contributing

We are still in the early stages of development but you can get setup locally with the following steps.

1. Make sure you have [git](https://git-scm.com/), [node](https://nodejs.org/), and [yarn](https://classic.yarnpkg.com/en/docs/install) installed.
2. Clone this repository locally.
3. Execute `yarn` and then `yarn storybook` from the root directory of the repository.
4. Visit `http://localhost:9009/` in your browser.

Read the [CONTRIBUTING](https://github.com/Zephony/uncommon-ui/blob/master/README.md) guide for more.
