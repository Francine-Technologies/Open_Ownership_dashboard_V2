import { useAuth } from '@/contexts/AuthContext';
import { usePermissions } from '@/hooks/usePermissions';
import { 
  mockApplications, 
  mockPayments, 
  mockAnalytics, 
  getOfficerApplications, 
  getOfficerPayments,
  getOfficerAnalytics 
} from '@/data/mockData';

import { KPICards } from '@/components/dashboard/KPICards';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { RecentApplications } from '@/components/dashboard/RecentApplications';
import { PendingPayments } from '@/components/dashboard/PendingPayments';
import { AnalyticsCharts } from '@/components/dashboard/AnalyticsCharts';
import { TeamPerformance } from '@/components/dashboard/TeamPerformance';

export default function Dashboard() {
  const { user } = useAuth();
  const { isSupervisor } = usePermissions();

  // Get role-specific data
  const applications = isSupervisor 
    ? mockApplications 
    : getOfficerApplications(user?.id || '');
  
  const payments = isSupervisor 
    ? mockPayments 
    : getOfficerPayments(user?.id || '');
  
  const analytics = isSupervisor 
    ? mockAnalytics 
    : getOfficerAnalytics(user?.id || '');

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
            {greeting()}, {user?.name?.split(' ')[0]}
          </h1>
          <p className="text-muted-foreground mt-1">
            {isSupervisor 
              ? "Here's an overview of your team's performance" 
              : "Here's what's happening with your cases today"
            }
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <KPICards
        totalApplications={analytics.totalApplications}
        pendingReviews={analytics.pendingReviews}
        approvedThisMonth={analytics.approvedThisMonth}
        revenueCollected={analytics.revenueCollected}
      />

      {/* Quick Actions */}
      <QuickActions />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Applications - Wider */}
        <div className="xl:col-span-2">
          <RecentApplications applications={applications} />
        </div>

        {/* Sidebar Content */}
        <div className="space-y-6">
          <PendingPayments payments={payments} />
          
          {/* Team Performance - Supervisor Only */}
          {isSupervisor && analytics.teamPerformance && (
            <TeamPerformance team={analytics.teamPerformance} />
          )}
        </div>
      </div>

      {/* Analytics Charts */}
      <AnalyticsCharts data={analytics} />
    </div>
  );
}
