# use-in-on-screen

hook to know if a element is on the screen

```
    import useInScreen from "use-in-screen";


    const isInViewport = useInScreen(element);

```

# With REACT ⚛ !!!

```
    import React, { useState, useRef } from "react"
    import useInScreen from "use-in-screen";

    function MyComponent() {
        const isInViewport = useInScreen(element);

        const element = useRef(null)

        return (
            <div ref={element}>
                this div {isInViewport ? "is" : "is not"} on screen
            </div>
        )

    }

```

### Parameters

- element could be ref or current (domHTML)
- onlyOnce if only can happen once
- dividend if you want it to come out with a few pixels before based on a parameter to divide the screen

🙌 Good luck out there my friend 🙌
