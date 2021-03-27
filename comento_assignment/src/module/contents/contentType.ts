export interface ContentType {
  id:          number;
  title:       string;
  contents:    string;
  category_id: number;
  user_id:     number;
  created_at:  Date;
  updated_at:  Date;
}