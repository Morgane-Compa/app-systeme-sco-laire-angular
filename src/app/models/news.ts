export interface News {
    id: number;
    news_text: string;
    image?: string;
    user_id: number;
    school_id: number;
    classroom_id?: number;
    created_at?: Date;
    updated_at?: Date;
}
