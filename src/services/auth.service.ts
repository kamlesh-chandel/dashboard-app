import { sanityClient } from '@/lib/sanityClient';

export const loginUser = async (email: string, password: string) => {
  try {
    const user = await sanityClient.fetch(
      `*[_type=="user" && email==$email && password==$password][0]`,
      { email, password }
    );

    return user;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
