/**
 * @description Get modules with vite glob and return post by categories with name, tags, description, date
 * @returns {Array<{category: string, name: string, tags: string[], description: string, date: string}>}
 */

export const handleModules = (modules, manifest) => {
    let tags = []
    let categories = []

    const newModules = Object.keys(modules).map(rawPath => {
        const path = rawPath.replace(/.*pages\//, "").replace(/.(md|vue)/, "").replace(/^\.\//, "")
        
        const [ category, ..._tags ] = (path.match(/.+?\//g) || []).map(tag => tag.replace(/^\//, "").replace(/\/$/, ""))
        
        const name = path.replace(/.+\//, "")
        
        if(name === "index") return 

        const { title, description, date } = manifest?.[category]?.[name] || {}

        if(!! title === false) console.warn(`Add Title value to [${category}] [${name}] `)
        if(!! description === false) console.warn(`Add description value to [${category}] [${name}] `)
        if(!! date === false) console.warn(`Add date value to [${category}] [${name}] `)

        tags = [...tags, ..._tags.filter(tag => !! tags.includes(tag) === false )]
        categories = !! categories.includes(category) === false ? categories.concat(category) : categories
        return {
            title, description, date, category, tags: _tags, path: `/${path}`
        }
    }).filter(item => item)

    return [newModules, tags, categories]
}
