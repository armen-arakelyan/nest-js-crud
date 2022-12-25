interface ListData {
    _id: number;
    name: string;
}

interface ModifiedBody extends ReadableStream<Uint8Array> {
    _id?: number;
    name?: string;
}

export { ListData, ModifiedBody }