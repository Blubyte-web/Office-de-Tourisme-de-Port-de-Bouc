import ScrollProgress from '../ScrollProgress';

export default function ScrollProgressExample() {
  return (
    <div className="min-h-[200vh] bg-background">
      <ScrollProgress />
      <div className="pt-32 px-4 space-y-32">
        <p className="text-muted-foreground text-center">Scroll down to see the progress bar</p>
        <p className="text-muted-foreground text-center">Keep scrolling...</p>
        <p className="text-muted-foreground text-center">Almost there!</p>
      </div>
    </div>
  );
}
