import { AlertCard, ProgressStep } from '@/types';
const BASE_TIMESTAMP = '2025-04-17T00:00:00.000Z';
export const alertsData = {
    without: [
        { id: 1, severity: 'high', message: 'Undetected breach attempt', timeToDetect: '48h', timestamp: BASE_TIMESTAMP },
        { id: 2, severity: 'critical', message: 'Ransomware outbreak', timeToDetect: '24h', timestamp: BASE_TIMESTAMP },
        { id: 3, severity: 'medium', message: 'Suspicious login attempts', timeToDetect: '12h', timestamp: BASE_TIMESTAMP },
        { id: 4, severity: 'high', message: 'Data exfiltration detected', timeToDetect: '36h', timestamp: BASE_TIMESTAMP }
    ],
    with: [
        { id: 1, severity: 'low', message: 'Potential breach prevented', timeToDetect: '30s', timestamp: BASE_TIMESTAMP },
        { id: 2, severity: 'medium', message: 'Suspicious activity blocked', timeToDetect: '15s', timestamp: BASE_TIMESTAMP },
        { id: 3, severity: 'low', message: 'Unauthorized access prevented', timeToDetect: '5s', timestamp: BASE_TIMESTAMP },
        { id: 4, severity: 'medium', message: 'Malware attempt blocked', timeToDetect: '10s', timestamp: BASE_TIMESTAMP }
    ]
};

export const alertCards: AlertCard[] = [
    {
        title: 'Ignored Alerts',
        count: 200,
        description: 'Wasting valuable analyst time on false positives',
        icon: 'BellSlash'
    },
    {
        title: 'Wrongly Closed Alerts',
        count: 35,
        description: 'Processing one alert at a time, missing the big picture',
        icon: 'XCircle'
    },
    {
        title: 'Active Threats',
        count: 5,
        description: 'More time fixing SOAR automation, less time on real threats',
        icon: 'Shield'
    }
];

export const mockAlerts = [
    'Suspicious login detected from unknown IP',
    'Potential phishing email detected',
    'Multiple failed authentication attempts',
    'Unusual data transfer pattern detected',
    'Possible malware activity detected'
];

export const progressSteps: ProgressStep[] = [
    {
        title: 'Triaged & Reported',
        description: 'SOC Agent handled investigation and reporting',
        icon: 'CheckCircle'
    },
    {
        title: 'Automated Response',
        description: 'Incident automatically contained',
        icon: 'Shield'
    },
    {
        title: 'Comprehensive Analysis',
        description: 'AI recognized patterns',
        icon: 'CheckCircle'
    }
];
export const metrics = {
    without: {
        responseTime: '4 hours',
        falsePositives: '75%',
        coverage: '40%'
    },
    with: {
        responseTime: '5 minutes',
        falsePositives: '2%',
        coverage: '99%'
    }
};

