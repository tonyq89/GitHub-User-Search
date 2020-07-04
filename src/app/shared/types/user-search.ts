export interface UserSearchResponse {
    total_count: number;
    items: (UserSearchItem | UserSearchDetail)[];
}

export interface UserSearchItem {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string; 
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    score: number;
}


export interface UserSearchDetail extends UserSearchItem{
    name: string,
    company: string,
    blog: string,
    location: string,
    email: string,
    hireable: string,
    bio: string,
    twitter_username: string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string,
    updated_at: string
}

export interface UserSearchPagingInfo {
    first: string;
    last: string;
    next: string;
    prev: string;
}


export interface UserDetail {
    items: UserSearchDetail[];
}
