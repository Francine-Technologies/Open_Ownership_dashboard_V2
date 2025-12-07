import { Application, Payment, Document, TeamMember, AnalyticsData, User } from '@/types';

export const mockUsers: Record<string, User> = {
  officer: {
    id: 'usr_001',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@portal.gov',
    role: 'officer',
    department: 'Customer Service',
  },
  supervisor: {
    id: 'usr_002',
    name: 'Michael Chen',
    email: 'michael.chen@portal.gov',
    role: 'supervisor',
    department: 'Operations Management',
  },
};

export const mockApplications: Application[] = [
  {
    id: 'app_001',
    referenceNumber: 'REF-2024-001234',
    title: 'Business License Renewal',
    applicantName: 'John Smith',
    type: 'License',
    status: 'pending',
    submittedDate: '2024-12-01',
    lastUpdated: '2024-12-05',
    assignedTo: 'usr_001',
    assignedToName: 'Sarah Johnson',
    priority: 'high',
  },
  {
    id: 'app_002',
    referenceNumber: 'REF-2024-001235',
    title: 'Building Permit Application',
    applicantName: 'Emily Davis',
    type: 'Permit',
    status: 'in_review',
    submittedDate: '2024-11-28',
    lastUpdated: '2024-12-04',
    assignedTo: 'usr_001',
    assignedToName: 'Sarah Johnson',
    priority: 'medium',
  },
  {
    id: 'app_003',
    referenceNumber: 'REF-2024-001236',
    title: 'Tax Clearance Certificate',
    applicantName: 'Robert Brown',
    type: 'Certificate',
    status: 'approved',
    submittedDate: '2024-11-25',
    lastUpdated: '2024-12-03',
    assignedTo: 'usr_003',
    assignedToName: 'David Wilson',
    priority: 'low',
  },
  {
    id: 'app_004',
    referenceNumber: 'REF-2024-001237',
    title: 'Import License Request',
    applicantName: 'Maria Garcia',
    type: 'License',
    status: 'rejected',
    submittedDate: '2024-11-20',
    lastUpdated: '2024-12-01',
    assignedTo: 'usr_004',
    assignedToName: 'Lisa Anderson',
    priority: 'medium',
  },
  {
    id: 'app_005',
    referenceNumber: 'REF-2024-001238',
    title: 'Environmental Compliance',
    applicantName: 'James Wilson',
    type: 'Compliance',
    status: 'pending',
    submittedDate: '2024-12-03',
    lastUpdated: '2024-12-05',
    assignedTo: 'usr_001',
    assignedToName: 'Sarah Johnson',
    priority: 'high',
  },
  {
    id: 'app_006',
    referenceNumber: 'REF-2024-001239',
    title: 'Food Safety Permit',
    applicantName: 'Jennifer Lee',
    type: 'Permit',
    status: 'in_review',
    submittedDate: '2024-12-02',
    lastUpdated: '2024-12-05',
    assignedTo: 'usr_003',
    assignedToName: 'David Wilson',
    priority: 'medium',
  },
];

export const mockPayments: Payment[] = [
  {
    id: 'pay_001',
    applicationId: 'app_001',
    referenceNumber: 'REF-2024-001234',
    applicantName: 'John Smith',
    amount: 250.00,
    currency: 'ZMW',
    dueDate: '2024-12-10',
    status: 'pending',
    description: 'Business License Renewal Fee',
  },
  {
    id: 'pay_002',
    applicationId: 'app_002',
    referenceNumber: 'REF-2024-001235',
    applicantName: 'Emily Davis',
    amount: 500.00,
    currency: 'ZMW',
    dueDate: '2024-12-05',
    status: 'overdue',
    description: 'Building Permit Processing Fee',
  },
  {
    id: 'pay_003',
    applicationId: 'app_003',
    referenceNumber: 'REF-2024-001236',
    applicantName: 'Robert Brown',
    amount: 150.00,
    currency: 'ZMW',
    dueDate: '2024-11-30',
    status: 'paid',
    description: 'Tax Clearance Certificate Fee',
  },
  {
    id: 'pay_004',
    applicationId: 'app_005',
    referenceNumber: 'REF-2024-001238',
    applicantName: 'James Wilson',
    amount: 750.00,
    currency: 'ZMW',
    dueDate: '2024-12-15',
    status: 'pending',
    description: 'Environmental Compliance Review Fee',
  },
];

