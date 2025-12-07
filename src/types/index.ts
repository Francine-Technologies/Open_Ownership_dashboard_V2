export type UserRole = 'officer' | 'supervisor';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  department: string;
}

export type ApplicationStatus = 'pending' | 'in_review' | 'approved' | 'rejected';

export interface Application {
  id: string;
  referenceNumber: string;
  title: string;
  applicantName: string;
  type: string;
  status: ApplicationStatus;
  submittedDate: string;
  lastUpdated: string;
  assignedTo?: string;
  assignedToName?: string;
  priority: 'low' | 'medium' | 'high';
}

export type PaymentStatus = 'pending' | 'overdue' | 'paid' | 'cancelled';

export interface Payment {
  id: string;
  applicationId: string;
  referenceNumber: string;
  applicantName: string;
  amount: number;
  currency: string;
  dueDate: string;
  status: PaymentStatus;
  description: string;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadedBy: string;
  uploadedDate: string;
  applicationId?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  activeCase: number;
  completedThisMonth: number;
  avatar?: string;
}

export interface AnalyticsData {
  totalApplications: number;
  pendingReviews: number;
  approvedThisMonth: number;
  revenueCollected: number;
  applicationTrends: { date: string; count: number }[];
  applicationsByType: { type: string; count: number }[];
  statusDistribution: { status: string; count: number; color: string }[];
  teamPerformance?: TeamMember[];
}
