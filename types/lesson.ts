export interface Lesson {
  id: string;
  title: string;
  teachingDate?: string;
  facilitator?: string;
  description?: string;
  scripturePassage?: string;
  studyNotes?: string;
  youtubeUrl?: string;
  [key: string]: any;
}
