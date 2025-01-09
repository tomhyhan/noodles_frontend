import GoogleAnalytics from '@/components/GoogleAnalytics';

export default function NoodleLayout({ children }) {
  return (
    <section>
      {children}
      <GoogleAnalytics />
    </section>
  );
}
