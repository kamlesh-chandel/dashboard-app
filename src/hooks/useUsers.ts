import { useEffect, useState } from 'react';
import { getUsers } from '@/services/user.service';
import type { usersProps } from '@/types/user.types';

export const useUsers = () => {
  const [users, setUsers] = useState<usersProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getUsers();
      setUsers(data);
    } catch {
      setError('Failed to fetch users');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    isLoading,
    error,
    refetch: fetchUsers,
  };
};
