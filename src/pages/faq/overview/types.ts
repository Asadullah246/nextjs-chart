export interface FAQOverviewCategory {
  title: string;
  description: string;
  icon: string | null;
  link: {
    uid: string;
    lang: string;
    url: string;
  };
}
