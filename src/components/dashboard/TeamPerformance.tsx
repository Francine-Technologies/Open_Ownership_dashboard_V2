import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { TeamMember } from '@/types';

interface TeamPerformanceProps {
  team: TeamMember[];
}

export function TeamPerformance({ team }: TeamPerformanceProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  const maxCompleted = Math.max(...team.map(m => m.completedThisMonth));

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Team Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {team.map((member) => {
            const completionRate = (member.completedThisMonth / maxCompleted) * 100;
            
            return (
              <div key={member.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs bg-primary/10 text-primary">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {member.activeCase} active • {member.completedThisMonth} completed
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-primary">{member.completedThisMonth}</p>
                    <p className="text-xs text-muted-foreground">this month</p>
                  </div>
                </div>
                <Progress value={completionRate} className="h-2" />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
