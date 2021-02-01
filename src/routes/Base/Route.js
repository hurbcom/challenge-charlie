export default function makeRoutes(entity) {
    return [
        {
            path: `/${entity}`,
            name: `${entity}.index`,
            component: () => import(`@/pages/${entity}/Index`)
        },
        {
            path: `/${entity}/create`,
            name: `${entity}.create`,
            component: () => import(`@/pages/${entity}/Form`)
        },
        {
            path: `/${entity}/:id/edit`,
            name: `${entity}.edit`,
            component: () => import(`@/pages/${entity}/Form`)
        },
    ]
}

export function makeSubRoutes(entity) {
    return [
        {
            path: `${entity}`,
            name: `${entity}.index`,
            component: () => import(`@/pages/${entity}/Index`)
        },
        {
            path: `${entity}/create`,
            name: `${entity}.create`,
            component: () => import(`@/pages/${entity}/Form`)
        },
        {
            path: `${entity}/:id/edit`,
            name: `${entity}.edit`,
            component: () => import(`@/pages/${entity}/Form`)
        },
    ]
}