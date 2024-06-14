export interface MonitoringTool {
  captureAndLogException(error: Error): void;
}
