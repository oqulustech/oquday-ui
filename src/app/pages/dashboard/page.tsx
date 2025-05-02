'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import NavHeader from '../../../components/Navbar/Navbar';
import styles from './dashboard.module.css';
const AwaitingActionCard = dynamic(() => import('./components/AwaitingActionCard'));
const Greeting = dynamic(() => import('./components/Greeting'));

export default function DashboardPage() {
  const initialHour = new Date().getHours();
  return (
    <div>
      <NavHeader />
      <div className={styles.dashboardContainer}>
        <div className={styles.leftColumn}>
      <Greeting name="Oquday" initialHour={initialHour} />
          <AwaitingActionCard />
        </div>
      </div>
    </div>
  );
}