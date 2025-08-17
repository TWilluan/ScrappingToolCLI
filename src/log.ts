class WebScrapperLog {
  constructor() {}

  public logStart(): void {
    console.log("🕷️  Web Scraper CLI Tool");
    console.log("========================");
    console.log('Type "help" to see available commands');
    console.log('Type "exit" to quit\n');
  }

  public logEnd(): void {}
}
