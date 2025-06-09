import React, { Component, ReactNode } from 'react';

import styles from './error-boundary.module.scss';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
    errorInfo?: React.ErrorInfo;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = {
        hasError: false,
    };

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({ error, errorInfo });
        console.error('Uncaught error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className={styles.root}>
                    <div className={styles.errorMessageContainer}>
                        <h1 className={styles.errorMessage}>Something went wrong.</h1>
                        <p className={styles.supportMessage}>Please try refreshing the page or contact support.</p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
