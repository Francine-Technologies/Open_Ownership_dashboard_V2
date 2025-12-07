import { FileText, Clock, CheckCircle, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface KPICardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ElementType;
  iconColor?: string;
}

function KPICard({ title, value, change, icon: Icon, iconColor = 'text-primary' }: KPICardProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  return (
    <Card className="relative overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {change !== undefined && (
              <div className="flex items-center gap-1">
                {isPositive ? (
                  <TrendingUp className="h-4 w-4 text-success" />
                ) : isNegative ? (
                  <TrendingDown className="h-4 w-4 text-destructive" />
                ) : null}
                <span
                  className={cn(
                    'text-sm font-medium',
                    isPositive && 'text-success',
                    isNegative && 'text-destructive',
                    !isPositive && !isNegative && 'text-muted-foreground'
                  )}
                >
                  {isPositive && '+'}
                  {change}% from last month
                </span>
              </div>
            )}
          </div>
          <div className={cn('p-3 rounded-xl bg-primary/10', iconColor.replace('text-', 'bg-').replace('primary', 'primary/10'))}>
            <Icon className={cn('h-6 w-6', iconColor)} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface KPICardsProps {
  totalApplications: number;
  pendingReviews: number;
  approvedThisMonth: number;
  revenueCollected: number;
}

export function KPICards({ totalApplications, pendingReviews, approvedThisMonth, revenueCollected }: KPICardsProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-ZM', {
      style: 'currency',
      currency: 'ZMW',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <KPICard
        title="Total Applications"
        value={totalApplications.toLocaleString()}
        change={12}
        icon={FileText}
        iconColor="text-primary"
      />
      <KPICard
        title="Pending Reviews"
        value={pendingReviews}
        change={-8}
        icon={Clock}
        iconColor="text-warning"
      />
      <KPICard
        title="Approved This Month"
        value={approvedThisMonth}
        change={24}
        icon={CheckCircle}
        iconColor="text-success"
      />
      <KPICard
        title="Revenue Collected"
        value={formatCurrency(revenueCollected)}
        change={18}
        icon={DollarSign}
        iconColor="text-accent"
      />
    </div>
  );
}
