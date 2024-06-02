export interface Classroom {
    id: number;
    classroom_name: string;
    teacher: string;
    grade: string;
    school_id: number;
    created_at?: Date;
    updated_at?: Date;
  }