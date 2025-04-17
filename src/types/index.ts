import { IconName } from '@/components/Icons';

export interface AlertCard {
  title: string;
  count: number;
  description: string;
  icon: IconName;
}

export interface LiveAlert {
  id: string;
  message: string;
  timestamp: Date;
}

export interface ProgressStep {
  title: string;
  description: string;
  icon: IconName;
}