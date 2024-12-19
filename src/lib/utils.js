export function createRavPts(width) {
    const scaleBy = 4
    const emptyArr = Array(width/scaleBy+1)
    return [...emptyArr].map((_, i) => {
        return `${i*scaleBy}px ${i%2==0?"4px": "0px"}`
    }).concat([...emptyArr].map((_, i) => {
        return `${i%2==0?width-scaleBy: width}px ${i*scaleBy}px `
    })).concat([...emptyArr].map((_, i) => {
        return `${width-i*scaleBy}px ${i%2==0?width-scaleBy: width}px`
    })).concat([...emptyArr].map((_, i) => {
        return `${i%2==0?"4": "0"}px ${width-i*scaleBy}px `
    })).join(',')
}

export function createFarPts(width) {
    const scaleBy = 4
    const emptyArr = Array(width/scaleBy+1)

    return ["18px 16px", "22px 16px"].concat([...emptyArr].map((_, i) => {
        return `${i%2==0?width-scaleBy: width}px ${i*scaleBy}px `
    })).concat(["22px 24px", "18px 24px"]).concat([...emptyArr].map((_, i) => {
        return `${i%2==0?"4": "0"}px ${width-i*scaleBy}px `
    })).join(',')
}