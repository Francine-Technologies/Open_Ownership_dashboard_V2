import { AlertCircle, Clock, Send, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Payment, PaymentStatus } from '@/types';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface PendingPaymentsProps {
  payments: Payment[];
}

const statusConfig: Record<PaymentStatus, { label: string; color: string; icon: React.ElementType }> = {
  pending: { label: 'Pending', color: 'text-warning bg-warning/10', icon: Clock },
  overdue: { label: 'Overdue', color: 'text-destructive bg-destructive/10', icon: AlertCircle },
  paid: { label: 'Paid', color: 'text-success bg-success/10', icon: Clock },
  cancelled: { label: 'Cancelled', color: 'text-muted-foreground bg-muted', icon: Clock },
};

export function PendingPayments({ payments }: PendingPaymentsProps) {
  const navigate = useNavigate();
  const pendingPayments = payments.filter(p => p.status === 'pending' || p.status === 'overdue');

  const formatCurrency = (value: number, currency: string) => {
    return new Intl.NumberFormat('en-ZM', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-lg font-semibold">Pending Payments</CardTitle>
        <Button variant="ghost" size="sm" onClick={() => navigate('/payments')}>
          View All
          <ExternalLink className="ml-1 h-3 w-3" />
        </Button>
      </CardHeader>
      <CardContent>
        {pendingPayments.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Clock className="h-10 w-10 mx-auto mb-2 opacity-50" />
            <p>No pending payments</p>
          </div>
        ) : (
          <div className="space-y-3">
            {pendingPayments.slice(0, 4).map((payment) => {
              const status = statusConfig[payment.status];
              const daysUntilDue = getDaysUntilDue(payment.dueDate);
              const StatusIcon = status.icon;

              return (
                <div
                  key={payment.id}
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className={cn('p-2 rounded-lg', status.color)}>
                      <StatusIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{payment.applicantName}</p>
                      <p className="text-xs text-muted-foreground">{payment.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Due: {formatDate(payment.dueDate)}
                        {payment.status === 'overdue' && (
                          <span className="text-destructive ml-1">({Math.abs(daysUntilDue)} days overdue)</span>
                        )}
                        {payment.status === 'pending' && daysUntilDue <= 3 && daysUntilDue > 0 && (
                          <span className="text-warning ml-1">({daysUntilDue} days left)</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    <p className="font-semibold">{formatCurrency(payment.amount, payment.currency)}</p>
                    <Badge variant={payment.status === 'overdue' ? 'destructive' : 'secondary'} className="text-xs">
                      {status.label}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
