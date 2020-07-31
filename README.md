# growl-react-component

> Growl React Component

[![NPM](https://img.shields.io/npm/v/growl-react-component.svg)](https://www.npmjs.com/package/growl-react-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save growl-react-component
```

## Usage

```jsx
import React, { Component } from 'react'

import {Growl, useGrowl} from 'growl-react-component'

class Example extends Component {
 const [active, setActive] = useGrowl()

  render() {
    return 
        (
        <Growl 
                onDismissed={() => setActive(false)} 
                active={active}
                timer={5000} 
                message="Hello World!"
            />
        )
  }
}
```

## License

MIT © [PRADHAN-P](https://github.com/PRADHAN-P)
