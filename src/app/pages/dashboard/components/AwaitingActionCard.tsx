import React from 'react';
import styles from './AwaitingActionCard.module.css';
import awaitingActionsData from './awaitingActionsData';

function AwaitingActionCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Awaiting Your Action</h3>
        <div className={styles.moreOptions}>...</div>
      </div>
      <ul className={styles.actionList}>
        {awaitingActionsData.map((action:any) => (
          <li key={action.id} className={styles.actionItem}>
            <span className={styles.icon}>{action.icon}</span>
            <div className={styles.details}>
              <div className={styles.title}>{action.title}</div>
              <div className={styles.meta}>{action.details}</div>
              <div className={styles.dueDate}>Due: {action.dueDate}</div>
            </div>
            {action.link && (
              <a href={action.link} className={styles.actionLink}>
                Go
              </a>
            )}
          </li>
        ))}
      </ul>
      {awaitingActionsData.length > 0 && (
        <a href="/tasks" className={styles.viewAll}>
          Go to My Tasks ({awaitingActionsData.length})
        </a>
      )}
    </div>
  );
}

export default AwaitingActionCard;