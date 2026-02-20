import { sanityClient } from '@/lib/sanityClient';
import { GAME_TYPE_MAP } from '@/features/dashboard/constants/gameTypes';
import type { CreateUserFormData } from '@/types/ui.types';
import type { usersProps } from '@/types/user.types';

export const getUsers = async (): Promise<usersProps[]> => {
  try {
    const data: usersProps[] = await sanityClient.fetch(
      `*[_type == "user"] | order(_createdAt desc)`
    );
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const createUser = async (formData: CreateUserFormData) => {
  try {
    const existing = await sanityClient.fetch(
      `*[_type=="user" && email==$email][0]`,
      { email: formData.email }
    );

    if (existing) {
      throw new Error('User with this email already exists');
    }

    const gamesArray = Array.isArray(formData.games) ? formData.games : [];

    const assignedGames = gamesArray.map((game: string) => ({
      gameName: game,
      type: GAME_TYPE_MAP[game] || 'Other',
    }));

    const doc = {
      _type: 'user',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      assignedGames,
    };

    const res = await sanityClient.create(doc);
    return res;
  } catch (error: unknown) {
    console.error('Error creating user:', error);
    throw error;
  }
};
