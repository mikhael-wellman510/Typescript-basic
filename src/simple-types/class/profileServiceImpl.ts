import { Profile, ProfileService } from "./interface";

export class ProfileServiceImpl implements ProfileService {
  private listProfile: Profile[] = [];

  getName(id: number): string {
    const res = this.listProfile.find((res) => res.id === id);

    if (!res) {
      return `Data id : ${id}, tidak ditemukan`;
    }

    return `Nama saya ${res?.name}`;
  }

  addProfile(profile: Profile): void {
    const data = this.listProfile.push(profile);
  }

  findAll(): Profile[] {
    return this.listProfile;
  }

  updated(id: number, profile: Profile): Profile | string {
    const cek = this.listProfile.find((val) => val.id === id);

    if (!cek) {
      return "Id tidak ditemukan";
    }

    this.listProfile = this.listProfile.map((val) =>
      val.id === id ? { ...val, ...profile } : val,
    );

    const updated: Profile | undefined = this.listProfile.find(
      (val) => val.id === profile.id,
    );

    return updated ?? "Updated Gagal";
  }

  deleted(id: number): boolean {
    const cek: Profile | undefined = this.listProfile.find(
      (val) => val.id === id,
    );
    if (!cek) {
      return false;
    }
    this.listProfile = this.listProfile.filter((val) => val.id != id);

    return true;
  }
}
