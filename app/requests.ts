const api_key = process.env.NEXT_PUBLIC_MOVIE_API_KEY

export const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`,
    requestPopularTV: `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`,
    requestTopRatedTV: `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`,
    requestDocumentary: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99&include_adult=false`,
    requestReality: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_genres=10763`
}