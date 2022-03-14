export function factoryEnvelope<T>(data: T | null) {
    return {
        item: data || null,
    };
}