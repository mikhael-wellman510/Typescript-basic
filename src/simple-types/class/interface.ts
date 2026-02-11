export interface Profile {
  id: number;
  name: string;
  addres: string;
  age: number;
}

export interface ProfileService {
  getName(id: number): string;
  addProfile(profile: Profile): void;
  findAll(): Profile[];
  //   findById(id: number): Profile;
  updated(id: number, profile: Profile): Profile | string;
  deleted(id: number): boolean;
}
