import isPlainObject from './isPlainObject';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function get(obj: Record<string, any>, path: string, defaultValue?: any): any {
    const pathArr = path.split('.');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    let result = obj[pathArr[0]];
    if (result === undefined) {
        return result;
    }
    if (isPlainObject(result)) {
        for (let i = 1; i < pathArr.length; i++) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
            const current = result[pathArr[i]];
            if (typeof current === 'undefined') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                result = defaultValue || undefined;
                break;
            }
            //eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
            result = result[pathArr[i]];
        }
    }


    return result;
}

export default get;