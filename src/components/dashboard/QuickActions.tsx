import { Plus, Upload, Eye, Users, ClipboardCheck, FileBarChart, UserPlus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { usePermissions } from '@/hooks/usePermissions';
import { useNavigate } from 'react-router-dom';

interface ActionItem {
  icon: React.ElementType;
  label: string;
  description: string;
  path: string;
  color: string;
}

export function QuickActions() {
  const { isSupervisor } = usePermissions();
  const navigate = useNavigate();

  const officerActions: ActionItem[] = [
    {
      icon: Plus,
      label: 'New Application',
      description: 'Submit a new application',
      path: '/applications/new',
      color: 'bg-primary text-primary-foreground hover:bg-primary/90',
    },
    {
      icon: Upload,
      label: 'Upload Document',
      description: 'Add supporting documents',
      path: '/documents',
      color: 'bg-accent text-accent-foreground hover:bg-accent/90',
    },
    {
      icon: Eye,
      label: 'View My Cases',
      description: 'See your assigned cases',
      path: '/applications',
      color: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    },
  ];

  const supervisorActions: ActionItem[] = [
    {
      icon: ClipboardCheck,
      label: 'Review Pending',
      description: 'Review pending submissions',
      path: '/applications?status=pending',
      color: 'bg-warning text-warning-foreground hover:bg-warning/90',
    },
    {
      icon: UserPlus,
      label: 'Assign Cases',
      description: 'Distribute workload',
      path: '/applications',
      color: 'bg-primary text-primary-foreground hover:bg-primary/90',
    },
    {
      icon: FileBarChart,
      label: 'Generate Report',
      description: 'Create analytics reports',
      path: '/reports',
      color: 'bg-accent text-accent-foreground hover:bg-accent/90',
    },
    {
      icon: Users,
      label: 'Team Overview',
      description: 'View team performance',
      path: '/reports',
      color: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    },
  ];

  const actions = isSupervisor ? supervisorActions : officerActions;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {actions.map((action) => (
            <Button
              key={action.label}
              variant="outline"
              className="h-auto p-4 flex flex-col items-start gap-2 border-2 hover:border-primary/50 transition-all"
              onClick={() => navigate(action.path)}
            >
              <div className={`p-2 rounded-lg ${action.color}`}>
                <action.icon className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="font-medium text-sm">{action.label}</p>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
