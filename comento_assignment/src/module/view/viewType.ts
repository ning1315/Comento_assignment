export interface viewType {
  id:          number;
  title:       string;
  contents:    string;
  category_id: number;
  user_id:     number;
  created_at:  Date;
  updated_at:  Date;
  category:    Category;
  reply:       Reply[];
  user:        User;
}

export interface Category {
  id:         number;
  name:       string;
  created_at: Date;
  updated_at: Date;
}

export interface Reply {
  id:         number;
  user_id:    number;
  parent:     number;
  contents:   string;
  created_at: Date;
  updated_at: Date;
  user:       User;
}

export interface User {
  id:                number;
  name:              string;
  email:             string;
  email_verified_at: Date;
  created_at:        Date;
  updated_at:        Date;
}