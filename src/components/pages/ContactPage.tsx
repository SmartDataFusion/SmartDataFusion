import React from 'react';
import { PageFrame } from './PageFrame';
import { Contact } from '../landing/Contact';
import { Footer } from '../landing/Footer';

interface ContactPageProps {
  onLaunchDashboard: () => void;
}

export function ContactPage({ onLaunchDashboard }: ContactPageProps) {
  return (
    <PageFrame
      eyebrow="// CONTACT SMARTDATAFUSION"
      title="Start a conversation with the SmartDataFusion team."
      description="Use this page to reach the team for platform questions, demos, integration planning, or support inquiries."
      onLaunchDashboard={onLaunchDashboard}>

      <Contact />
      <Footer />
    </PageFrame>
  );
}