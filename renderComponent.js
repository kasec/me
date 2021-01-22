import { createSSRApp } from 'vue'

export const createComponent = async (url) => {
    console.log({ url });
    const component = await import(importPath).then((component) => {
        console.log({ component });
        if(component && !! component.default === false) throw "You must import your component as default"
    
        return createSSRApp(component.default).then(resp => {
            console.log({resp});
        }).catch(erly => console.log({erly}))
    }).catch(err => {
        console.log({ err });
    })

    return component
}
