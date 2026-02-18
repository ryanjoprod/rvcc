import React from 'react'
import { createRoot } from 'react-dom/client'
import Welcome from '../components/Recipes/Welcome'

const componentRegistry = {
    'welcome': Welcome,
}

const ComponentRenderer = ({ componentName, props = {} }) => {
    const Component = componentRegistry[componentName]

    if (!Component) {
        console.warn(`Component "${componentName}" not found in registry`)
        return null
    }

    return <Component {...props} />
}

document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('[data-react-component]')

    containers.forEach(container => {
        const componentName = container.dataset.reactComponent
        const props = JSON.parse(container.dataset.reactProps || '{}')

        const root = createRoot(container)
        root.render(<ComponentRenderer componentName={componentName} props={props} />)
    })
})

export default ComponentRenderer