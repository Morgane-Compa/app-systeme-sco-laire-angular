export interface User {
    id: number;
    firstname: string;
    lastname: string;
    mail: string;
    phone_number: string;
    user_image_id?: number;
    password: string;
    user_role: boolean;
    school_id: number;
    created_at?: Date;
    updated_at?: Date;
  }