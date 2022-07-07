# @templatez/react

This is a template of react.

## Install

```
npm install @templatez/react
```

## Usage

```javascript
import { SimpleToggle } from "@templatez/react";

const App = () => {
    return (
        <div>
            <SimpleToggle
                size={20}
                leftData={{ id: "1", name: "left" }}
                rightData={{ id: "2", name: "right" }}
                onClick={(e: any) => console.log(e)}
            />
        </div>
    );
};
```
