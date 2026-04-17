export type ReviewStatus = 'draft' | 'needs_review' | 'approved' | 'rejected';

export interface LinkedPractice {
  type: 'meditation' | 'mantra' | 'talk';
  id: string;
}

export interface InspirationDto {
  id: string;
  title: string;
  body: string;
  language: string;
  sourceLabel: string;
  sourceUrl: string | null;
  reviewStatus: ReviewStatus;
  linkedPractice?: LinkedPractice;
}

export interface ApiEnvelope<T> {
  data: T;
  meta?: Record<string, unknown>;
}

export interface ApiErrorEnvelope {
  error: {
    code: string;
    message: string;
    detail?: unknown;
  };
}

