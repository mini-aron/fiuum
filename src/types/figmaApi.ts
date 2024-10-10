export interface UserData {
  id: string;
  handle: string;
  img_url: string;
  email: string;
}

export interface Version {
  id: string;
  created_at: string;
  label: string;
  description: string;
  user: UserData;
}

export interface ProjectType {
  id: number;
  name: string;
}
