export declare namespace data {
  type Event = {
    id: string;
    title: string;
    category: string;
    date: string;
    imgUrl: string;
    content: string;
    relatedID: string[];
  };
  type PolicyContent = {
    policy: string;
    description: string;
  };
  type Policy = {
    id: string;
    title: string;
    category: string;
    imgUrl: string;
    content: PolicyContent[];
    relatedID: string[];
  };
  type DonationPlan = {
    name: string;
    price: number;
    sponsor: number;
  };
  type Donation = {
    category: string;
    totalMoney: number;
    plan: DonationPlan[];
  };
}
export declare namespace general {
  type FetchResult<T> = {
    data: Ref<T | null>;
    error: Ref<Error | null>;
  };
}
