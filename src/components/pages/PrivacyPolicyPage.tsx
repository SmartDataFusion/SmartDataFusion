import React from 'react';
import { PageFrame } from './PageFrame';
import { PrivacyPolicy } from '../landing/PrivacyPolicy';
import { Footer } from '../landing/Footer';

interface PrivacyPolicyPageProps {
  onLaunchDashboard: () => void;
}

export function PrivacyPolicyPage({ onLaunchDashboard }: PrivacyPolicyPageProps) {
  return (
    <PageFrame
      eyebrow="// PRIVACY POLICY"
      title="How SmartDataFusion handles personal data, cookies, and service providers."
      description="This policy explains how SmartDataFusion Analytics Inc. collects and uses information across the website, contact forms, authentication flows, and support tools."
      onLaunchDashboard={onLaunchDashboard}>

      <PrivacyPolicy />
      <Footer />
    </PageFrame>
  );
}