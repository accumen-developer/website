export interface ScrollingTextItem {
  readonly id: string;
  readonly text: string;
}

export const scrollingTextItems1: ScrollingTextItem[] = [
  { id: 'retail', text: 'Retail Landscape' },
  { id: 'bfsi', text: 'Banking Financial Services and Insurance' },
  { id: 'healthcare', text: 'Healthcare' },
  { id: 'education', text: 'Education' }
] as const;

export const scrollingTextItems2: ScrollingTextItem[] = [
  { id: 'cost-effective', text: 'Cost-Effective' },
  { id: 'smart-spending', text: 'Smart Spending' },
  { id: 'data-driven', text: 'Data-Driven Decisions' },
  { id: 'efficiency', text: 'Increased Efficiency' }
] as const;