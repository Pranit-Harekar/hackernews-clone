/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Feeds
// ====================================================

export interface Feeds_feed_links {
  __typename: "Link";
  id: string;
  createdAt: any;
  url: string;
  description: string;
}

export interface Feeds_feed {
  __typename: "Feed";
  links: Feeds_feed_links[];
}

export interface Feeds {
  feed: Feeds_feed;
}
