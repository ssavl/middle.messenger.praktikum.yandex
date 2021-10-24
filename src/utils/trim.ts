function trim(string: string, chars?: string): string {
    if (!chars) {
        return string.trim();
    }
    const reg = new RegExp(`[${chars}]`, 'gi');
    return string.replace(reg, '');
}

export default trim
