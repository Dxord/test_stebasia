import {ApiResponse} from './apiResponseTypes';

export interface AccountProfileParams {}
export type AccountProfileResponse = ApiResponse<AccountProfile>
export interface AccountProfile {
  iduser: string;
  nama: string;
  avatar: string;
  kode_lokasi: string;
  notelp: string;
  email: string;
  prov: string;
  kab: string;
  kec: string;
  kel: string;
}
export interface AccountProfileState extends AccountProfile {
  nameInitial: string;
  nameFormatted: string;
}

export interface AccountProfileAvatarParams {}
export type AccountProfileAvatarResponse = ApiResponse<string>
