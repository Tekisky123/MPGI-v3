
function facultyDataSort<T extends { sequence: number }>(data: T[]): T[] {
    return data.sort((a, b) => {
        if (a.sequence === 0) return 1;
        if (b.sequence === 0) return -1;
        return a.sequence - b.sequence;
    });
}

export default facultyDataSort;
