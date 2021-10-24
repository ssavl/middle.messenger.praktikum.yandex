function isPlainObject(value: unknown): value is Record<string, any> {
    return (
        typeof value === 'object' &&
        value !== null &&
        value.constructor === Object &&
        Object.prototype.toString.call(value) === '[object Object]'
    );
}

export default isPlainObject;