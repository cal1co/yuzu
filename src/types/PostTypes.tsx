export type Post = {
    post_id: string,
    user_id: number,
    post_content: string,
    created_at: string,
    like_count: number,
    comments_count: number,
    liked: boolean
    username:string,
    display_name:string,
    profile_image:string
    profile_image_data:string
    media: string[]
}

export type SearchPost = {
    post_content: string,
    user_id: number,
    created_at: string,
    id: string
}

export type CommentPost = {
    comment_id: string,
    user_id: number,
    parent_post_id: string,
    comment_content: string,
    created_at: string,
    like_count: number; 
    comments_count: number,
    liked: boolean
    username:string,
    display_name:string,
    profile_image:string
    profile_image_data:string
}

export type CombinedPostType = { 
    id: string
    content: string,
    user_id: number,
    parent_post_id: string,
    created_at: string,
    like_count: number; 
    comments_count: number,
    liked: boolean
    username:string,
    display_name:string,
    profile_image:string
    profile_image_data:string
    is_comment: boolean
}
