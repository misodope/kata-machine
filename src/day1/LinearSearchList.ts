export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (const num of haystack) {
        if (needle === num) return true;
    }

    return false;
}
