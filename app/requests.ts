const api_key = process.env.NEXT_PUBLIC_MOVIE_API_KEY

export const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`,
}