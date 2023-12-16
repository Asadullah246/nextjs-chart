export interface FAQCategoryItem {
  label: string;
  link: {
    uid: string;
    lang: string;
    url: string;
  };
}

export interface FAQCategorySubcategory {
  heading: string;
  items: {
    question: string;
    url: string;
  }[];
}
