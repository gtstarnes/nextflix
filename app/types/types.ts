export type Feature = {
    title?: string,
    name?: string,
    release_date: string,
    overview: string,
    backdrop_path: string
    id: number
    vote_average: number
}

export type Row = {
    title: string,
    fetchURL: string,
    id: number
}