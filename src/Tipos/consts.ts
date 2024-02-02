export const TODO_FILTERS ={
    ALL : 'all',
    ACTIVE :'active',
    COMPLETES : 'completed'
} as const

export  const FILTER_BUTTONS = {
    [TODO_FILTERS.ALL]:{
        literal :'Todos',
        href:`/filter=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]:{
        literal :'Activos',
        href:`/filter=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETES]:{
        literal :'Completados',
        href:`/filter=${TODO_FILTERS.COMPLETES}`
    }

}