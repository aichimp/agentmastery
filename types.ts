import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ComparisonPoint {
  metric: string;
  iframe: number;
  n8n: number;
  fullMark: number;
}

export interface StepItem {
  num: string;
  title: string;
  content: string;
}

export interface ComparisonRow {
  feature: string;
  iframe: string;
  n8n: string;
  highlight: 'iframe' | 'n8n' | 'neutral';
}
