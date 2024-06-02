export interface PrivateMessages {
    id: number;
    message_text: string;
    image?: string;
    user_id_1: number;
    user_id_2: number;
    created_at?: Date;
    updated_at?: Date;
}
