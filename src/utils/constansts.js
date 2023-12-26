export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const MOVIE_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_API_KEY,
    }
  };

  export const MOVIE_IMG_CDN = "https://image.tmdb.org/t/p/w500/";

  export const BACKGROUND_IMG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

  export const SUPPORTED_LANGUAGES = [{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"}];

  export const OPENAI_API_KEY =process.env.REACT_APP_OPENAI_KEY ;