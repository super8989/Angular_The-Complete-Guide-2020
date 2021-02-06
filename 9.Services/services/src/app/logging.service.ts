export class LoggingService {
  logStatusChange(status: string) {
    console.log(`Server status changed, new status ${status}`);
  }
}
