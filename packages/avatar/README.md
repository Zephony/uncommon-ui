# Avatar

> _"Life happens wherever you are, whether you make it or not.”_ - Iroh, Avatar the Last Airbender Episode 2.14”

## Installation

```
yarn add '@uncommonui/avatar';
```

## Default

Your barebones avatar. Pass in an `src` prop with an image URL to display an image.

```
<Avatar src="image.png" />
```

## Avatar Active

Use the `active` prop as an indicator and pass in an `activeColor` to set the color
of the indicator.

```
<Avatar src={faker.image.avatar()} isActive />
<Avatar src={faker.image.avatar()} isActive activeColor="#00ff00" />
```

## Custom Dimension

Pass a size in `px` to change the dimensions of the avatar.

```
<Avatar src={faker.image.avatar()} size="100px" />
```

### Props

```
propTypes = {
    /**
     * Becomes the width and height of the avatar in px
     */
    size: PropTypes.string,
    /**
     * Image URL for avatar, fallsback to empty avatar
     */
    src: PropTypes.string.isRequired,
    /**
     * To indicate avatar is active
     */
    isActive: PropTypes.bool,
    /**
     * Change color of active indicator
     */
    activeColor: PropTypes.string,
};
```
