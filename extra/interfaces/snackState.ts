export interface SnackState {
    message: string;
    type: 'error' | 'success' | 'warning' | 'info';
    open: boolean;
}