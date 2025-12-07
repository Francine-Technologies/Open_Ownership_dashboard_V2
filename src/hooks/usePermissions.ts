import { useAuth } from '@/contexts/AuthContext';

export function usePermissions() {
  const { user } = useAuth();
  
  const isSupervisor = user?.role === 'supervisor';
  const isOfficer = user?.role === 'officer';
  
  return {
    isSupervisor,
    isOfficer,
    canViewAllApplications: isSupervisor,
    canAssignCases: isSupervisor,
    canViewTeamPerformance: isSupervisor,
    canAccessReports: isSupervisor,
    canBulkAction: isSupervisor,
    canGenerateReports: isSupervisor,
  };
}
