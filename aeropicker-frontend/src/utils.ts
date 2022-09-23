export const fromDataToSelectOptions = (data: {id: number, brand: string, model: string}[]): string[] => {
    return data.map((item) => {
        return `${item.brand} ${item.model}`
    })
}

export const decomposeAircraftName = (name: string): {brand: string, model: string} => {
    const [brand, model] = name.split(' ')
    return {brand, model}
}