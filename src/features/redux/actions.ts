
export type ToggleFilter={type:'toggleFilter', payload:string};

export const toggleFilterAction = (payload: string): ToggleFilter => ({
    type: 'toggleFilter',
    payload,
});