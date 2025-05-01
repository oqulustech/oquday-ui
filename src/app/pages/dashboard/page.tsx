'use client';

import React from 'react';
import NavHeader from '../../../components/Navbar/Navbar';
import AwaitingActionCard from './components/AwaitingActionCard';
import styles from './dashboard.module.css';
import Greeting from './components/Greeting';

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