export const mockDocuments: Document[] = [
  {
    id: 'doc_001',
    name: 'Business Registration Certificate.pdf',
    type: 'PDF',
    size: '2.4 MB',
    uploadedBy: 'John Smith',
    uploadedDate: '2024-12-01',
    applicationId: 'app_001',
  },
  {
    id: 'doc_002',
    name: 'Architectural Plans.pdf',
    type: 'PDF',
    size: '15.8 MB',
    uploadedBy: 'Emily Davis',
    uploadedDate: '2024-11-28',
    applicationId: 'app_002',
  },
  {
    id: 'doc_003',
    name: 'Tax Returns 2023.xlsx',
    type: 'Excel',
    size: '856 KB',
    uploadedBy: 'Robert Brown',
    uploadedDate: '2024-11-25',
    applicationId: 'app_003',
  },
  {
    id: 'doc_004',
    name: 'Environmental Impact Report.pdf',
    type: 'PDF',
    size: '8.2 MB',
    uploadedBy: 'James Wilson',
    uploadedDate: '2024-12-03',
    applicationId: 'app_005',
  },
  {
    id: 'doc_005',
    name: 'Company Profile.docx',
    type: 'Word',
    size: '1.2 MB',
    uploadedBy: 'Maria Garcia',
    uploadedDate: '2024-11-20',
    applicationId: 'app_004',
  },
];

export const mockTeamMembers: TeamMember[] = [
  {
    id: 'usr_001',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@portal.gov',
    role: 'Customer Service Officer',
    activeCase: 8,
    completedThisMonth: 24,
  },
  {
    id: 'usr_003',
    name: 'David Wilson',
    email: 'david.wilson@portal.gov',
    role: 'Customer Service Officer',
    activeCase: 12,
    completedThisMonth: 18,
  },
  {
    id: 'usr_004',
    name: 'Lisa Anderson',
    email: 'lisa.anderson@portal.gov',
    role: 'Customer Service Officer',
    activeCase: 6,
    completedThisMonth: 31,
  },
  {
    id: 'usr_005',
    name: 'Tom Martinez',
    email: 'tom.martinez@portal.gov',
    role: 'Customer Service Officer',
    activeCase: 10,
    completedThisMonth: 22,
  },
];

export const mockAnalytics: AnalyticsData = {
  totalApplications: 1247,
  pendingReviews: 89,
  approvedThisMonth: 156,
  revenueCollected: 45680,
  applicationTrends: [
    { date: 'Nov 7', count: 32 },
    { date: 'Nov 14', count: 45 },
    { date: 'Nov 21', count: 38 },
    { date: 'Nov 28', count: 52 },
    { date: 'Dec 1', count: 41 },
    { date: 'Dec 5', count: 48 },
    { date: 'Dec 7', count: 55 },
  ],
  applicationsByType: [
    { type: 'License', count: 420 },
    { type: 'Permit', count: 380 },
    { type: 'Certificate', count: 290 },
    { type: 'Compliance', count: 157 },
  ],
  statusDistribution: [
    { status: 'Approved', count: 680, color: 'hsl(160, 84%, 39%)' },
    { status: 'Pending', count: 320, color: 'hsl(38, 92%, 50%)' },
    { status: 'In Review', count: 180, color: 'hsl(217, 91%, 60%)' },
    { status: 'Rejected', count: 67, color: 'hsl(0, 84%, 60%)' },
  ],
  teamPerformance: mockTeamMembers,
};

// Officer-specific data (filtered)
export const getOfficerApplications = (userId: string) => 
  mockApplications.filter(app => app.assignedTo === userId);

export const getOfficerPayments = (userId: string) => {
  const officerAppIds = getOfficerApplications(userId).map(app => app.id);
  return mockPayments.filter(pay => officerAppIds.includes(pay.applicationId));
};

export const getOfficerAnalytics = (userId: string): AnalyticsData => {
  const officerApps = getOfficerApplications(userId);
  return {
    totalApplications: officerApps.length,
    pendingReviews: officerApps.filter(app => app.status === 'pending').length,
    approvedThisMonth: officerApps.filter(app => app.status === 'approved').length,
    revenueCollected: 12450,
    applicationTrends: [
      { date: 'Nov 7', count: 4 },
      { date: 'Nov 14', count: 6 },
      { date: 'Nov 21', count: 5 },
      { date: 'Nov 28', count: 8 },
      { date: 'Dec 1', count: 6 },
      { date: 'Dec 5', count: 7 },
      { date: 'Dec 7', count: 9 },
    ],
    applicationsByType: [
      { type: 'License', count: 12 },
      { type: 'Permit', count: 8 },
      { type: 'Certificate', count: 5 },
      { type: 'Compliance', count: 3 },
    ],
    statusDistribution: [
      { status: 'Approved', count: 15, color: 'hsl(160, 84%, 39%)' },
      { status: 'Pending', count: 8, color: 'hsl(38, 92%, 50%)' },
      { status: 'In Review', count: 4, color: 'hsl(217, 91%, 60%)' },
      { status: 'Rejected', count: 1, color: 'hsl(0, 84%, 60%)' },
    ],
  };
};
