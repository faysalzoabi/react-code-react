import React, {useEffect} from 'react';

const Resize = () => {

    useEffect(() => {
        console.log('mounted')
        const resizeDocumentTitle = () => {
            document.title = window.innerWidth
        }
        window.addEventListener("resize", resizeDocumentTitle)

        return () => {
            window.removeEventListener("resize", resizeDocumentTitle)
        }
    }, [])

    return(
        <h1>Resize</h1>
    )
}

export default Resize